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
import SubscriberProfile from './SubscriberProfile';
import Subscriptions from './Subscriptions';

/**
 * The SubscriberData model module.
 * @module model/SubscriberData
 * @version 1.0.0
 */
class SubscriberData {
    /**
     * Constructs a new <code>SubscriberData</code>.
     * @alias module:model/SubscriberData
     */
    constructor() { 
        
        SubscriberData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriberData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubscriberData} obj Optional instance to populate.
     * @return {module:model/SubscriberData} The populated <code>SubscriberData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriberData();

            if (data.hasOwnProperty('profile')) {
                obj['profile'] = ApiClient.convertToType(data['profile'], [SubscriberProfile]);
            }
            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], [Subscriptions]);
            }
            if (data.hasOwnProperty('campaign_views')) {
                obj['campaign_views'] = ApiClient.convertToType(data['campaign_views'], [Object]);
            }
            if (data.hasOwnProperty('link_clicks')) {
                obj['link_clicks'] = ApiClient.convertToType(data['link_clicks'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubscriberData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubscriberData</code>.
     */
    static validateJSON(data) {
        if (data['profile']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['profile'])) {
                throw new Error("Expected the field `profile` to be an array in the JSON data but got " + data['profile']);
            }
            // validate the optional field `profile` (array)
            for (const item of data['profile']) {
                SubscriberProfile.validateJSON(item);
            };
        }
        if (data['subscriptions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subscriptions'])) {
                throw new Error("Expected the field `subscriptions` to be an array in the JSON data but got " + data['subscriptions']);
            }
            // validate the optional field `subscriptions` (array)
            for (const item of data['subscriptions']) {
                Subscriptions.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['campaign_views'])) {
            throw new Error("Expected the field `campaign_views` to be an array in the JSON data but got " + data['campaign_views']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['link_clicks'])) {
            throw new Error("Expected the field `link_clicks` to be an array in the JSON data but got " + data['link_clicks']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/SubscriberProfile>} profile
 */
SubscriberData.prototype['profile'] = undefined;

/**
 * @member {Array.<module:model/Subscriptions>} subscriptions
 */
SubscriberData.prototype['subscriptions'] = undefined;

/**
 * @member {Array.<Object>} campaign_views
 */
SubscriberData.prototype['campaign_views'] = undefined;

/**
 * @member {Array.<Object>} link_clicks
 */
SubscriberData.prototype['link_clicks'] = undefined;






export default SubscriberData;

