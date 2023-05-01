# Listmonk.LogsApi

All URIs are relative to *http://localhost:9000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logsGet**](LogsApi.md#logsGet) | **GET** /logs | 



## logsGet

> LogsGet200Response logsGet()



returns the log entries stored in the log buffer

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.LogsApi();
apiInstance.logsGet((error, data, response) => {
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

[**LogsGet200Response**](LogsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

