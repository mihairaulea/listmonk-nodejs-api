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
import DashboardCountData from './DashboardCountData';

/**
 * The DashboardCount model module.
 * @module model/DashboardCount
 * @version 1.0.0
 */
class DashboardCount {
    /**
     * Constructs a new <code>DashboardCount</code>.
     * @alias module:model/DashboardCount
     */
    constructor() { 
        
        DashboardCount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DashboardCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DashboardCount} obj Optional instance to populate.
     * @return {module:model/DashboardCount} The populated <code>DashboardCount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardCount();

            if (data.hasOwnProperty('data')) {
                obj['data'] = DashboardCountData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DashboardCount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DashboardCount</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          DashboardCountData.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/DashboardCountData} data
 */
DashboardCount.prototype['data'] = undefined;






export default DashboardCount;

