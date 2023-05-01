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
 * The ImportSubscribersLogsGet200Response model module.
 * @module model/ImportSubscribersLogsGet200Response
 * @version 1.0.0
 */
class ImportSubscribersLogsGet200Response {
    /**
     * Constructs a new <code>ImportSubscribersLogsGet200Response</code>.
     * @alias module:model/ImportSubscribersLogsGet200Response
     */
    constructor() { 
        
        ImportSubscribersLogsGet200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImportSubscribersLogsGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportSubscribersLogsGet200Response} obj Optional instance to populate.
     * @return {module:model/ImportSubscribersLogsGet200Response} The populated <code>ImportSubscribersLogsGet200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportSubscribersLogsGet200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImportSubscribersLogsGet200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImportSubscribersLogsGet200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['data'] && !(typeof data['data'] === 'string' || data['data'] instanceof String)) {
            throw new Error("Expected the field `data` to be a primitive type in the JSON string but got " + data['data']);
        }

        return true;
    }


}



/**
 * @member {String} data
 */
ImportSubscribersLogsGet200Response.prototype['data'] = undefined;






export default ImportSubscribersLogsGet200Response;

