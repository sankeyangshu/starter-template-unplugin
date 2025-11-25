/**
 * This entry file is for Rspack plugin.
 *
 * @module
 */

import { Starter } from './index';

/**
 * Rspack plugin
 *
 * @example
 * ```js
 * // rspack.config.js
 * import Starter from 'unplugin-starter/rspack'
 *
 * default export {
 *  plugins: [Starter()],
 * }
 * ```
 */
const rspack = Starter.rspack;
export default rspack;
export { rspack as 'module.exports' };
