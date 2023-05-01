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
import Campaign from '../model/Campaign';
import CampaignRegistrationInfo from '../model/CampaignRegistrationInfo';
import CampaignUpdate from '../model/CampaignUpdate';
import CampaignsCampaignIdStatusPutRequest from '../model/CampaignsCampaignIdStatusPutRequest';
import CampaignsGet200Response from '../model/CampaignsGet200Response';
import HealthGet200Response from '../model/HealthGet200Response';
import ImportSubscribersLogsGet200Response from '../model/ImportSubscribersLogsGet200Response';
import LogsGet200Response from '../model/LogsGet200Response';
import NewCampaign from '../model/NewCampaign';

/**
* Campaigns service.
* @module api/CampaignsApi
* @version 1.0.0
*/
export default class CampaignsApi {

    /**
    * Constructs a new CampaignsApi. 
    * @alias module:api/CampaignsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the campaignsCampaignIdContentPost operation.
     * @callback module:api/CampaignsApi~campaignsCampaignIdContentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImportSubscribersLogsGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * handles campaign content (body) format conversions.
     * @param {Number} campaignId 
     * @param {module:api/CampaignsApi~campaignsCampaignIdContentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImportSubscribersLogsGet200Response}
     */
    campaignsCampaignIdContentPost(campaignId, callback) {
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling campaignsCampaignIdContentPost");
      }

      let pathParams = {
        'campaign_id': campaignId
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
      let returnType = ImportSubscribersLogsGet200Response;
      return this.apiClient.callApi(
        '/campaigns/{campaign_id}/content', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignsCampaignIdDelete operation.
     * @callback module:api/CampaignsApi~campaignsCampaignIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HealthGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes specified campaign
     * @param {Number} campaignId The id value of the campaign you want to get.
     * @param {module:api/CampaignsApi~campaignsCampaignIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HealthGet200Response}
     */
    campaignsCampaignIdDelete(campaignId, callback) {
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling campaignsCampaignIdDelete");
      }

      let pathParams = {
        'campaign_id': campaignId
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
        '/campaigns/{campaign_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignsCampaignIdGet operation.
     * @callback module:api/CampaignsApi~campaignsCampaignIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Campaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * handles retrieval of campaigns.
     * @param {Number} campaignId The id value of the campaign you want to get.
     * @param {module:api/CampaignsApi~campaignsCampaignIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Campaign}
     */
    campaignsCampaignIdGet(campaignId, callback) {
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling campaignsCampaignIdGet");
      }

      let pathParams = {
        'campaign_id': campaignId
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
      let returnType = Campaign;
      return this.apiClient.callApi(
        '/campaigns/{campaign_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignsCampaignIdPreviewGet operation.
     * @callback module:api/CampaignsApi~campaignsCampaignIdPreviewGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * renders the HTML preview of a campaign body
     * @param {Number} campaignId The id value of the campaign you want to get the preview of
     * @param {module:api/CampaignsApi~campaignsCampaignIdPreviewGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    campaignsCampaignIdPreviewGet(campaignId, callback) {
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling campaignsCampaignIdPreviewGet");
      }

      let pathParams = {
        'campaign_id': campaignId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/html'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/campaigns/{campaign_id}/preview', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignsCampaignIdPut operation.
     * @callback module:api/CampaignsApi~campaignsCampaignIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CampaignUpdate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} campaignId the id value of campaign you want to update
     * @param {module:api/CampaignsApi~campaignsCampaignIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CampaignUpdate}
     */
    campaignsCampaignIdPut(campaignId, callback) {
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling campaignsCampaignIdPut");
      }

      let pathParams = {
        'campaign_id': campaignId
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
      let returnType = CampaignUpdate;
      return this.apiClient.callApi(
        '/campaigns/{campaign_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignsCampaignIdStatusPut operation.
     * @callback module:api/CampaignsApi~campaignsCampaignIdStatusPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Campaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * handles campaign status modification
     * @param {Number} campaignId The id value of the campaign you want to get the preview of
     * @param {Object} opts Optional parameters
     * @param {module:model/CampaignsCampaignIdStatusPutRequest} [campaignsCampaignIdStatusPutRequest] 
     * @param {module:api/CampaignsApi~campaignsCampaignIdStatusPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Campaign}
     */
    campaignsCampaignIdStatusPut(campaignId, opts, callback) {
      opts = opts || {};
      let postBody = opts['campaignsCampaignIdStatusPutRequest'];
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling campaignsCampaignIdStatusPut");
      }

      let pathParams = {
        'campaign_id': campaignId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Campaign;
      return this.apiClient.callApi(
        '/campaigns/{campaign_id}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignsCampaignIdTestPost operation.
     * @callback module:api/CampaignsApi~campaignsCampaignIdTestPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HealthGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * handles sending of campaign message to arbitrary subscribers for testing
     * @param {Number} campaignId 
     * @param {Number} templateId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CampaignRegistrationInfo} [campaignRegistrationInfo] 
     * @param {module:api/CampaignsApi~campaignsCampaignIdTestPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HealthGet200Response}
     */
    campaignsCampaignIdTestPost(campaignId, templateId, opts, callback) {
      opts = opts || {};
      let postBody = opts['campaignRegistrationInfo'];
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling campaignsCampaignIdTestPost");
      }
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling campaignsCampaignIdTestPost");
      }

      let pathParams = {
        'campaign_id': campaignId,
        'template_id': templateId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = HealthGet200Response;
      return this.apiClient.callApi(
        '/campaigns/{campaign_id}/test', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignsCampaignIdTextGet operation.
     * @callback module:api/CampaignsApi~campaignsCampaignIdTextGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * renders the HTML preview of a campaign body
     * @param {Number} id The id value of the campaign you want to get the preview of
     * @param {Number} templateId The id of the template you want to get the preview of
     * @param {module:api/CampaignsApi~campaignsCampaignIdTextGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    campaignsCampaignIdTextGet(id, templateId, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling campaignsCampaignIdTextGet");
      }
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling campaignsCampaignIdTextGet");
      }

      let pathParams = {
        'id': id,
        'template_id': templateId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/html'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/campaigns/{campaign_id}/text', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignsGet operation.
     * @callback module:api/CampaignsApi~campaignsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CampaignsGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * handles retrieval of campaigns
     * @param {Object} opts Optional parameters
     * @param {Number} [page] Page number for paginated results
     * @param {Number} [perPage] max number of records to return per page
     * @param {module:api/CampaignsApi~campaignsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CampaignsGet200Response}
     */
    campaignsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CampaignsGet200Response;
      return this.apiClient.callApi(
        '/campaigns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignsPost operation.
     * @callback module:api/CampaignsApi~campaignsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NewCampaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * handles campaign creation
     * @param {Object} opts Optional parameters
     * @param {module:model/CampaignRegistrationInfo} [campaignRegistrationInfo] 
     * @param {module:api/CampaignsApi~campaignsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NewCampaign}
     */
    campaignsPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['campaignRegistrationInfo'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = NewCampaign;
      return this.apiClient.callApi(
        '/campaigns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the campaignsRunningStatsGet operation.
     * @callback module:api/CampaignsApi~campaignsRunningStatsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogsGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns stats of a given set of campaign IDs.
     * @param {Object} opts Optional parameters
     * @param {Number} [campaignId] The id values of the campaigns whose stat you want to get.
     * @param {module:api/CampaignsApi~campaignsRunningStatsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogsGet200Response}
     */
    campaignsRunningStatsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'campaign_id': opts['campaignId']
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
        '/campaigns/running/stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}