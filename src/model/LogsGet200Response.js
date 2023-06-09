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
 * The LogsGet200Response model module.
 * @module model/LogsGet200Response
 * @version 1.0.0
 */
class LogsGet200Response {
    /**
     * Constructs a new <code>LogsGet200Response</code>.
     * @alias module:model/LogsGet200Response
     */
    constructor() { 
        
        LogsGet200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogsGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogsGet200Response} obj Optional instance to populate.
     * @return {module:model/LogsGet200Response} The populated <code>LogsGet200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogsGet200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LogsGet200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LogsGet200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['data'])) {
            throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} data
 */
LogsGet200Response.prototype['data'] = undefined;






export default LogsGet200Response;

