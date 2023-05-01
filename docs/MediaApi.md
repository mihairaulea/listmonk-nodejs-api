# Listmonk.MediaApi

All URIs are relative to *http://localhost:9000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mediaGet**](MediaApi.md#mediaGet) | **GET** /media | 
[**mediaMediaIdDelete**](MediaApi.md#mediaMediaIdDelete) | **DELETE** /media/{media_id} | 
[**mediaMediaIdGet**](MediaApi.md#mediaMediaIdGet) | **GET** /media/{media_id} | 
[**mediaPost**](MediaApi.md#mediaPost) | **POST** /media | 



## mediaGet

> MediaGet200Response mediaGet()



handles retrieval of uploaded media.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.MediaApi();
apiInstance.mediaGet((error, data, response) => {
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

[**MediaGet200Response**](MediaGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mediaMediaIdDelete

> HealthGet200Response mediaMediaIdDelete(mediaId)



handles deletion of uploaded media.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.MediaApi();
let mediaId = 3.4; // Number | The id value of the list you want to delete.
apiInstance.mediaMediaIdDelete(mediaId, (error, data, response) => {
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
 **mediaId** | **Number**| The id value of the list you want to delete. | 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mediaMediaIdGet

> MediaFileObject mediaMediaIdGet(id)



handles retrieval of uploaded media.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.MediaApi();
let id = 56; // Number | media file id
apiInstance.mediaMediaIdGet(id, (error, data, response) => {
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
 **id** | **Number**| media file id | 

### Return type

[**MediaFileObject**](MediaFileObject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mediaPost

> MediaFileObject mediaPost()



handles media file uploads.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.MediaApi();
apiInstance.mediaPost((error, data, response) => {
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

[**MediaFileObject**](MediaFileObject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

