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
 * The Subscriptions model module.
 * @module model/Subscriptions
 * @version 1.0.0
 */
class Subscriptions {
    /**
     * Constructs a new <code>Subscriptions</code>.
     * @alias module:model/Subscriptions
     */
    constructor() { 
        
        Subscriptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Subscriptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Subscriptions} obj Optional instance to populate.
     * @return {module:model/Subscriptions} The populated <code>Subscriptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Subscriptions();

            if (data.hasOwnProperty('subscription_status')) {
                obj['subscription_status'] = ApiClient.convertToType(data['subscription_status'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Subscriptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Subscriptions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['subscription_status'] && !(typeof data['subscription_status'] === 'string' || data['subscription_status'] instanceof String)) {
            throw new Error("Expected the field `subscription_status` to be a primitive type in the JSON string but got " + data['subscription_status']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }

        return true;
    }


}



/**
 * @member {String} subscription_status
 */
Subscriptions.prototype['subscription_status'] = undefined;

/**
 * @member {String} name
 */
Subscriptions.prototype['name'] = undefined;

/**
 * @member {String} type
 */
Subscriptions.prototype['type'] = undefined;

/**
 * @member {String} created_at
 */
Subscriptions.prototype['created_at'] = undefined;






export default Subscriptions;

