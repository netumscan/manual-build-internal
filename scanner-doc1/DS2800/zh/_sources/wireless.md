# Wi-Fi Transmission mode

## Modify Device ID

```{raw} html

    <iframe src="../../plugins/wifi-clientId.html" height="500px" width="100%"></iframe>

```
## Data Upload Format
### Original Barcode Content[^1]
[^1]: Original barcode content: {"ID":"680870"}

```{figure} ../../media/25WFCOMMPM23S0.png
:align: center
:width: 300px

Original Barcode Content
```
### Json Format Content[^2]
[^2]: Json format content: {"id":"C143F123","msg":"{"ID":"680870"}"}


```{figure} ../../media/25WFCOMMPM23S1.png
:align: center
:width: 300px

Json Format Content
```
### Json Format + double quotes plus escape characters in content[^3]
[^3]: Json Format + double quotes plus escape characters in content: {"id":"C143F123","msg":"{\"ID\":\"680870\"}"}


```{figure} ../../media/25WFCOMMPM23S2.png
:align: center
:width: 300px

Json Format + double quotes plus escape characters in content
```

## Data Rceiving Format

```{csv-table}
:widths: 30 30 40
:header-rows: 1

Parameter name,type,description
ply,Int,Voice Code
msg,String,Message content
```

```{code-block} json
:caption: Return example
:lineno-start: 1

{"ply":2,"msg":"ABEF"}
```

### Voice Code

```{csv-table}
:widths: 50 50
:header-rows: 1

Voice Code,Voice content
1,The buzzer sounds once
2,The buzzer sounds twice
3,The buzzer sounds three
```



## Data Transmission Protocol
```{toctree}
:maxdepth: 2

tcpclient.md
tcpserver.md
mqtt.md
http.md
```
## Network Configuration
```{toctree}
:maxdepth: 2

network.md
```
