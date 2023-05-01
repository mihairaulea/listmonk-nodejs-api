# Listmonk.AdminApi

All URIs are relative to *http://localhost:9000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminReloadPost**](AdminApi.md#adminReloadPost) | **POST** /admin/reload | 



## adminReloadPost

> HealthGet200Response adminReloadPost()



restarts the app

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.AdminApi();
apiInstance.adminReloadPost((error, data, response) => {
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

