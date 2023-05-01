# Listmonk.SubscribersListsPutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **Number** | The ids of the subscribers to be modified. | [optional] 
**action** | **String** | Whether to add, remove, or unsubscribe the users. | [optional] 
**targetListIds** | **Number** | The ids of the lists to be modified. | [optional] 
**status** | **String** | confirmed, unconfirmed, or unsubscribed status. | [optional] 



## Enum: ActionEnum


* `add` (value: `"add"`)

* `remove` (value: `"remove"`)

* `unsubscribe` (value: `"unsubscribe"`)





## Enum: StatusEnum


* `confirmed` (value: `"confirmed"`)

* `unconfirmed` (value: `"unconfirmed"`)

* `unsubscribed` (value: `"unsubscribed"`)




