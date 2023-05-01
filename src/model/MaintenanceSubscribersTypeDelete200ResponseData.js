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
 * The MaintenanceSubscribersTypeDelete200ResponseData model module.
 * @module model/MaintenanceSubscribersTypeDelete200ResponseData
 * @version 1.0.0
 */
class MaintenanceSubscribersTypeDelete200ResponseData {
    /**
     * Constructs a new <code>MaintenanceSubscribersTypeDelete200ResponseData</code>.
     * @alias module:model/MaintenanceSubscribersTypeDelete200ResponseData
     */
    constructor() { 
        
        MaintenanceSubscribersTypeDelete200ResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MaintenanceSubscribersTypeDelete200ResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MaintenanceSubscribersTypeDelete200ResponseData} obj Optional instance to populate.
     * @return {module:model/MaintenanceSubscribersTypeDelete200ResponseData} The populated <code>MaintenanceSubscribersTypeDelete200ResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MaintenanceSubscribersTypeDelete200ResponseData();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MaintenanceSubscribersTypeDelete200ResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MaintenanceSubscribersTypeDelete200ResponseData</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} count
 */
MaintenanceSubscribersTypeDelete200ResponseData.prototype['count'] = undefined;






export default MaintenanceSubscribersTypeDelete200ResponseData;

