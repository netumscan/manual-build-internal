# Terminator

## Start Character Settings
The start character is added before the decoded data, and the format is: start character + decoded data.

### No Start Character

```{figure} ../../media/PREFIX0.png
:align: center
:width: 300px

`*` No Start Character
```

### STX

```{figure} ../../media/PREFIX1.png
:align: center
:width: 300px

STX
```

## End Character Settings
The end character is added after the decoded data in the format of decoded data + end character.

### No End Character

```{figure} ../../media/RETURN0.png
:align: center
:width: 300px

No End Character
```

### Enter(CR)

```{figure} ../../media/RETURN1.png
:align: center
:width: 300px

Enter(CR)

```

### New Line(LF)

```{figure} ../../media/RETURN2.png
:align: center
:width: 300px

New Line(LF)
```

### Enter+New Line(CRLF)

```{figure} ../../media/RETURN3.png
:align: center
:width: 300px

`*` Enter+New Line(CRLF)
```

### Tab(TAB)

```{figure} ../../media/RETURN4.png
:align: center
:width: 300px

Tab(TAB)
```

### ETX

```{figure} ../../media/RETURN5.png
:align: center
:width: 300px

ETX
```


## Code ID

### Disable
```{figure} ../../media/IDENA0.png
:align: center
:width: 300px

`*` Disable
```

### Enable (Before The Barcode Content)
```{figure} ../../media/IDENA1.png
:align: center
:width: 300px

Enable (Before The Barcode Content)
```

### Enable (After The Barcode Content)
```{figure} ../../media/IDENA2.png
:align: center
:width: 300px

Enable (After The Barcode Content)
```

### Edit
```{figure} ../../media/PRGCID.png
:align: center
:width: 300px

Customize CODE ID
```


```{figure} ../../media/CLRAID.png
:align: center
:width: 300px

Clear All Custom CODE IDs
```

### Code ID Identifiers

```{raw} html
<iframe src="../../plugins/dp-codeid.html" style="height:800px; width:100%; border:none;"></iframe>
```


## AIM ID


### Disable
```{figure} ../../media/AIMENA0.png
:align: center
:width: 300px

`*` Disable
```

### Enable (Before The Barcode Content)
```{figure} ../../media/AIMENA1.png
:align: center
:width: 300px

Enable (Before The Barcode Content)
```

### Enable (After The Barcode Content)
```{figure} ../../media/AIMENA2.png
:align: center
:width: 300px

Enable (After The Barcode Content)
```


### AIM Code Identifiers


Each AIM Code Identifier contains the three-character string ]cm where: <br>
- ] = Flag Character
- c =Code Character (see table)
- m= Modifier Character

```{raw} html
<iframe src="../../plugins/dp-aimid.html" style="height:800px; width:100%; border:none;"></iframe>
```