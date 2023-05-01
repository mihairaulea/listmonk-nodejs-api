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
import DashboardChartsGet200ResponseData from './DashboardChartsGet200ResponseData';

/**
 * The DashboardChartsGet200Response model module.
 * @module model/DashboardChartsGet200Response
 * @version 1.0.0
 */
class DashboardChartsGet200Response {
    /**
     * Constructs a new <code>DashboardChartsGet200Response</code>.
     * @alias module:model/DashboardChartsGet200Response
     */
    constructor() { 
        
        DashboardChartsGet200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DashboardChartsGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DashboardChartsGet200Response} obj Optional instance to populate.
     * @return {module:model/DashboardChartsGet200Response} The populated <code>DashboardChartsGet200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardChartsGet200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = DashboardChartsGet200ResponseData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DashboardChartsGet200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DashboardChartsGet200Response</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          DashboardChartsGet200ResponseData.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/DashboardChartsGet200ResponseData} data
 */
DashboardChartsGet200Response.prototype['data'] = undefined;






export default DashboardChartsGet200Response;

