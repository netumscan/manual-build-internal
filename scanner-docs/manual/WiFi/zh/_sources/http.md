# Use HTTP protocol to transfer data

## Create REST API
### Brief Description
- Scanner data upload interface

### Request URL
- https://httpbin.org/post

### Request Mode
- POST

### Request Parameters

```{csv-table}
:widths: 20 20 20 20
:header-rows: 1

Parameter name,required,type,description
id,yes,string,device Id
msg,yes,string,Scan Content
```
```{code-block} json
:caption: Request Example
:lineno-start: 1

{"id": "04B9023A","msg":"1234567890"}
```

### Return Parameter

For details, see [Data receiving format](wireless.md#data-rceiving-format)


## Configure Scanner

### Set the Content-Type of the scanner request


```{figure} ../../media/application-json.png
:align: center
:width: 300px

Application/Json
```

### Set the data format sent by the scanner


```{figure} ../../media/25WFCOMMPM23S1.png
:align: center
:width: 300px

Json Format
```


### Configure WiFi and API URL address
```{raw} html
    <iframe src="../../plugins/wifi-https.html" height="650px" width="100%"></iframe>
```