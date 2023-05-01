# Listmonk.ListsApi

All URIs are relative to *http://localhost:9000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listsGet**](ListsApi.md#listsGet) | **GET** /lists | 
[**listsListIdDelete**](ListsApi.md#listsListIdDelete) | **DELETE** /lists/{list_id} | 
[**listsListIdGet**](ListsApi.md#listsListIdGet) | **GET** /lists/{list_id} | 
[**listsListIdPut**](ListsApi.md#listsListIdPut) | **PUT** /lists/{list_id} | 
[**listsPost**](ListsApi.md#listsPost) | **POST** /lists | 



## listsGet

> ListsGet200Response listsGet(opts)



retrieves lists with additional metadata like subscriber counts. This may be slow.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.ListsApi();
let opts = {
  'query': "query_example", // String | Optional string to search a list by name.
  'orderBy': "orderBy_example", // String | Field to sort results by. name|status|created_at|updated_at
  'order': "order_example", // String | ASC|DESC Sort by ascending or descending order.
  'page': 3.4, // Number | Page number for paginated results.
  'perPage': 3.4 // Number | Results to return per page. Setting this to all skips pagination and returns all results
};
apiInstance.listsGet(opts, (error, data, response) => {
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
 **query** | **String**| Optional string to search a list by name. | [optional] 
 **orderBy** | **String**| Field to sort results by. name|status|created_at|updated_at | [optional] 
 **order** | **String**| ASC|DESC Sort by ascending or descending order. | [optional] 
 **page** | **Number**| Page number for paginated results. | [optional] 
 **perPage** | **Number**| Results to return per page. Setting this to all skips pagination and returns all results | [optional] 

### Return type

[**ListsGet200Response**](ListsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listsListIdDelete

> HealthGet200Response listsListIdDelete(id)



handles list deletion, either a single one (ID in the URI), or a list.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.ListsApi();
let id = 56; // Number | The id value of the lists you want to de;ete.
apiInstance.listsListIdDelete(id, (error, data, response) => {
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
 **id** | **Number**| The id value of the lists you want to de;ete. | 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listsListIdGet

> Array listsListIdGet(listId)



retrieves lists with additional metadata like subscriber counts. This may be slow.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.ListsApi();
let listId = 3.4; // Number | The id value of the list you want to get.
apiInstance.listsListIdGet(listId, (error, data, response) => {
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
 **listId** | **Number**| The id value of the list you want to get. | 

### Return type

**Array**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listsListIdPut

> Array listsListIdPut(listId, opts)



handles list modification

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.ListsApi();
let listId = 3.4; // Number | The id value of the list you want to update
let opts = {
  'listsListIdPutRequest': new Listmonk.ListsListIdPutRequest() // ListsListIdPutRequest | 
};
apiInstance.listsListIdPut(listId, opts, (error, data, response) => {
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
 **listId** | **Number**| The id value of the list you want to update | 
 **listsListIdPutRequest** | [**ListsListIdPutRequest**](ListsListIdPutRequest.md)|  | [optional] 

### Return type

**Array**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listsPost

> Array listsPost(opts)



handles list creation

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.ListsApi();
let opts = {
  'listRegistrationInfo': new Listmonk.ListRegistrationInfo() // ListRegistrationInfo | 
};
apiInstance.listsPost(opts, (error, data, response) => {
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
 **listRegistrationInfo** | [**ListRegistrationInfo**](ListRegistrationInfo.md)|  | [optional] 

### Return type

**Array**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

