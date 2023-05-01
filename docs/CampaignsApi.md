# Listmonk.CampaignsApi

All URIs are relative to *http://localhost:9000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**campaignsCampaignIdContentPost**](CampaignsApi.md#campaignsCampaignIdContentPost) | **POST** /campaigns/{campaign_id}/content | 
[**campaignsCampaignIdDelete**](CampaignsApi.md#campaignsCampaignIdDelete) | **DELETE** /campaigns/{campaign_id} | 
[**campaignsCampaignIdGet**](CampaignsApi.md#campaignsCampaignIdGet) | **GET** /campaigns/{campaign_id} | 
[**campaignsCampaignIdPreviewGet**](CampaignsApi.md#campaignsCampaignIdPreviewGet) | **GET** /campaigns/{campaign_id}/preview | 
[**campaignsCampaignIdPut**](CampaignsApi.md#campaignsCampaignIdPut) | **PUT** /campaigns/{campaign_id} | 
[**campaignsCampaignIdStatusPut**](CampaignsApi.md#campaignsCampaignIdStatusPut) | **PUT** /campaigns/{campaign_id}/status | 
[**campaignsCampaignIdTestPost**](CampaignsApi.md#campaignsCampaignIdTestPost) | **POST** /campaigns/{campaign_id}/test | 
[**campaignsCampaignIdTextGet**](CampaignsApi.md#campaignsCampaignIdTextGet) | **GET** /campaigns/{campaign_id}/text | 
[**campaignsGet**](CampaignsApi.md#campaignsGet) | **GET** /campaigns | 
[**campaignsPost**](CampaignsApi.md#campaignsPost) | **POST** /campaigns | 
[**campaignsRunningStatsGet**](CampaignsApi.md#campaignsRunningStatsGet) | **GET** /campaigns/running/stats | 



## campaignsCampaignIdContentPost

> ImportSubscribersLogsGet200Response campaignsCampaignIdContentPost(campaignId)



handles campaign content (body) format conversions.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.CampaignsApi();
let campaignId = 3.4; // Number | 
apiInstance.campaignsCampaignIdContentPost(campaignId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**|  | 

### Return type

[**ImportSubscribersLogsGet200Response**](ImportSubscribersLogsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## campaignsCampaignIdDelete

> HealthGet200Response campaignsCampaignIdDelete(campaignId)



deletes specified campaign

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.CampaignsApi();
let campaignId = 3.4; // Number | The id value of the campaign you want to get.
apiInstance.campaignsCampaignIdDelete(campaignId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| The id value of the campaign you want to get. | 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## campaignsCampaignIdGet

> Campaign campaignsCampaignIdGet(campaignId)



handles retrieval of campaigns.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.CampaignsApi();
let campaignId = 3.4; // Number | The id value of the campaign you want to get.
apiInstance.campaignsCampaignIdGet(campaignId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| The id value of the campaign you want to get. | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## campaignsCampaignIdPreviewGet

> String campaignsCampaignIdPreviewGet(campaignId)



renders the HTML preview of a campaign body

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.CampaignsApi();
let campaignId = 3.4; // Number | The id value of the campaign you want to get the preview of
apiInstance.campaignsCampaignIdPreviewGet(campaignId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| The id value of the campaign you want to get the preview of | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html


## campaignsCampaignIdPut

> CampaignUpdate campaignsCampaignIdPut(campaignId)



### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.CampaignsApi();
let campaignId = 3.4; // Number | the id value of campaign you want to update
apiInstance.campaignsCampaignIdPut(campaignId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| the id value of campaign you want to update | 

### Return type

[**CampaignUpdate**](CampaignUpdate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## campaignsCampaignIdStatusPut

> Campaign campaignsCampaignIdStatusPut(campaignId, opts)



handles campaign status modification

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.CampaignsApi();
let campaignId = 3.4; // Number | The id value of the campaign you want to get the preview of
let opts = {
  'campaignsCampaignIdStatusPutRequest': new Listmonk.CampaignsCampaignIdStatusPutRequest() // CampaignsCampaignIdStatusPutRequest | 
};
apiInstance.campaignsCampaignIdStatusPut(campaignId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| The id value of the campaign you want to get the preview of | 
 **campaignsCampaignIdStatusPutRequest** | [**CampaignsCampaignIdStatusPutRequest**](CampaignsCampaignIdStatusPutRequest.md)|  | [optional] 

### Return type

[**Campaign**](Campaign.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## campaignsCampaignIdTestPost

> HealthGet200Response campaignsCampaignIdTestPost(campaignId, templateId, opts)



handles sending of campaign message to arbitrary subscribers for testing

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.CampaignsApi();
let campaignId = 3.4; // Number | 
let templateId = 3.4; // Number | 
let opts = {
  'campaignRegistrationInfo': new Listmonk.CampaignRegistrationInfo() // CampaignRegistrationInfo | 
};
apiInstance.campaignsCampaignIdTestPost(campaignId, templateId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**|  | 
 **templateId** | **Number**|  | 
 **campaignRegistrationInfo** | [**CampaignRegistrationInfo**](CampaignRegistrationInfo.md)|  | [optional] 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## campaignsCampaignIdTextGet

> String campaignsCampaignIdTextGet(id, templateId)



renders the HTML preview of a campaign body

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.CampaignsApi();
let id = 3.4; // Number | The id value of the campaign you want to get the preview of
let templateId = 3.4; // Number | The id of the template you want to get the preview of
apiInstance.campaignsCampaignIdTextGet(id, templateId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id value of the campaign you want to get the preview of | 
 **templateId** | **Number**| The id of the template you want to get the preview of | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html


## campaignsGet

> CampaignsGet200Response campaignsGet(opts)



handles retrieval of campaigns

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.CampaignsApi();
let opts = {
  'page': 56, // Number | Page number for paginated results
  'perPage': 56 // Number | max number of records to return per page
};
apiInstance.campaignsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number for paginated results | [optional] 
 **perPage** | **Number**| max number of records to return per page | [optional] 

### Return type

[**CampaignsGet200Response**](CampaignsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## campaignsPost

> NewCampaign campaignsPost(opts)



handles campaign creation

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.CampaignsApi();
let opts = {
  'campaignRegistrationInfo': new Listmonk.CampaignRegistrationInfo() // CampaignRegistrationInfo | 
};
apiInstance.campaignsPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignRegistrationInfo** | [**CampaignRegistrationInfo**](CampaignRegistrationInfo.md)|  | [optional] 

### Return type

[**NewCampaign**](NewCampaign.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## campaignsRunningStatsGet

> LogsGet200Response campaignsRunningStatsGet(opts)



returns stats of a given set of campaign IDs.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.CampaignsApi();
let opts = {
  'campaignId': 3.4 // Number | The id values of the campaigns whose stat you want to get.
};
apiInstance.campaignsRunningStatsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **Number**| The id values of the campaigns whose stat you want to get. | [optional] 

### Return type

[**LogsGet200Response**](LogsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

