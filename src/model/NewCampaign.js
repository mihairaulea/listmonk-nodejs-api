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
import NewCampaignData from './NewCampaignData';

/**
 * The NewCampaign model module.
 * @module model/NewCampaign
 * @version 1.0.0
 */
class NewCampaign {
    /**
     * Constructs a new <code>NewCampaign</code>.
     * @alias module:model/NewCampaign
     */
    constructor() { 
        
        NewCampaign.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewCampaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewCampaign} obj Optional instance to populate.
     * @return {module:model/NewCampaign} The populated <code>NewCampaign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewCampaign();

            if (data.hasOwnProperty('data')) {
                obj['data'] = NewCampaignData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NewCampaign</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NewCampaign</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          NewCampaignData.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/NewCampaignData} data
 */
NewCampaign.prototype['data'] = undefined;






export default NewCampaign;

