# Listmonk.TemplatesApi

All URIs are relative to *http://localhost:9000/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templatesGet**](TemplatesApi.md#templatesGet) | **GET** /templates | 
[**templatesTemplateIdDefaultPut**](TemplatesApi.md#templatesTemplateIdDefaultPut) | **PUT** /templates/{template_id}/default | 
[**templatesTemplateIdDelete**](TemplatesApi.md#templatesTemplateIdDelete) | **DELETE** /templates/{template_id} | 
[**templatesTemplateIdGet**](TemplatesApi.md#templatesTemplateIdGet) | **GET** /templates/{template_id} | 
[**templatesTemplateIdPreviewGet**](TemplatesApi.md#templatesTemplateIdPreviewGet) | **GET** /templates/{template_id}/preview | 



## templatesGet

> TemplatesGet200Response templatesGet()



handles retrieval of templates

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.TemplatesApi();
apiInstance.templatesGet((error, data, response) => {
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

[**TemplatesGet200Response**](TemplatesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templatesTemplateIdDefaultPut

> Template templatesTemplateIdDefaultPut(templateId)



handles template modification.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.TemplatesApi();
let templateId = 3.4; // Number | The id value of the template you want to set to the default template.
apiInstance.templatesTemplateIdDefaultPut(templateId, (error, data, response) => {
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
 **templateId** | **Number**| The id value of the template you want to set to the default template. | 

### Return type

[**Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templatesTemplateIdDelete

> HealthGet200Response templatesTemplateIdDelete(templateId)



handles deletion of templates

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.TemplatesApi();
let templateId = 3.4; // Number | The id value of the template you want to delete.
apiInstance.templatesTemplateIdDelete(templateId, (error, data, response) => {
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
 **templateId** | **Number**| The id value of the template you want to delete. | 

### Return type

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templatesTemplateIdGet

> Template templatesTemplateIdGet(templateId)



handles retrieval of templates

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.TemplatesApi();
let templateId = 3.4; // Number | The id value of the template you want to get.
apiInstance.templatesTemplateIdGet(templateId, (error, data, response) => {
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
 **templateId** | **Number**| The id value of the template you want to get. | 

### Return type

[**Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templatesTemplateIdPreviewGet

> String templatesTemplateIdPreviewGet(templateId)



renders the HTML preview of a template.

### Example

```javascript
import Listmonk from 'listmonk';

let apiInstance = new Listmonk.TemplatesApi();
let templateId = 3.4; // Number | The id value of the template you want to get.
apiInstance.templatesTemplateIdPreviewGet(templateId, (error, data, response) => {
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
 **templateId** | **Number**| The id value of the template you want to get. | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html

