# Listmonk.MiscellaneousApi

All URIs are relative to *http://localhost:9000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configGet**](MiscellaneousApi.md#configGet) | **GET** /config | 
[**dashboardChartsGet**](MiscellaneousApi.md#dashboardChartsGet) | **GET** /dashboard/charts | 
[**dashboardCountsGet**](MiscellaneousApi.md#dashboardCountsGet) | **GET** /dashboard/counts | 
[**healthGet**](MiscellaneousApi.md#healthGet) | **GET** /health | 
[**langLangGet**](MiscellaneousApi.md#langLangGet) | **GET** /lang/{lang} | 



## configGet

> ServerConfig configGet()



returns general server config.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.MiscellaneousApi();
apiInstance.configGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ServerConfig**](ServerConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardChartsGet

> DashboardChartsGet200Response dashboardChartsGet()



returns chart data points to render on the dashboard.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.MiscellaneousApi();
apiInstance.dashboardChartsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**DashboardChartsGet200Response**](DashboardChartsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardCountsGet

> DashboardCount dashboardCountsGet()



returns stats counts to show on the dashboard

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.MiscellaneousApi();
apiInstance.dashboardCountsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**DashboardCount**](DashboardCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## healthGet

> HealthGet200Response healthGet()



healthcheck endpoint that returns a 200 response.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.MiscellaneousApi();
apiInstance.healthGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## langLangGet

> LanguagePack langLangGet(lang)



returns the JSON language pack given the language code

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.MiscellaneousApi();
let lang = "lang_example"; // String | JSON language pack required
apiInstance.langLangGet(lang, (error, data, response) => {
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
 **lang** | **String**| JSON language pack required | 

### Return type

[**LanguagePack**](LanguagePack.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

