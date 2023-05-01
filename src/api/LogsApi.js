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


import ApiClient from "../ApiClient";
import LogsGet200Response from '../model/LogsGet200Response';

/**
* Logs service.
* @module api/LogsApi
* @version 1.0.0
*/
export default class LogsApi {

    /**
    * Constructs a new LogsApi. 
    * @alias module:api/LogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the logsGet operation.
     * @callback module:api/LogsApi~logsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogsGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the log entries stored in the log buffer
     * @param {module:api/LogsApi~logsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogsGet200Response}
     */
    logsGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LogsGet200Response;
      return this.apiClient.callApi(
        '/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}