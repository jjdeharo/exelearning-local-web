/**
 * WebFileSystem - File system adapter for web browser environment.
 *
 * Uses browser APIs for file operations:
 * - Blob URLs for downloads
 * - File input for opens
 * - No folder export support (downloads ZIP instead)
 *
 * @extends FileSystemAdapter
 */

import { FileSystemAdapter } from './FileSystemAdapter.js';

export class WebFileSystem extends FileSystemAdapter {
    constructor() {
        super();
        this.state = WebFileSystem.getState();
    }

    /**
     * Save data with download (browser has no save dialog access)
     * @param {Uint8Array|Blob|ArrayBuffer} data - File data
     * @param {string} suggestedName - Suggested filename
     * @param {Object} options - Additional options
     * @returns {Promise<{success: boolean, path?: string, error?: string}>}
     */
    async saveAs(data, suggestedName, options = {}) {
        if (this._supportsSaveFilePicker()) {
            try {
                const handle = await this._pickSaveHandle(suggestedName, options);
                if (!handle) {
                    return { success: false, error: 'Canceled by user' };
                }
                return await this._writeToHandle(handle, data, suggestedName, options);
            } catch (error) {
                if (error?.name === 'AbortError') {
                    return { success: false, error: 'Canceled by user' };
                }
                console.warn('[WebFileSystem] saveAs picker failed, falling back to download:', error);
            }
        }

        return this._download(data, suggestedName, options);
    }

    /**
     * Save data (same as saveAs in web - no path persistence)
     * @param {Uint8Array|Blob|ArrayBuffer} data - File data
     * @param {string} projectKey - Ignored in web version
     * @param {string} suggestedName - Suggested filename
     * @param {Object} options - Additional options
     * @returns {Promise<{success: boolean, path?: string, error?: string}>}
     */
    async save(data, projectKey, suggestedName, options = {}) {
        if (this.state.currentFileHandle) {
            try {
                return await this._writeToHandle(
                    this.state.currentFileHandle,
                    data,
                    suggestedName,
                    options
                );
            } catch (error) {
                if (error?.name !== 'AbortError') {
                    console.warn('[WebFileSystem] save to existing handle failed, falling back:', error);
                }
            }
        }

        return this.saveAs(data, suggestedName, options);
    }

    /**
     * Open file with file input dialog
     * @param {string[]} extensions - Allowed extensions
     * @param {Object} options - Additional options
     * @returns {Promise<{success: boolean, data?: Uint8Array, name?: string, error?: string}>}
     */
    async open(extensions, options = {}) {
        if (this._supportsOpenFilePicker()) {
            try {
                const [handle] = await window.showOpenFilePicker({
                    multiple: false,
                    types: [this._buildPickerType(extensions)],
                });

                if (!handle) {
                    return { success: false, error: 'Canceled by user' };
                }

                const file = await handle.getFile();
                const arrayBuffer = await file.arrayBuffer();
                this._setCurrentFileHandle(handle);

                return {
                    success: true,
                    data: new Uint8Array(arrayBuffer),
                    name: file.name,
                    file,
                    handle,
                };
            } catch (error) {
                if (error?.name === 'AbortError') {
                    return { success: false, error: 'Canceled by user' };
                }
                console.warn('[WebFileSystem] open picker failed, falling back to file input:', error);
            }
        }

        return new Promise((resolve) => {
            const input = document.createElement('input');
            input.type = 'file';

            // Build accept string from extensions
            if (extensions && extensions.length > 0) {
                input.accept = extensions.map(ext =>
                    ext.startsWith('.') ? ext : `.${ext}`
                ).join(',');
            }

            input.onchange = async (event) => {
                const file = event.target.files?.[0];
                if (!file) {
                    resolve({ success: false, error: 'No file selected' });
                    return;
                }

                try {
                    const arrayBuffer = await file.arrayBuffer();
                    this._clearCurrentFileHandle();
                    resolve({
                        success: true,
                        data: new Uint8Array(arrayBuffer),
                        name: file.name,
                        file,
                    });
                } catch (error) {
                    console.error('[WebFileSystem] open error:', error);
                    resolve({ success: false, error: error.message });
                }
            };

            input.oncancel = () => {
                resolve({ success: false, error: 'Canceled by user' });
            };

            // Trigger file dialog
            input.click();
        });
    }

