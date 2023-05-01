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
import DashboardChartsGet200Response from '../model/DashboardChartsGet200Response';
import DashboardCount from '../model/DashboardCount';
import HealthGet200Response from '../model/HealthGet200Response';
import LanguagePack from '../model/LanguagePack';
import ServerConfig from '../model/ServerConfig';

/**
* Miscellaneous service.
* @module api/MiscellaneousApi
* @version 1.0.0
*/
export default class MiscellaneousApi {

    /**
    * Constructs a new MiscellaneousApi. 
    * @alias module:api/MiscellaneousApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the configGet operation.
     * @callback module:api/MiscellaneousApi~configGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns general server config.
     * @param {module:api/MiscellaneousApi~configGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerConfig}
     */
    configGet(callback) {
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
      let returnType = ServerConfig;
      return this.apiClient.callApi(
        '/config', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dashboardChartsGet operation.
     * @callback module:api/MiscellaneousApi~dashboardChartsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DashboardChartsGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns chart data points to render on the dashboard.
     * @param {module:api/MiscellaneousApi~dashboardChartsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DashboardChartsGet200Response}
     */
    dashboardChartsGet(callback) {
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
      let returnType = DashboardChartsGet200Response;
      return this.apiClient.callApi(
        '/dashboard/charts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dashboardCountsGet operation.
     * @callback module:api/MiscellaneousApi~dashboardCountsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DashboardCount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns stats counts to show on the dashboard
     * @param {module:api/MiscellaneousApi~dashboardCountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DashboardCount}
     */
    dashboardCountsGet(callback) {
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
      let returnType = DashboardCount;
      return this.apiClient.callApi(
        '/dashboard/counts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the healthGet operation.
     * @callback module:api/MiscellaneousApi~healthGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HealthGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * healthcheck endpoint that returns a 200 response.
     * @param {module:api/MiscellaneousApi~healthGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HealthGet200Response}
     */
    healthGet(callback) {
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
      let returnType = HealthGet200Response;
      return this.apiClient.callApi(
        '/health', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the langLangGet operation.
     * @callback module:api/MiscellaneousApi~langLangGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LanguagePack} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the JSON language pack given the language code
     * @param {String} lang JSON language pack required
     * @param {module:api/MiscellaneousApi~langLangGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LanguagePack}
     */
    langLangGet(lang, callback) {
      let postBody = null;
      // verify the required parameter 'lang' is set
      if (lang === undefined || lang === null) {
        throw new Error("Missing the required parameter 'lang' when calling langLangGet");
      }

      let pathParams = {
        'lang': lang
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
      let returnType = LanguagePack;
      return this.apiClient.callApi(
        '/lang/{lang}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
