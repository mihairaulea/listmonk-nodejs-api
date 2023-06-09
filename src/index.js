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


import ApiClient from './ApiClient';
import Bounce from './model/Bounce';
import BounceData from './model/BounceData';
import BounceDataResultsInner from './model/BounceDataResultsInner';
import BounceDataResultsInnerCampaign from './model/BounceDataResultsInnerCampaign';
import BouncesGet200Response from './model/BouncesGet200Response';
import BouncesGet200ResponseData from './model/BouncesGet200ResponseData';
import Campaign from './model/Campaign';
import CampaignData from './model/CampaignData';
import CampaignRegistrationInfo from './model/CampaignRegistrationInfo';
import CampaignUpdate from './model/CampaignUpdate';
import CampaignsCampaignIdStatusPutRequest from './model/CampaignsCampaignIdStatusPutRequest';
import CampaignsGet200Response from './model/CampaignsGet200Response';
import CampaignsGet200ResponseData from './model/CampaignsGet200ResponseData';
import DashboardChartsGet200Response from './model/DashboardChartsGet200Response';
import DashboardChartsGet200ResponseData from './model/DashboardChartsGet200ResponseData';
import DashboardChartsGet200ResponseDataLinkClicksInner from './model/DashboardChartsGet200ResponseDataLinkClicksInner';
import DashboardCount from './model/DashboardCount';
import DashboardCountData from './model/DashboardCountData';
import DashboardCountDataCampaigns from './model/DashboardCountDataCampaigns';
import DashboardCountDataCampaignsByStatus from './model/DashboardCountDataCampaignsByStatus';
import DashboardCountDataLists from './model/DashboardCountDataLists';
import DashboardCountDataSubscribers from './model/DashboardCountDataSubscribers';
import HealthGet200Response from './model/HealthGet200Response';
import ImportStatus from './model/ImportStatus';
import ImportStatusData from './model/ImportStatusData';
import ImportSubscribersLogsGet200Response from './model/ImportSubscribersLogsGet200Response';
import ImportSubscribersPostRequest from './model/ImportSubscribersPostRequest';
import LanguagePack from './model/LanguagePack';
import LanguagePackData from './model/LanguagePackData';
import List from './model/List';
import ListRegistrationInfo from './model/ListRegistrationInfo';
import ListsGet200Response from './model/ListsGet200Response';
import ListsGet200ResponseData from './model/ListsGet200ResponseData';
import ListsListIdPutRequest from './model/ListsListIdPutRequest';
import LogsGet200Response from './model/LogsGet200Response';
import MailBoxBounces from './model/MailBoxBounces';
import MaintenanceSubscribersTypeDelete200Response from './model/MaintenanceSubscribersTypeDelete200Response';
import MaintenanceSubscribersTypeDelete200ResponseData from './model/MaintenanceSubscribersTypeDelete200ResponseData';
import MediaFileObject from './model/MediaFileObject';
import MediaGet200Response from './model/MediaGet200Response';
import NewCampaign from './model/NewCampaign';
import NewCampaignData from './model/NewCampaignData';
import PublicListsGet200ResponseInner from './model/PublicListsGet200ResponseInner';
import PublicSubscriptionPost200Response from './model/PublicSubscriptionPost200Response';
import SMTPSettings from './model/SMTPSettings';
import SMTPTest from './model/SMTPTest';
import ServerConfig from './model/ServerConfig';
import ServerConfigData from './model/ServerConfigData';
import ServerConfigDataLangsInner from './model/ServerConfigDataLangsInner';
import Settings from './model/Settings';
import SettingsData from './model/SettingsData';
import Subscriber from './model/Subscriber';
import SubscriberData from './model/SubscriberData';
import SubscriberListsInner from './model/SubscriberListsInner';
import SubscriberProfile from './model/SubscriberProfile';
import SubscriberProfileAttribs from './model/SubscriberProfileAttribs';
import SubscriberRegistrationInfo from './model/SubscriberRegistrationInfo';
import SubscriberRegistrationInfoAttribs from './model/SubscriberRegistrationInfoAttribs';
import SubscriberRegistrationInfoAttribsStack from './model/SubscriberRegistrationInfoAttribsStack';
import SubscribersGet200Response from './model/SubscribersGet200Response';
import SubscribersGet200ResponseData from './model/SubscribersGet200ResponseData';
import SubscribersIdBouncesGet200Response from './model/SubscribersIdBouncesGet200Response';
import SubscribersListsPutRequest from './model/SubscribersListsPutRequest';
import Subscriptions from './model/Subscriptions';
import Template from './model/Template';
import TemplatesGet200Response from './model/TemplatesGet200Response';
import TransactionalMessage from './model/TransactionalMessage';
import AdminApi from './api/AdminApi';
import BouncesApi from './api/BouncesApi';
import CampaignsApi from './api/CampaignsApi';
import ImportApi from './api/ImportApi';
import ListsApi from './api/ListsApi';
import LogsApi from './api/LogsApi';
import MaintenanceApi from './api/MaintenanceApi';
import MediaApi from './api/MediaApi';
import MiscellaneousApi from './api/MiscellaneousApi';
import PublicApi from './api/PublicApi';
import SettingsApi from './api/SettingsApi';
import SubscribersApi from './api/SubscribersApi';
import TemplatesApi from './api/TemplatesApi';
import TransactionalApi from './api/TransactionalApi';


