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
import MaintenanceSubscribersTypeDelete200ResponseData from './MaintenanceSubscribersTypeDelete200ResponseData';

/**
 * The MaintenanceSubscribersTypeDelete200Response model module.
 * @module model/MaintenanceSubscribersTypeDelete200Response
 * @version 1.0.0
 */
class MaintenanceSubscribersTypeDelete200Response {
    /**
     * Constructs a new <code>MaintenanceSubscribersTypeDelete200Response</code>.
     * @alias module:model/MaintenanceSubscribersTypeDelete200Response
     */
    constructor() { 
        
        MaintenanceSubscribersTypeDelete200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MaintenanceSubscribersTypeDelete200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MaintenanceSubscribersTypeDelete200Response} obj Optional instance to populate.
     * @return {module:model/MaintenanceSubscribersTypeDelete200Response} The populated <code>MaintenanceSubscribersTypeDelete200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MaintenanceSubscribersTypeDelete200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = MaintenanceSubscribersTypeDelete200ResponseData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MaintenanceSubscribersTypeDelete200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MaintenanceSubscribersTypeDelete200Response</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          MaintenanceSubscribersTypeDelete200ResponseData.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/MaintenanceSubscribersTypeDelete200ResponseData} data
 */
MaintenanceSubscribersTypeDelete200Response.prototype['data'] = undefined;






export default MaintenanceSubscribersTypeDelete200Response;

