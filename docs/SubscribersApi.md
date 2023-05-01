# Listmonk.SubscribersApi

All URIs are relative to *http://localhost:9000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscribersGet**](SubscribersApi.md#subscribersGet) | **GET** /subscribers | 
[**subscribersIdBlocklistPut**](SubscribersApi.md#subscribersIdBlocklistPut) | **PUT** /subscribers/{id}/blocklist | 
[**subscribersIdBouncesDelete**](SubscribersApi.md#subscribersIdBouncesDelete) | **DELETE** /subscribers/{id}/bounces | 
[**subscribersIdBouncesGet**](SubscribersApi.md#subscribersIdBouncesGet) | **GET** /subscribers/{id}/bounces | 
[**subscribersIdDelete**](SubscribersApi.md#subscribersIdDelete) | **DELETE** /subscribers/{id} | 
[**subscribersIdExportGet**](SubscribersApi.md#subscribersIdExportGet) | **GET** /subscribers/{id}/export | 
[**subscribersIdOptinPost**](SubscribersApi.md#subscribersIdOptinPost) | **POST** /subscribers/{id}/optin | 
[**subscribersListsPut**](SubscribersApi.md#subscribersListsPut) | **PUT** /subscribers/lists | 
[**subscribersPost**](SubscribersApi.md#subscribersPost) | **POST** /subscribers | 
[**subscribersQueryBlocklistPut**](SubscribersApi.md#subscribersQueryBlocklistPut) | **PUT** /subscribers/query/blocklist | 
[**subscribersQueryDeletePost**](SubscribersApi.md#subscribersQueryDeletePost) | **POST** /subscribers/query/delete | 
[**subscribersQueryListsPut**](SubscribersApi.md#subscribersQueryListsPut) | **PUT** /subscribers/query/lists | 
[**subscribersSubscriberIdGet**](SubscribersApi.md#subscribersSubscriberIdGet) | **GET** /subscribers/{subscriberId} | 



## subscribersGet

> SubscribersGet200Response subscribersGet(opts)



returns all subscribers.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.SubscribersApi();
let opts = {
  'page': 56, // Number | number of records to skip
  'perPage': 56 // Number | max number of records to return per page
};
apiInstance.subscribersGet(opts, (error, data, response) => {
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
 **page** | **Number**| number of records to skip | [optional] 
 **perPage** | **Number**| max number of records to return per page | [optional] 

### Return type

[**SubscribersGet200Response**](SubscribersGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribersIdBlocklistPut

> HealthGet200Response subscribersIdBlocklistPut(id)



handles the blocklisting of one or more subscribers.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.SubscribersApi();
let id = 56; // Number | The id value of the subscriber you want to blocklist.
apiInstance.subscribersIdBlocklistPut(id, (error, data, response) => {
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
 **id** | **Number**| The id value of the subscriber you want to blocklist. | 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribersIdBouncesDelete

> HealthGet200Response subscribersIdBouncesDelete(id)



deletes a subscriber&#39;s bounce records

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.SubscribersApi();
let id = 56; // Number | subscriber id
apiInstance.subscribersIdBouncesDelete(id, (error, data, response) => {
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
 **id** | **Number**| subscriber id | 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribersIdBouncesGet

> SubscribersIdBouncesGet200Response subscribersIdBouncesGet(id)



retrieves a subscriber&#39;s bounce records

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.SubscribersApi();
let id = 56; // Number | subscriber id
apiInstance.subscribersIdBouncesGet(id, (error, data, response) => {
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
 **id** | **Number**| subscriber id | 

### Return type

[**SubscribersIdBouncesGet200Response**](SubscribersIdBouncesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribersIdDelete

> HealthGet200Response subscribersIdDelete(id)



handles subscriber deletion based on id

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.SubscribersApi();
let id = 56; // Number | The id value of the subscriber you want to get.
apiInstance.subscribersIdDelete(id, (error, data, response) => {
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
 **id** | **Number**| The id value of the subscriber you want to get. | 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribersIdExportGet

> SubscriberData subscribersIdExportGet(id)



retrieves a subscriber&#39;s profile

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.SubscribersApi();
let id = 56; // Number | The id value of subscriber profile you want to export
apiInstance.subscribersIdExportGet(id, (error, data, response) => {
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
 **id** | **Number**| The id value of subscriber profile you want to export | 

### Return type

[**SubscriberData**](SubscriberData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribersIdOptinPost

> HealthGet200Response subscribersIdOptinPost(id)



sends an optin confirmation e-mail to a subscriber.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.SubscribersApi();
let id = 56; // Number | sends an optin confirmation e-mail to a subscriber
apiInstance.subscribersIdOptinPost(id, (error, data, response) => {
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
 **id** | **Number**| sends an optin confirmation e-mail to a subscriber | 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribersListsPut

> HealthGet200Response subscribersListsPut(opts)



handles bulk addition or removal of subscribers

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.SubscribersApi();
let opts = {
  'subscribersListsPutRequest': new Listmonk.SubscribersListsPutRequest() // SubscribersListsPutRequest | 
};
apiInstance.subscribersListsPut(opts, (error, data, response) => {
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
 **subscribersListsPutRequest** | [**SubscribersListsPutRequest**](SubscribersListsPutRequest.md)|  | [optional] 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscribersPost

> Subscriber subscribersPost(opts)



handles creation of new subscriber

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.SubscribersApi();
let opts = {
  'subscriberRegistrationInfo': new Listmonk.SubscriberRegistrationInfo() // SubscriberRegistrationInfo | 
};
apiInstance.subscribersPost(opts, (error, data, response) => {
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
 **subscriberRegistrationInfo** | [**SubscriberRegistrationInfo**](SubscriberRegistrationInfo.md)|  | [optional] 

### Return type

[**Subscriber**](Subscriber.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscribersQueryBlocklistPut

> HealthGet200Response subscribersQueryBlocklistPut(opts)



bulk blocklists subscribers based on an arbitrary SQL expression.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.SubscribersApi();
let opts = {
  'body': "body_example" // String | Arbitrary SQL expression.
};
apiInstance.subscribersQueryBlocklistPut(opts, (error, data, response) => {
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
 **body** | **String**| Arbitrary SQL expression. | [optional] 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## subscribersQueryDeletePost

> HealthGet200Response subscribersQueryDeletePost(opts)



bulk deletes based on an arbitrary SQL expression.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.SubscribersApi();
let opts = {
  'body': "body_example" // String | Arbitrary SQL expression.
};
apiInstance.subscribersQueryDeletePost(opts, (error, data, response) => {
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
 **body** | **String**| Arbitrary SQL expression. | [optional] 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## subscribersQueryListsPut

> HealthGet200Response subscribersQueryListsPut(opts)



bulk adds/removes/unsubscribes subscribers from one or more lists based on an arbitrary SQL expression.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.SubscribersApi();
let opts = {
  'body': "body_example" // String | Arbitrary SQL expression.
};
apiInstance.subscribersQueryListsPut(opts, (error, data, response) => {
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
 **body** | **String**| Arbitrary SQL expression. | [optional] 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json


## subscribersSubscriberIdGet

> Subscriber subscribersSubscriberIdGet(subscriberId)



handles the retrieval of a single subscriber by ID.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.SubscribersApi();
let subscriberId = 56; // Number | The id value of the subscriber you want to get.
apiInstance.subscribersSubscriberIdGet(subscriberId, (error, data, response) => {
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
 **subscriberId** | **Number**| The id value of the subscriber you want to get. | 

### Return type

[**Subscriber**](Subscriber.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

