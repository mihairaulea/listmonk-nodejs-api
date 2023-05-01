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
 * The DashboardChartsGet200ResponseDataLinkClicksInner model module.
 * @module model/DashboardChartsGet200ResponseDataLinkClicksInner
 * @version 1.0.0
 */
class DashboardChartsGet200ResponseDataLinkClicksInner {
    /**
     * Constructs a new <code>DashboardChartsGet200ResponseDataLinkClicksInner</code>.
     * @alias module:model/DashboardChartsGet200ResponseDataLinkClicksInner
     */
    constructor() { 
        
        DashboardChartsGet200ResponseDataLinkClicksInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DashboardChartsGet200ResponseDataLinkClicksInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DashboardChartsGet200ResponseDataLinkClicksInner} obj Optional instance to populate.
     * @return {module:model/DashboardChartsGet200ResponseDataLinkClicksInner} The populated <code>DashboardChartsGet200ResponseDataLinkClicksInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardChartsGet200ResponseDataLinkClicksInner();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DashboardChartsGet200ResponseDataLinkClicksInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DashboardChartsGet200ResponseDataLinkClicksInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['date'] && !(typeof data['date'] === 'string' || data['date'] instanceof String)) {
            throw new Error("Expected the field `date` to be a primitive type in the JSON string but got " + data['date']);
        }

        return true;
    }


}



/**
 * @member {Number} count
 */
DashboardChartsGet200ResponseDataLinkClicksInner.prototype['count'] = undefined;

/**
 * @member {String} date
 */
DashboardChartsGet200ResponseDataLinkClicksInner.prototype['date'] = undefined;






export default DashboardChartsGet200ResponseDataLinkClicksInner;

