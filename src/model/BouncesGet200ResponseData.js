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
 * The BouncesGet200ResponseData model module.
 * @module model/BouncesGet200ResponseData
 * @version 1.0.0
 */
class BouncesGet200ResponseData {
    /**
     * Constructs a new <code>BouncesGet200ResponseData</code>.
     * @alias module:model/BouncesGet200ResponseData
     */
    constructor() { 
        
        BouncesGet200ResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BouncesGet200ResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BouncesGet200ResponseData} obj Optional instance to populate.
     * @return {module:model/BouncesGet200ResponseData} The populated <code>BouncesGet200ResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BouncesGet200ResponseData();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], Array);
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('per_page')) {
                obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BouncesGet200ResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BouncesGet200ResponseData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }

        return true;
    }


}



/**
 * @member {Array} results
 */
BouncesGet200ResponseData.prototype['results'] = undefined;

/**
 * @member {String} query
 */
BouncesGet200ResponseData.prototype['query'] = undefined;

/**
 * @member {Number} total
 */
BouncesGet200ResponseData.prototype['total'] = undefined;

/**
 * @member {Number} per_page
 */
BouncesGet200ResponseData.prototype['per_page'] = undefined;

/**
 * @member {Number} page
 */
BouncesGet200ResponseData.prototype['page'] = undefined;






export default BouncesGet200ResponseData;

