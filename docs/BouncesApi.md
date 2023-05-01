# Listmonk.BouncesApi

All URIs are relative to *http://localhost:9000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bouncesDelete**](BouncesApi.md#bouncesDelete) | **DELETE** /bounces | 
[**bouncesGet**](BouncesApi.md#bouncesGet) | **GET** /bounces | 
[**bouncesIdDelete**](BouncesApi.md#bouncesIdDelete) | **DELETE** /bounces/{id} | 
[**bouncesIdGet**](BouncesApi.md#bouncesIdGet) | **GET** /bounces/{id} | 



## bouncesDelete

> HealthGet200Response bouncesDelete()



handles retrieval of bounce records.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.BouncesApi();
apiInstance.bouncesDelete((error, data, response) => {
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


## bouncesGet

> BouncesGet200Response bouncesGet()



handles retrieval of bounce records.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.BouncesApi();
apiInstance.bouncesGet((error, data, response) => {
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

[**BouncesGet200Response**](BouncesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bouncesIdDelete

> HealthGet200Response bouncesIdDelete()



handles bounce deletion, either a single one (ID in the URI), or a list.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.BouncesApi();
apiInstance.bouncesIdDelete((error, data, response) => {
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


## bouncesIdGet

> Bounce bouncesIdGet()



handles retrieval of bounce record by id

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.BouncesApi();
apiInstance.bouncesIdGet((error, data, response) => {
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

[**Bounce**](Bounce.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

