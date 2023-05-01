# Listmonk.ImportApi

All URIs are relative to *http://localhost:9000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**importSubscribersDelete**](ImportApi.md#importSubscribersDelete) | **DELETE** /import/subscribers | 
[**importSubscribersGet**](ImportApi.md#importSubscribersGet) | **GET** /import/subscribers | 
[**importSubscribersLogsGet**](ImportApi.md#importSubscribersLogsGet) | **GET** /import/subscribers/logs | 
[**importSubscribersPost**](ImportApi.md#importSubscribersPost) | **POST** /import/subscribers | 



## importSubscribersDelete

> ImportStatus importSubscribersDelete()



sends a stop signal to the importer.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.ImportApi();
apiInstance.importSubscribersDelete((error, data, response) => {
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

[**ImportStatus**](ImportStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importSubscribersGet

> ImportStatus importSubscribersGet()



returns import statistics.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.ImportApi();
apiInstance.importSubscribersGet((error, data, response) => {
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

[**ImportStatus**](ImportStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importSubscribersLogsGet

> ImportSubscribersLogsGet200Response importSubscribersLogsGet()



returns import statistics

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.ImportApi();
apiInstance.importSubscribersLogsGet((error, data, response) => {
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

[**ImportSubscribersLogsGet200Response**](ImportSubscribersLogsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importSubscribersPost

> ImportStatus importSubscribersPost(opts)



handles the uploading and bulk importing of a ZIP file of one or more CSV files.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.ImportApi();
let opts = {
  'importSubscribersPostRequest': new Listmonk.ImportSubscribersPostRequest() // ImportSubscribersPostRequest | 
};
apiInstance.importSubscribersPost(opts, (error, data, response) => {
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
 **importSubscribersPostRequest** | [**ImportSubscribersPostRequest**](ImportSubscribersPostRequest.md)|  | [optional] 

### Return type

[**ImportStatus**](ImportStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

