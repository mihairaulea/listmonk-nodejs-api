# listmonk

Listmonk - JavaScript client for listmonk
The API collection for listmonk
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install listmonk --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your listmonk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Listmonk = require('listmonk');


var api = new Listmonk.AdminApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.adminReloadPost(callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:9000/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Listmonk.AdminApi* | [**adminReloadPost**](docs/AdminApi.md#adminReloadPost) | **POST** /admin/reload | 
*Listmonk.BouncesApi* | [**bouncesDelete**](docs/BouncesApi.md#bouncesDelete) | **DELETE** /bounces | 
*Listmonk.BouncesApi* | [**bouncesGet**](docs/BouncesApi.md#bouncesGet) | **GET** /bounces | 
*Listmonk.BouncesApi* | [**bouncesIdDelete**](docs/BouncesApi.md#bouncesIdDelete) | **DELETE** /bounces/{id} | 
*Listmonk.BouncesApi* | [**bouncesIdGet**](docs/BouncesApi.md#bouncesIdGet) | **GET** /bounces/{id} | 
*Listmonk.CampaignsApi* | [**campaignsCampaignIdContentPost**](docs/CampaignsApi.md#campaignsCampaignIdContentPost) | **POST** /campaigns/{campaign_id}/content | 
*Listmonk.CampaignsApi* | [**campaignsCampaignIdDelete**](docs/CampaignsApi.md#campaignsCampaignIdDelete) | **DELETE** /campaigns/{campaign_id} | 
*Listmonk.CampaignsApi* | [**campaignsCampaignIdGet**](docs/CampaignsApi.md#campaignsCampaignIdGet) | **GET** /campaigns/{campaign_id} | 
*Listmonk.CampaignsApi* | [**campaignsCampaignIdPreviewGet**](docs/CampaignsApi.md#campaignsCampaignIdPreviewGet) | **GET** /campaigns/{campaign_id}/preview | 
*Listmonk.CampaignsApi* | [**campaignsCampaignIdPut**](docs/CampaignsApi.md#campaignsCampaignIdPut) | **PUT** /campaigns/{campaign_id} | 
*Listmonk.CampaignsApi* | [**campaignsCampaignIdStatusPut**](docs/CampaignsApi.md#campaignsCampaignIdStatusPut) | **PUT** /campaigns/{campaign_id}/status | 
*Listmonk.CampaignsApi* | [**campaignsCampaignIdTestPost**](docs/CampaignsApi.md#campaignsCampaignIdTestPost) | **POST** /campaigns/{campaign_id}/test | 
*Listmonk.CampaignsApi* | [**campaignsCampaignIdTextGet**](docs/CampaignsApi.md#campaignsCampaignIdTextGet) | **GET** /campaigns/{campaign_id}/text | 
*Listmonk.CampaignsApi* | [**campaignsGet**](docs/CampaignsApi.md#campaignsGet) | **GET** /campaigns | 
*Listmonk.CampaignsApi* | [**campaignsPost**](docs/CampaignsApi.md#campaignsPost) | **POST** /campaigns | 
*Listmonk.CampaignsApi* | [**campaignsRunningStatsGet**](docs/CampaignsApi.md#campaignsRunningStatsGet) | **GET** /campaigns/running/stats | 
*Listmonk.ImportApi* | [**importSubscribersDelete**](docs/ImportApi.md#importSubscribersDelete) | **DELETE** /import/subscribers | 
*Listmonk.ImportApi* | [**importSubscribersGet**](docs/ImportApi.md#importSubscribersGet) | **GET** /import/subscribers | 
*Listmonk.ImportApi* | [**importSubscribersLogsGet**](docs/ImportApi.md#importSubscribersLogsGet) | **GET** /import/subscribers/logs | 
*Listmonk.ImportApi* | [**importSubscribersPost**](docs/ImportApi.md#importSubscribersPost) | **POST** /import/subscribers | 
*Listmonk.ListsApi* | [**listsGet**](docs/ListsApi.md#listsGet) | **GET** /lists | 
*Listmonk.ListsApi* | [**listsListIdDelete**](docs/ListsApi.md#listsListIdDelete) | **DELETE** /lists/{list_id} | 
*Listmonk.ListsApi* | [**listsListIdGet**](docs/ListsApi.md#listsListIdGet) | **GET** /lists/{list_id} | 
*Listmonk.ListsApi* | [**listsListIdPut**](docs/ListsApi.md#listsListIdPut) | **PUT** /lists/{list_id} | 
*Listmonk.ListsApi* | [**listsPost**](docs/ListsApi.md#listsPost) | **POST** /lists | 
*Listmonk.LogsApi* | [**logsGet**](docs/LogsApi.md#logsGet) | **GET** /logs | 
*Listmonk.MaintenanceApi* | [**maintenanceAnalyticsTypeDelete**](docs/MaintenanceApi.md#maintenanceAnalyticsTypeDelete) | **DELETE** /maintenance/analytics/{type} | 
*Listmonk.MaintenanceApi* | [**maintenanceSubscribersTypeDelete**](docs/MaintenanceApi.md#maintenanceSubscribersTypeDelete) | **DELETE** /maintenance/subscribers/{type} | 
*Listmonk.MaintenanceApi* | [**maintenanceSubscriptionsUnconfirmedDelete**](docs/MaintenanceApi.md#maintenanceSubscriptionsUnconfirmedDelete) | **DELETE** /maintenance/subscriptions/unconfirmed | 
*Listmonk.MediaApi* | [**mediaGet**](docs/MediaApi.md#mediaGet) | **GET** /media | 
*Listmonk.MediaApi* | [**mediaMediaIdDelete**](docs/MediaApi.md#mediaMediaIdDelete) | **DELETE** /media/{media_id} | 
*Listmonk.MediaApi* | [**mediaMediaIdGet**](docs/MediaApi.md#mediaMediaIdGet) | **GET** /media/{media_id} | 
*Listmonk.MediaApi* | [**mediaPost**](docs/MediaApi.md#mediaPost) | **POST** /media | 
*Listmonk.MiscellaneousApi* | [**configGet**](docs/MiscellaneousApi.md#configGet) | **GET** /config | 
*Listmonk.MiscellaneousApi* | [**dashboardChartsGet**](docs/MiscellaneousApi.md#dashboardChartsGet) | **GET** /dashboard/charts | 
*Listmonk.MiscellaneousApi* | [**dashboardCountsGet**](docs/MiscellaneousApi.md#dashboardCountsGet) | **GET** /dashboard/counts | 
*Listmonk.MiscellaneousApi* | [**healthGet**](docs/MiscellaneousApi.md#healthGet) | **GET** /health | 
*Listmonk.MiscellaneousApi* | [**langLangGet**](docs/MiscellaneousApi.md#langLangGet) | **GET** /lang/{lang} | 
*Listmonk.PublicApi* | [**publicListsGet**](docs/PublicApi.md#publicListsGet) | **GET** /public/lists | 
*Listmonk.PublicApi* | [**publicSubscriptionPost**](docs/PublicApi.md#publicSubscriptionPost) | **POST** /public/subscription | 
*Listmonk.SettingsApi* | [**settingsGet**](docs/SettingsApi.md#settingsGet) | **GET** /settings | 
*Listmonk.SettingsApi* | [**settingsPut**](docs/SettingsApi.md#settingsPut) | **PUT** /settings | 
*Listmonk.SettingsApi* | [**settingsSmtpTestPost**](docs/SettingsApi.md#settingsSmtpTestPost) | **POST** /settings/smtp/test | 
*Listmonk.SubscribersApi* | [**subscribersGet**](docs/SubscribersApi.md#subscribersGet) | **GET** /subscribers | 
*Listmonk.SubscribersApi* | [**subscribersIdBlocklistPut**](docs/SubscribersApi.md#subscribersIdBlocklistPut) | **PUT** /subscribers/{id}/blocklist | 
*Listmonk.SubscribersApi* | [**subscribersIdBouncesDelete**](docs/SubscribersApi.md#subscribersIdBouncesDelete) | **DELETE** /subscribers/{id}/bounces | 
*Listmonk.SubscribersApi* | [**subscribersIdBouncesGet**](docs/SubscribersApi.md#subscribersIdBouncesGet) | **GET** /subscribers/{id}/bounces | 
*Listmonk.SubscribersApi* | [**subscribersIdDelete**](docs/SubscribersApi.md#subscribersIdDelete) | **DELETE** /subscribers/{id} | 
*Listmonk.SubscribersApi* | [**subscribersIdExportGet**](docs/SubscribersApi.md#subscribersIdExportGet) | **GET** /subscribers/{id}/export | 
*Listmonk.SubscribersApi* | [**subscribersIdOptinPost**](docs/SubscribersApi.md#subscribersIdOptinPost) | **POST** /subscribers/{id}/optin | 
*Listmonk.SubscribersApi* | [**subscribersListsPut**](docs/SubscribersApi.md#subscribersListsPut) | **PUT** /subscribers/lists | 
*Listmonk.SubscribersApi* | [**subscribersPost**](docs/SubscribersApi.md#subscribersPost) | **POST** /subscribers | 
*Listmonk.SubscribersApi* | [**subscribersQueryBlocklistPut**](docs/SubscribersApi.md#subscribersQueryBlocklistPut) | **PUT** /subscribers/query/blocklist | 
*Listmonk.SubscribersApi* | [**subscribersQueryDeletePost**](docs/SubscribersApi.md#subscribersQueryDeletePost) | **POST** /subscribers/query/delete | 
*Listmonk.SubscribersApi* | [**subscribersQueryListsPut**](docs/SubscribersApi.md#subscribersQueryListsPut) | **PUT** /subscribers/query/lists | 
*Listmonk.SubscribersApi* | [**subscribersSubscriberIdGet**](docs/SubscribersApi.md#subscribersSubscriberIdGet) | **GET** /subscribers/{subscriberId} | 
*Listmonk.TemplatesApi* | [**templatesGet**](docs/TemplatesApi.md#templatesGet) | **GET** /templates | 
*Listmonk.TemplatesApi* | [**templatesTemplateIdDefaultPut**](docs/TemplatesApi.md#templatesTemplateIdDefaultPut) | **PUT** /templates/{template_id}/default | 
*Listmonk.TemplatesApi* | [**templatesTemplateIdDelete**](docs/TemplatesApi.md#templatesTemplateIdDelete) | **DELETE** /templates/{template_id} | 
*Listmonk.TemplatesApi* | [**templatesTemplateIdGet**](docs/TemplatesApi.md#templatesTemplateIdGet) | **GET** /templates/{template_id} | 
*Listmonk.TemplatesApi* | [**templatesTemplateIdPreviewGet**](docs/TemplatesApi.md#templatesTemplateIdPreviewGet) | **GET** /templates/{template_id}/preview | 
*Listmonk.TransactionalApi* | [**transactionalPost**](docs/TransactionalApi.md#transactionalPost) | **POST** /transactional | 


## Documentation for Models

 - [Listmonk.Bounce](docs/Bounce.md)
 - [Listmonk.BounceData](docs/BounceData.md)
 - [Listmonk.BounceDataResultsInner](docs/BounceDataResultsInner.md)
 - [Listmonk.BounceDataResultsInnerCampaign](docs/BounceDataResultsInnerCampaign.md)
 - [Listmonk.BouncesGet200Response](docs/BouncesGet200Response.md)
 - [Listmonk.BouncesGet200ResponseData](docs/BouncesGet200ResponseData.md)
 - [Listmonk.Campaign](docs/Campaign.md)
 - [Listmonk.CampaignData](docs/CampaignData.md)
 - [Listmonk.CampaignRegistrationInfo](docs/CampaignRegistrationInfo.md)
 - [Listmonk.CampaignUpdate](docs/CampaignUpdate.md)
 - [Listmonk.CampaignsCampaignIdStatusPutRequest](docs/CampaignsCampaignIdStatusPutRequest.md)
 - [Listmonk.CampaignsGet200Response](docs/CampaignsGet200Response.md)
 - [Listmonk.CampaignsGet200ResponseData](docs/CampaignsGet200ResponseData.md)
 - [Listmonk.DashboardChartsGet200Response](docs/DashboardChartsGet200Response.md)
 - [Listmonk.DashboardChartsGet200ResponseData](docs/DashboardChartsGet200ResponseData.md)
 - [Listmonk.DashboardChartsGet200ResponseDataLinkClicksInner](docs/DashboardChartsGet200ResponseDataLinkClicksInner.md)
 - [Listmonk.DashboardCount](docs/DashboardCount.md)
 - [Listmonk.DashboardCountData](docs/DashboardCountData.md)
 - [Listmonk.DashboardCountDataCampaigns](docs/DashboardCountDataCampaigns.md)
 - [Listmonk.DashboardCountDataCampaignsByStatus](docs/DashboardCountDataCampaignsByStatus.md)
 - [Listmonk.DashboardCountDataLists](docs/DashboardCountDataLists.md)
 - [Listmonk.DashboardCountDataSubscribers](docs/DashboardCountDataSubscribers.md)
 - [Listmonk.HealthGet200Response](docs/HealthGet200Response.md)
 - [Listmonk.ImportStatus](docs/ImportStatus.md)
 - [Listmonk.ImportStatusData](docs/ImportStatusData.md)
 - [Listmonk.ImportSubscribersLogsGet200Response](docs/ImportSubscribersLogsGet200Response.md)
 - [Listmonk.ImportSubscribersPostRequest](docs/ImportSubscribersPostRequest.md)
 - [Listmonk.LanguagePack](docs/LanguagePack.md)
 - [Listmonk.LanguagePackData](docs/LanguagePackData.md)
 - [Listmonk.List](docs/List.md)
 - [Listmonk.ListRegistrationInfo](docs/ListRegistrationInfo.md)
 - [Listmonk.ListsGet200Response](docs/ListsGet200Response.md)
 - [Listmonk.ListsGet200ResponseData](docs/ListsGet200ResponseData.md)
 - [Listmonk.ListsListIdPutRequest](docs/ListsListIdPutRequest.md)
 - [Listmonk.LogsGet200Response](docs/LogsGet200Response.md)
 - [Listmonk.MailBoxBounces](docs/MailBoxBounces.md)
 - [Listmonk.MaintenanceSubscribersTypeDelete200Response](docs/MaintenanceSubscribersTypeDelete200Response.md)
 - [Listmonk.MaintenanceSubscribersTypeDelete200ResponseData](docs/MaintenanceSubscribersTypeDelete200ResponseData.md)
 - [Listmonk.MediaFileObject](docs/MediaFileObject.md)
 - [Listmonk.MediaGet200Response](docs/MediaGet200Response.md)
 - [Listmonk.NewCampaign](docs/NewCampaign.md)
 - [Listmonk.NewCampaignData](docs/NewCampaignData.md)
 - [Listmonk.PublicListsGet200ResponseInner](docs/PublicListsGet200ResponseInner.md)
 - [Listmonk.PublicSubscriptionPost200Response](docs/PublicSubscriptionPost200Response.md)
 - [Listmonk.SMTPSettings](docs/SMTPSettings.md)
 - [Listmonk.SMTPTest](docs/SMTPTest.md)
 - [Listmonk.ServerConfig](docs/ServerConfig.md)
 - [Listmonk.ServerConfigData](docs/ServerConfigData.md)
 - [Listmonk.ServerConfigDataLangsInner](docs/ServerConfigDataLangsInner.md)
 - [Listmonk.Settings](docs/Settings.md)
 - [Listmonk.SettingsData](docs/SettingsData.md)
 - [Listmonk.Subscriber](docs/Subscriber.md)
 - [Listmonk.SubscriberData](docs/SubscriberData.md)
 - [Listmonk.SubscriberListsInner](docs/SubscriberListsInner.md)
 - [Listmonk.SubscriberProfile](docs/SubscriberProfile.md)
 - [Listmonk.SubscriberProfileAttribs](docs/SubscriberProfileAttribs.md)
 - [Listmonk.SubscriberRegistrationInfo](docs/SubscriberRegistrationInfo.md)
 - [Listmonk.SubscriberRegistrationInfoAttribs](docs/SubscriberRegistrationInfoAttribs.md)
 - [Listmonk.SubscriberRegistrationInfoAttribsStack](docs/SubscriberRegistrationInfoAttribsStack.md)
 - [Listmonk.SubscribersGet200Response](docs/SubscribersGet200Response.md)
 - [Listmonk.SubscribersGet200ResponseData](docs/SubscribersGet200ResponseData.md)
 - [Listmonk.SubscribersIdBouncesGet200Response](docs/SubscribersIdBouncesGet200Response.md)
 - [Listmonk.SubscribersListsPutRequest](docs/SubscribersListsPutRequest.md)
 - [Listmonk.Subscriptions](docs/Subscriptions.md)
 - [Listmonk.Template](docs/Template.md)
 - [Listmonk.TemplatesGet200Response](docs/TemplatesGet200Response.md)
 - [Listmonk.TransactionalMessage](docs/TransactionalMessage.md)


## Documentation for Authorization

All endpoints do not require authorization.