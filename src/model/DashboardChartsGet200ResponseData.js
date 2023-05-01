/**
 * Listmonk
 * The API collection for listmonk
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DashboardChartsGet200ResponseDataLinkClicksInner from './DashboardChartsGet200ResponseDataLinkClicksInner';

/**
 * The DashboardChartsGet200ResponseData model module.
 * @module model/DashboardChartsGet200ResponseData
 * @version 1.0.0
 */
class DashboardChartsGet200ResponseData {
    /**
     * Constructs a new <code>DashboardChartsGet200ResponseData</code>.
     * @alias module:model/DashboardChartsGet200ResponseData
     */
    constructor() { 
        
        DashboardChartsGet200ResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DashboardChartsGet200ResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DashboardChartsGet200ResponseData} obj Optional instance to populate.
     * @return {module:model/DashboardChartsGet200ResponseData} The populated <code>DashboardChartsGet200ResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardChartsGet200ResponseData();

            if (data.hasOwnProperty('link_clicks')) {
                obj['link_clicks'] = ApiClient.convertToType(data['link_clicks'], [DashboardChartsGet200ResponseDataLinkClicksInner]);
            }
            if (data.hasOwnProperty('campaign_views')) {
                obj['campaign_views'] = ApiClient.convertToType(data['campaign_views'], [DashboardChartsGet200ResponseDataLinkClicksInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DashboardChartsGet200ResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DashboardChartsGet200ResponseData</code>.
     */
    static validateJSON(data) {
        if (data['link_clicks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['link_clicks'])) {
                throw new Error("Expected the field `link_clicks` to be an array in the JSON data but got " + data['link_clicks']);
            }
            // validate the optional field `link_clicks` (array)
            for (const item of data['link_clicks']) {
                DashboardChartsGet200ResponseDataLinkClicksInner.validateJSON(item);
            };
        }
        if (data['campaign_views']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['campaign_views'])) {
                throw new Error("Expected the field `campaign_views` to be an array in the JSON data but got " + data['campaign_views']);
            }
            // validate the optional field `campaign_views` (array)
            for (const item of data['campaign_views']) {
                DashboardChartsGet200ResponseDataLinkClicksInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/DashboardChartsGet200ResponseDataLinkClicksInner>} link_clicks
 */
DashboardChartsGet200ResponseData.prototype['link_clicks'] = undefined;

/**
 * @member {Array.<module:model/DashboardChartsGet200ResponseDataLinkClicksInner>} campaign_views
 */
DashboardChartsGet200ResponseData.prototype['campaign_views'] = undefined;






export default DashboardChartsGet200ResponseData;

