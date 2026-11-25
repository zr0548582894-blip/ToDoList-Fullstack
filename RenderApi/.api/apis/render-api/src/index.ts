import SDK from './sdk.js';

/**
 * Render Public API
 *
 * Manage everything about your Render services
 *
 * @author Render API <support@render.com>
 * @see {@link https://community.render.com}
 */
const createSDK = (() => { return new SDK(); })();

export default createSDK;