/**
* The API collection for listmonk.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Listmonk = require('index'); // See note below*.
* var xxxSvc = new Listmonk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Listmonk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Listmonk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Listmonk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Bounce model constructor.
     * @property {module:model/Bounce}
     */
    Bounce,

    /**
     * The BounceData model constructor.
     * @property {module:model/BounceData}
     */
    BounceData,

    /**
     * The BounceDataResultsInner model constructor.
     * @property {module:model/BounceDataResultsInner}
     */
    BounceDataResultsInner,

    /**
     * The BounceDataResultsInnerCampaign model constructor.
     * @property {module:model/BounceDataResultsInnerCampaign}
     */
    BounceDataResultsInnerCampaign,

    /**
     * The BouncesGet200Response model constructor.
     * @property {module:model/BouncesGet200Response}
     */
    BouncesGet200Response,

    /**
     * The BouncesGet200ResponseData model constructor.
     * @property {module:model/BouncesGet200ResponseData}
     */
    BouncesGet200ResponseData,

    /**
     * The Campaign model constructor.
     * @property {module:model/Campaign}
     */
    Campaign,

    /**
     * The CampaignData model constructor.
     * @property {module:model/CampaignData}
     */
    CampaignData,

    /**
     * The CampaignRegistrationInfo model constructor.
     * @property {module:model/CampaignRegistrationInfo}
     */
    CampaignRegistrationInfo,

    /**
     * The CampaignUpdate model constructor.
     * @property {module:model/CampaignUpdate}
     */
    CampaignUpdate,

    /**
     * The CampaignsCampaignIdStatusPutRequest model constructor.
     * @property {module:model/CampaignsCampaignIdStatusPutRequest}
     */
    CampaignsCampaignIdStatusPutRequest,

    /**
     * The CampaignsGet200Response model constructor.
     * @property {module:model/CampaignsGet200Response}
     */
    CampaignsGet200Response,

    /**
     * The CampaignsGet200ResponseData model constructor.
     * @property {module:model/CampaignsGet200ResponseData}
     */
    CampaignsGet200ResponseData,

    /**
     * The DashboardChartsGet200Response model constructor.
     * @property {module:model/DashboardChartsGet200Response}
     */
    DashboardChartsGet200Response,

    /**
     * The DashboardChartsGet200ResponseData model constructor.
     * @property {module:model/DashboardChartsGet200ResponseData}
     */
    DashboardChartsGet200ResponseData,

    /**
     * The DashboardChartsGet200ResponseDataLinkClicksInner model constructor.
     * @property {module:model/DashboardChartsGet200ResponseDataLinkClicksInner}
     */
    DashboardChartsGet200ResponseDataLinkClicksInner,

    /**
     * The DashboardCount model constructor.
     * @property {module:model/DashboardCount}
     */
    DashboardCount,

    /**
     * The DashboardCountData model constructor.
     * @property {module:model/DashboardCountData}
     */
    DashboardCountData,

    /**
     * The DashboardCountDataCampaigns model constructor.
     * @property {module:model/DashboardCountDataCampaigns}
     */
    DashboardCountDataCampaigns,

    /**
     * The DashboardCountDataCampaignsByStatus model constructor.
     * @property {module:model/DashboardCountDataCampaignsByStatus}
     */
    DashboardCountDataCampaignsByStatus,

    /**
     * The DashboardCountDataLists model constructor.
     * @property {module:model/DashboardCountDataLists}
     */
    DashboardCountDataLists,

    /**
     * The DashboardCountDataSubscribers model constructor.
     * @property {module:model/DashboardCountDataSubscribers}
     */
    DashboardCountDataSubscribers,

    /**
     * The HealthGet200Response model constructor.
     * @property {module:model/HealthGet200Response}
     */
    HealthGet200Response,

    /**
     * The ImportStatus model constructor.
     * @property {module:model/ImportStatus}
     */
    ImportStatus,

    /**
     * The ImportStatusData model constructor.
     * @property {module:model/ImportStatusData}
     */
    ImportStatusData,

    /**
     * The ImportSubscribersLogsGet200Response model constructor.
     * @property {module:model/ImportSubscribersLogsGet200Response}
     */
    ImportSubscribersLogsGet200Response,

    /**
     * The ImportSubscribersPostRequest model constructor.
     * @property {module:model/ImportSubscribersPostRequest}
     */
    ImportSubscribersPostRequest,

    /**
     * The LanguagePack model constructor.
     * @property {module:model/LanguagePack}
     */
    LanguagePack,

    /**
     * The LanguagePackData model constructor.
     * @property {module:model/LanguagePackData}
     */
    LanguagePackData,

    /**
     * The List model constructor.
     * @property {module:model/List}
     */
    List,

    /**
     * The ListRegistrationInfo model constructor.
     * @property {module:model/ListRegistrationInfo}
     */
    ListRegistrationInfo,

    /**
     * The ListsGet200Response model constructor.
     * @property {module:model/ListsGet200Response}
     */
    ListsGet200Response,

    /**
     * The ListsGet200ResponseData model constructor.
     * @property {module:model/ListsGet200ResponseData}
     */
    ListsGet200ResponseData,

    /**
     * The ListsListIdPutRequest model constructor.
     * @property {module:model/ListsListIdPutRequest}
     */
    ListsListIdPutRequest,

    /**
     * The LogsGet200Response model constructor.
     * @property {module:model/LogsGet200Response}
     */
    LogsGet200Response,

    /**
     * The MailBoxBounces model constructor.
     * @property {module:model/MailBoxBounces}
     */
    MailBoxBounces,

    /**
     * The MaintenanceSubscribersTypeDelete200Response model constructor.
     * @property {module:model/MaintenanceSubscribersTypeDelete200Response}
     */
    MaintenanceSubscribersTypeDelete200Response,

    /**
     * The MaintenanceSubscribersTypeDelete200ResponseData model constructor.
     * @property {module:model/MaintenanceSubscribersTypeDelete200ResponseData}
     */
    MaintenanceSubscribersTypeDelete200ResponseData,

    /**
     * The MediaFileObject model constructor.
     * @property {module:model/MediaFileObject}
     */
    MediaFileObject,

    /**
     * The MediaGet200Response model constructor.
     * @property {module:model/MediaGet200Response}
     */
    MediaGet200Response,

    /**
     * The NewCampaign model constructor.
     * @property {module:model/NewCampaign}
     */
    NewCampaign,

    /**
     * The NewCampaignData model constructor.
     * @property {module:model/NewCampaignData}
     */
    NewCampaignData,

    /**
     * The PublicListsGet200ResponseInner model constructor.
     * @property {module:model/PublicListsGet200ResponseInner}
     */
    PublicListsGet200ResponseInner,

    /**
     * The PublicSubscriptionPost200Response model constructor.
     * @property {module:model/PublicSubscriptionPost200Response}
     */
    PublicSubscriptionPost200Response,

    /**
     * The SMTPSettings model constructor.
     * @property {module:model/SMTPSettings}
     */
    SMTPSettings,

    /**
     * The SMTPTest model constructor.
     * @property {module:model/SMTPTest}
     */
    SMTPTest,

    /**
     * The ServerConfig model constructor.
     * @property {module:model/ServerConfig}
     */
    ServerConfig,

    /**
     * The ServerConfigData model constructor.
     * @property {module:model/ServerConfigData}
     */
    ServerConfigData,

    /**
     * The ServerConfigDataLangsInner model constructor.
     * @property {module:model/ServerConfigDataLangsInner}
     */
    ServerConfigDataLangsInner,

    /**
     * The Settings model constructor.
     * @property {module:model/Settings}
     */
    Settings,

    /**
     * The SettingsData model constructor.
     * @property {module:model/SettingsData}
     */
    SettingsData,

    /**
     * The Subscriber model constructor.
     * @property {module:model/Subscriber}
     */
    Subscriber,

    /**
     * The SubscriberData model constructor.
     * @property {module:model/SubscriberData}
     */
    SubscriberData,

    /**
     * The SubscriberListsInner model constructor.
     * @property {module:model/SubscriberListsInner}
     */
    SubscriberListsInner,

    /**
     * The SubscriberProfile model constructor.
     * @property {module:model/SubscriberProfile}
     */
    SubscriberProfile,

    /**
     * The SubscriberProfileAttribs model constructor.
     * @property {module:model/SubscriberProfileAttribs}
     */
    SubscriberProfileAttribs,

    /**
     * The SubscriberRegistrationInfo model constructor.
     * @property {module:model/SubscriberRegistrationInfo}
     */
    SubscriberRegistrationInfo,

    /**
     * The SubscriberRegistrationInfoAttribs model constructor.
     * @property {module:model/SubscriberRegistrationInfoAttribs}
     */
    SubscriberRegistrationInfoAttribs,

    /**
     * The SubscriberRegistrationInfoAttribsStack model constructor.
     * @property {module:model/SubscriberRegistrationInfoAttribsStack}
     */
    SubscriberRegistrationInfoAttribsStack,

    /**
     * The SubscribersGet200Response model constructor.
     * @property {module:model/SubscribersGet200Response}
     */
    SubscribersGet200Response,

    /**
     * The SubscribersGet200ResponseData model constructor.
     * @property {module:model/SubscribersGet200ResponseData}
     */
    SubscribersGet200ResponseData,

    /**
     * The SubscribersIdBouncesGet200Response model constructor.
     * @property {module:model/SubscribersIdBouncesGet200Response}
     */
    SubscribersIdBouncesGet200Response,

    /**
     * The SubscribersListsPutRequest model constructor.
     * @property {module:model/SubscribersListsPutRequest}
     */
    SubscribersListsPutRequest,

    /**
     * The Subscriptions model constructor.
     * @property {module:model/Subscriptions}
     */
    Subscriptions,

    /**
     * The Template model constructor.
     * @property {module:model/Template}
     */
    Template,

    /**
     * The TemplatesGet200Response model constructor.
     * @property {module:model/TemplatesGet200Response}
     */
    TemplatesGet200Response,

    /**
     * The TransactionalMessage model constructor.
     * @property {module:model/TransactionalMessage}
     */
    TransactionalMessage,

    /**
    * The AdminApi service constructor.
    * @property {module:api/AdminApi}
    */
    AdminApi,

    /**
    * The BouncesApi service constructor.
    * @property {module:api/BouncesApi}
    */
    BouncesApi,

    /**
    * The CampaignsApi service constructor.
    * @property {module:api/CampaignsApi}
    */
    CampaignsApi,

    /**
    * The ImportApi service constructor.
    * @property {module:api/ImportApi}
    */
    ImportApi,

    /**
    * The ListsApi service constructor.
    * @property {module:api/ListsApi}
    */
    ListsApi,

    /**
    * The LogsApi service constructor.
    * @property {module:api/LogsApi}
    */
    LogsApi,

    /**
    * The MaintenanceApi service constructor.
    * @property {module:api/MaintenanceApi}
    */
    MaintenanceApi,

    /**
    * The MediaApi service constructor.
    * @property {module:api/MediaApi}
    */
    MediaApi,

    /**
    * The MiscellaneousApi service constructor.
    * @property {module:api/MiscellaneousApi}
    */
    MiscellaneousApi,

    /**
    * The PublicApi service constructor.
    * @property {module:api/PublicApi}
    */
    PublicApi,

    /**
    * The SettingsApi service constructor.
    * @property {module:api/SettingsApi}
    */
    SettingsApi,

    /**
    * The SubscribersApi service constructor.
    * @property {module:api/SubscribersApi}
    */
    SubscribersApi,

    /**
    * The TemplatesApi service constructor.
    * @property {module:api/TemplatesApi}
    */
    TemplatesApi,

    /**
    * The TransactionalApi service constructor.
    * @property {module:api/TransactionalApi}
    */
    TransactionalApi
};