    /**
     * Read file by path - NOT SUPPORTED in web
     * @param {string} filePath - Path to file
     * @returns {Promise<{success: boolean, error: string}>}
     */
    async readFile(filePath) {
        return {
            success: false,
            error: 'readFile is not supported in web browser',
        };
    }

    /**
     * Export to folder - NOT SUPPORTED in web (downloads ZIP instead)
     * @param {Uint8Array|Blob|ArrayBuffer} zipData - ZIP file data
     * @param {string} suggestedName - Suggested folder name
     * @param {Object} options - Additional options
     * @returns {Promise<{success: boolean, path?: string, error?: string}>}
     */
    async exportToFolder(zipData, suggestedName, options = {}) {
        // Web can't extract to folder, download ZIP instead
        const zipName = suggestedName.endsWith('.zip')
            ? suggestedName
            : `${suggestedName}.zip`;

        return this._download(zipData, zipName, options);
    }

    /**
     * Check if this adapter supports a specific capability
     * @param {string} capability - Capability name
     * @returns {boolean}
     */
    supports(capability) {
        const capabilities = {
            saveToPath: false,      // Web can't save to specific path
            exportToFolder: false,  // Web can only download ZIP
            readFile: false,        // Web can't read by path
            nativeDialogs: false,   // Uses browser dialogs
        };
        return capabilities[capability] || false;
    }

    /**
     * Internal download helper
     * @private
     */
    async _download(data, filename, options = {}) {
        try {
            const blob = await this._toBlob(data, options.mimeType);
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.style.display = 'none';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Cleanup blob URL after a delay
            setTimeout(() => URL.revokeObjectURL(url), 10000);

            return { success: true };
        } catch (error) {
            console.error('[WebFileSystem] download error:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Convert various data types to Blob
     * @private
     */
    async _toBlob(data, mimeType = 'application/octet-stream') {
        if (data instanceof Blob) {
            return data;
        }
        if (data instanceof Uint8Array || data instanceof ArrayBuffer) {
            return new Blob([data], { type: mimeType });
        }
        throw new Error('Unsupported data type');
    }

    static getState() {
        if (!window.__EXE_WEB_FILE_SYSTEM_STATE__) {
            window.__EXE_WEB_FILE_SYSTEM_STATE__ = {
                currentFileHandle: null,
            };
        }
        return window.__EXE_WEB_FILE_SYSTEM_STATE__;
    }

    _supportsOpenFilePicker() {
        return typeof window.showOpenFilePicker === 'function';
    }

    _supportsSaveFilePicker() {
        return typeof window.showSaveFilePicker === 'function';
    }

    _setCurrentFileHandle(handle) {
        this.state.currentFileHandle = handle || null;
    }

    _clearCurrentFileHandle() {
        this._setCurrentFileHandle(null);
    }

    async _pickSaveHandle(suggestedName, options = {}) {
        const pickerOptions = {
            suggestedName,
            types: [this._buildPickerType([this._getExtension(suggestedName)], options)],
        };
        return window.showSaveFilePicker(pickerOptions);
    }

    _buildPickerType(extensions = [], options = {}) {
        const normalizedExtensions = (extensions || [])
            .filter(Boolean)
            .map(ext => ext.startsWith('.') ? ext.toLowerCase() : `.${ext.toLowerCase()}`);

        return {
            description: options.description || 'eXeLearning files',
            accept: {
                [options.mimeType || 'application/octet-stream']:
                    normalizedExtensions.length > 0 ? normalizedExtensions : ['.elpx'],
            },
        };
    }

    _getExtension(filename = '') {
        const match = /\.[^.]+$/.exec(filename);
        return match ? match[0] : '.elpx';
    }

    async _writeToHandle(handle, data, suggestedName, options = {}) {
        const blob = await this._toBlob(data, options.mimeType);
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        this._setCurrentFileHandle(handle);
        return {
            success: true,
            path: handle.name || suggestedName,
        };
    }
}

export default WebFileSystem;
