/**
 * File system adapters for different runtime environments.
 *
 * Usage:
 *   import { ElectronFileSystem, WebFileSystem, EmbeddedFileSystem } from './adapters/index.js';
 *
 *   // Select adapter based on environment
 *   const adapter = window.electronAPI
 *     ? new ElectronFileSystem()
 *     : window.parent !== window
 *       ? new EmbeddedFileSystem()
 *       : new WebFileSystem();
 *
 *   // Use unified API
 *   await adapter.saveAs(data, 'file.elpx');
 */

import { FileSystemAdapter } from './FileSystemAdapter.js';
import { ElectronFileSystem } from './ElectronFileSystem.js';
import { WebFileSystem } from './WebFileSystem.js';
import { EmbeddedFileSystem } from './EmbeddedFileSystem.js';

export { FileSystemAdapter, ElectronFileSystem, WebFileSystem, EmbeddedFileSystem };

/**
 * Create the appropriate file system adapter based on environment
 * @param {Object} [options] - Adapter options
 * @param {boolean} [options.forceEmbedded=false] - Force embedded mode
 * @param {string} [options.parentOrigin='*'] - Parent origin for embedded mode
 * @returns {FileSystemAdapter}
 */
export function createFileSystemAdapter(options = {}) {
    // Electron mode takes priority
    if (window.electronAPI) {
        return new ElectronFileSystem();
    }

    // Check for embedded mode (in iframe)
    const isEmbedded =
        options.forceEmbedded ||
        (typeof window.parent !== 'undefined' && window.parent !== window);
    if (isEmbedded) {
        return new EmbeddedFileSystem({
            parentOrigin: options.parentOrigin || '*',
        });
    }

    // Default to web mode
    return new WebFileSystem();
}
