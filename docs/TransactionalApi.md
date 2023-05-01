# Listmonk.TransactionalApi

All URIs are relative to *http://localhost:9000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transactionalPost**](TransactionalApi.md#transactionalPost) | **POST** /transactional | 



## transactionalPost

> HealthGet200Response transactionalPost(opts)



### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.TransactionalApi();
let opts = {
  'transactionalMessage': new Listmonk.TransactionalMessage() // TransactionalMessage | 
};
apiInstance.transactionalPost(opts, (error, data, response) => {
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
 **transactionalMessage** | [**TransactionalMessage**](TransactionalMessage.md)|  | [optional] 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

