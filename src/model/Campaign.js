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
import CampaignData from './CampaignData';

/**
 * The Campaign model module.
 * @module model/Campaign
 * @version 1.0.0
 */
class Campaign {
    /**
     * Constructs a new <code>Campaign</code>.
     * @alias module:model/Campaign
     */
    constructor() { 
        
        Campaign.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Campaign} obj Optional instance to populate.
     * @return {module:model/Campaign} The populated <code>Campaign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Campaign();

            if (data.hasOwnProperty('data')) {
                obj['data'] = CampaignData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Campaign</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Campaign</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          CampaignData.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/CampaignData} data
 */
Campaign.prototype['data'] = undefined;






export default Campaign;

