# Listmonk.PublicApi

All URIs are relative to *http://localhost:9000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**publicListsGet**](PublicApi.md#publicListsGet) | **GET** /public/lists | 
[**publicSubscriptionPost**](PublicApi.md#publicSubscriptionPost) | **POST** /public/subscription | 



## publicListsGet

> [PublicListsGet200ResponseInner] publicListsGet()



returns the list of public lists with minimal fields

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.PublicApi();
apiInstance.publicListsGet((error, data, response) => {
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

[**[PublicListsGet200ResponseInner]**](PublicListsGet200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## publicSubscriptionPost

> PublicSubscriptionPost200Response publicSubscriptionPost()



handles subscription requests coming from public API calls.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.PublicApi();
apiInstance.publicSubscriptionPost((error, data, response) => {
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

[**PublicSubscriptionPost200Response**](PublicSubscriptionPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

