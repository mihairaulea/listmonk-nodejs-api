# Listmonk.MaintenanceApi

All URIs are relative to *http://localhost:9000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**maintenanceAnalyticsTypeDelete**](MaintenanceApi.md#maintenanceAnalyticsTypeDelete) | **DELETE** /maintenance/analytics/{type} | 
[**maintenanceSubscribersTypeDelete**](MaintenanceApi.md#maintenanceSubscribersTypeDelete) | **DELETE** /maintenance/subscribers/{type} | 
[**maintenanceSubscriptionsUnconfirmedDelete**](MaintenanceApi.md#maintenanceSubscriptionsUnconfirmedDelete) | **DELETE** /maintenance/subscriptions/unconfirmed | 



## maintenanceAnalyticsTypeDelete

> HealthGet200Response maintenanceAnalyticsTypeDelete(type)



garbage collects (deletes) campaign analytics.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.MaintenanceApi();
let type = "type_example"; // String | 
apiInstance.maintenanceAnalyticsTypeDelete(type, (error, data, response) => {
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
 **type** | **String**|  | 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## maintenanceSubscribersTypeDelete

> MaintenanceSubscribersTypeDelete200Response maintenanceSubscribersTypeDelete(type)



garbage collects (deletes) orphaned or blocklisted subscribers.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.MaintenanceApi();
let type = "type_example"; // String | 
apiInstance.maintenanceSubscribersTypeDelete(type, (error, data, response) => {
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
 **type** | **String**|  | 

### Return type

[**MaintenanceSubscribersTypeDelete200Response**](MaintenanceSubscribersTypeDelete200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## maintenanceSubscriptionsUnconfirmedDelete

> maintenanceSubscriptionsUnconfirmedDelete(type)



garbage collects (deletes) orphaned or blocklisted subscribers.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.MaintenanceApi();
let type = "type_example"; // String | 
apiInstance.maintenanceSubscriptionsUnconfirmedDelete(type, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

