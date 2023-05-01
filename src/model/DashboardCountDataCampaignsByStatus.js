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

/**
 * The DashboardCountDataCampaignsByStatus model module.
 * @module model/DashboardCountDataCampaignsByStatus
 * @version 1.0.0
 */
class DashboardCountDataCampaignsByStatus {
    /**
     * Constructs a new <code>DashboardCountDataCampaignsByStatus</code>.
     * @alias module:model/DashboardCountDataCampaignsByStatus
     */
    constructor() { 
        
        DashboardCountDataCampaignsByStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DashboardCountDataCampaignsByStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DashboardCountDataCampaignsByStatus} obj Optional instance to populate.
     * @return {module:model/DashboardCountDataCampaignsByStatus} The populated <code>DashboardCountDataCampaignsByStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardCountDataCampaignsByStatus();

            if (data.hasOwnProperty('draft')) {
                obj['draft'] = ApiClient.convertToType(data['draft'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DashboardCountDataCampaignsByStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DashboardCountDataCampaignsByStatus</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} draft
 */
DashboardCountDataCampaignsByStatus.prototype['draft'] = undefined;






export default DashboardCountDataCampaignsByStatus;

