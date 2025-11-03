# Symbologies

## All Symbologies

```{figure} ../../media/CODALL0.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/CODALL1.png
:align: center
:width: 300px

Enable
```


## 1D Symbologies

```{figure} ../../media/CODONE0.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/CODONE1.png
:align: center
:width: 300px

Enable
```

## 2D Symbologies

```{figure} ../../media/CODTWO0.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/CODTWO1.png
:align: center
:width: 300px

Enable
```

## 1D Reverse Symbologies

```{note}
- **Regular barcode**: Dark image on a bright background.
- **Inverse barcode**: Bright image on a dark background.
```

```{figure} ../../media/VIDREV0.png
:align: center
:width: 300px

`*` Only Supports Regular Barcode
```


```{figure} ../../media/VIDREV1.png
:align: center
:width: 300px

Only Supports Inverse Barcode
```


```{figure} ../../media/VIDREV2.png
:align: center
:width: 300px

All Supported
```


## Block Barcodes With URLs
Block scanning of URL QR codes starting with `http://`, `https://`

### Disable
```{figure} ../../media/QRURL1.png
:align: center
:width: 300px

`*` Disable
```

### Enable
```{figure} ../../media/QRURL0.png
:align: center
:width: 300px

Enable
```

## UPC-A

### Enable/Disable

```{figure} ../../media/UPCA0.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/UPCA1.png
:align: center
:width: 300px

`*` Enable
```

### Transmit Preamble Character
Preamble characters (country code and system characters) can be transmitted as part of the UPC-A symbology. Select one of the following options to set and transmit a UPC-A preamble to the host: Transmit system characters only, Transmit system characters and country code ("0" for the United States), or Transmit no preamble.

```{figure} ../../media/UPAENA2.png
:align: center
:width: 300px

No System Character
```

```{figure} ../../media/UPAENA0.png
:align: center
:width: 300px

`*` System Character
```
```{figure} ../../media/UPAENA1.png
:align: center
:width: 300px

System Character & Country Code 
```

### Transmit Check Character

```{figure} ../../media/UPCAS0.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/UPCAS1.png
:align: center
:width: 300px

`*` Enable
```


## UPC-E

### Enable/Disable

```{figure} ../../media/UPCE0.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/UPCE1.png
:align: center
:width: 300px

`*` Enable
```

### Transmit Preamble Character
Preamble characters (country code and system characters) can be transmitted as part of the UPC-A symbology. Select one of the following options to set and transmit a UPC-A preamble to the host: Transmit system characters only, Transmit system characters and country code ("0" for the United States), or Transmit no preamble.

```{figure} ../../media/UPEPRE0.png
:align: center
:width: 300px

No System Character
```

```{figure} ../../media/UPEPRE1.png
:align: center
:width: 300px

`*` System Character
```
```{figure} ../../media/UPEPRE2.png
:align: center
:width: 300px

System Character & Country Code 
```

### Transmit Check Character

```{figure} ../../media/UPCES0.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/UPCES1.png
:align: center
:width: 300px

`*` Enable
```

### Convert UPC-E to UPC-A


```{figure} ../../media/UPENSX0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/UPENSX1.png
:align: center
:width: 300px

Enable
```

When `Enable` is selected,Converts UPC-E decoded data to UPC-A format. After conversion, the data follows the UPC-A format and is affected by UPC-A programming selections (e.g., preamble, check digit).


## EAN-8

### Enable/Disable

```{figure} ../../media/EAN80.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/EAN81.png
:align: center
:width: 300px

`*` Enable
```

### EAN-8 Extension

When `Enable` is selected, the scanner adds five leading zeros to the decoded EAN-8 barcode to extend to 13 digits.

```{figure} ../../media/EA8E130.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/EA8E131.png
:align: center
:width: 300px

Enable
```


### Transmit Check Character

```{figure} ../../media/EA8CKX0.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/EA8CKX1.png
:align: center
:width: 300px

`*` Enable
```



## EAN-13

### Enable/Disable

```{figure} ../../media/EAN130.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/EAN131.png
:align: center
:width: 300px

`*` Enable
```

### Transmit Check Character

```{figure} ../../media/E13CKX0.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/E13CKX1.png
:align: center
:width: 300px

`*` Enable
```

### Convert EAN13 to ISBN


```{figure} ../../media/ISBN0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/ISBN1.png
:align: center
:width: 300px

Enable
```

### Convert EAN13 to ISSN


```{figure} ../../media/ISSN0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/ISSN1.png
:align: center
:width: 300px

Enable
```



## UPC/EAN/JAN Add-On Code

```{figure} ../../media/UESUPP0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/UESUPP1.png
:align: center
:width: 300px

Enable
```

```{figure} ../../media/UESUPP2.png
:align: center
:width: 300px

Adaptive
```

```{note}
- `Disable`:When the scanner scans a barcode with an additional code, it decodes the barcode and ignores the additional code. The scanner can also decode barcodes without the additional code.
- `Enable`:Scanner only decodes mixed barcodes with additional codes.
- `Adaptive`:Scanner decodes a mix of barcodes with and without add-on codes.
```


## Code 128

### Enable/Disable

```{figure} ../../media/COD1280.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/COD1281.png
:align: center
:width: 300px

`*` Enable
```

## GS1-128

### Enable/Disable

```{figure} ../../media/GS11280.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/GS11281.png
:align: center
:width: 300px

`*` Enable
```

## ISBT 128

### Enable/Disable

```{figure} ../../media/GS11280.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/GS11281.png
:align: center
:width: 300px

`*` Enable
```

## 128 Barcode Length Limit Setting


```{figure} ../../media/128MIN.png
:align: center
:width: 300px

Minimum Length Limit(0~50 Digits)
```

```{figure} ../../media/128MAX.png
:align: center
:width: 300px

Maximum Length Limit(0~50 Digits)
```


## Code 39

### Enable/Disable

```{figure} ../../media/CODE390.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/CODE391.png
:align: center
:width: 300px

`*` Enable
```

### Transmit Check Character

```{figure} ../../media/C39CK0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/C39CK1.png
:align: center
:width: 300px

Enable And Not Transmit
```

```{figure} ../../media/C39CK2.png
:align: center
:width: 300px

Enable And Transmit
```

### Code 39 Full ASCII

```{figure} ../../media/C39ACS0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/C39ACS1.png
:align: center
:width: 300px

Enable
```

### Transmit Start And End Characters

```{figure} ../../media/C39ST0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/C39ST1.png
:align: center
:width: 300px

Enable
```

### Length Limit Setting


```{figure} ../../media/C39MIN.png
:align: center
:width: 300px

Minimum Length Limit(0~50 Digits)
```

```{figure} ../../media/C39MAX.png
:align: center
:width: 300px

Maximum Length Limit(0~50 Digits)
```


## Code 32

### Convert Code 39 To Code 32 (Italian Pharmaceutical Code)
Code 32 is a variation of Code 39 used by the Italian pharmaceutical industry. Scan the appropriate bar code below to enable or disable the conversion of Code 39 to Code 32.

```{figure} ../../media/CODE320.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/CODE321.png
:align: center
:width: 300px

Enable
```

### Code 32 Prefix
Enabling this parameter adds the prefix character "A" to all Code 32 codes. Before enabling this parameter, you must convert Code 39 to Code 32 (Italian Pharmaceutical Code)

```{figure} ../../media/C32PRE0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/C32PRE1.png
:align: center
:width: 300px

Enable
```


## Code 93

### Enable/Disable

```{figure} ../../media/CODE930.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/CODE931.png
:align: center
:width: 300px

`*` Enable
```

### Length Limit Setting


```{figure} ../../media/C93MIN.png
:align: center
:width: 300px

Minimum Length Limit(0~50 Digits)
```

```{figure} ../../media/C93MAX.png
:align: center
:width: 300px

Maximum Length Limit(0~50 Digits)
```


## Code 11

### Enable/Disable

```{figure} ../../media/C11ENA0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/C11ENA1.png
:align: center
:width: 300px

Enable
```


### Transmit Check Character

```{figure} ../../media/C11CKT0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/C11CKT1.png
:align: center
:width: 300px

Enable
```

### Check Digit Verification
This feature allows the scanner to check the integrity of all Code 11 symbologies to verify that the data conforms to a specified check digit algorithm. This selects the check digit mechanism for the decoded Code 11 barcode. Options include checking one check digit, checking two check digits, or disabling the feature.

```{figure} ../../media/C11CKE0.png
:align: center
:width: 300px

`*` Disable
```
```{figure} ../../media/C11CKE1.png
:align: center
:width: 300px

One Check Digit
```
```{figure} ../../media/C11CKE2.png
:align: center
:width: 300px

Two Check Digits
```

### Length Limit Setting


```{figure} ../../media/C11MIN.png
:align: center
:width: 300px

Minimum Length Limit(0~50 Digits)
```

```{figure} ../../media/C11MAX.png
:align: center
:width: 300px

Maximum Length Limit(0~50 Digits)
```



## Interleaved 2 of 5/ITF

### Enable/Disable

```{figure} ../../media/ITF250.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/ITF251.png
:align: center
:width: 300px

`*` Enable
```

### Transmit Check Character

```{figure} ../../media/I25CK0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/I25CK1.png
:align: center
:width: 300px

Enable And Not Transmit
```

```{figure} ../../media/I25CK2.png
:align: center
:width: 300px

Enable And Transmit
```

### Length Selection

```{figure} ../../media/I25LEN0.png
:align: center
:width: 300px

Any length (4-24 Digits)
```

```{figure} ../../media/I25LEN1.png
:align: center
:width: 300px

6-Digit Length
```

```{figure} ../../media/I25LEN2.png
:align: center
:width: 300px

8-Digit Length
```

```{figure} ../../media/I25LEN3.png
:align: center
:width: 300px

10-Digit Length
```

```{figure} ../../media/I25LEN4.png
:align: center
:width: 300px

12-Digit Length
```

```{figure} ../../media/I25LEN5.png
:align: center
:width: 300px

14-Digit Length
```

```{figure} ../../media/I25LEN6.png
:align: center
:width: 300px

16-Digit Length
```

```{figure} ../../media/I25LEN7.png
:align: center
:width: 300px

18-Digit Length
```

```{figure} ../../media/I25LEN8.png
:align: center
:width: 300px

20-Digit Length
```

```{figure} ../../media/I25LEN9.png
:align: center
:width: 300px

22-Digit Length
```

```{figure} ../../media/I25LEN10.png
:align: center
:width: 300px

24-Digit Length
```

### Length Limit Setting



```{figure} ../../media/I25MIN.png
:align: center
:width: 300px

Minimum Length Limit(0~50 Digits)
```

```{figure} ../../media/I25MAX.png
:align: center
:width: 300px

Maximum Length Limit(0~50 Digits)
```


## Industrial 2 of 5

### Enable/Disable

```{figure} ../../media/IDS250.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/IDS251.png
:align: center
:width: 300px

Enable
```


### Length Limit Setting



```{figure} ../../media/R25MIN.png
:align: center
:width: 300px

Minimum Length Limit(0~50 Digits)
```

```{figure} ../../media/R25MAX.png
:align: center
:width: 300px

Maximum Length Limit(0~50 Digits)
```

## Matrix 2 of 5

### Enable/Disable

```{figure} ../../media/MAT250.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/MAT251.png
:align: center
:width: 300px

Enable
```

### Length Limit Setting



```{figure} ../../media/X25MIN.png
:align: center
:width: 300px

Minimum Length Limit(0~50 Digits)
```

```{figure} ../../media/X25MAX.png
:align: center
:width: 300px

Maximum Length Limit(0~50 Digits)
```


## Codabar

### Enable/Disable

```{figure} ../../media/CODBAR0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/CODBAR1.png
:align: center
:width: 300px

Enable
```

### Transmit Start/End Character

```{figure} ../../media/CBRENA0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/CBRENA1.png
:align: center
:width: 300px

Enable
```

### Length Limit Setting



```{figure} ../../media/CBRMIN.png
:align: center
:width: 300px

Minimum Length Limit(0~50 Digits)
```

```{figure} ../../media/CBRMAX.png
:align: center
:width: 300px

Maximum Length Limit(0~50 Digits)
```

## MSI/MSI Plessey
### Enable/Disable

```{figure} ../../media/MSIENA0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/MSIENA1.png
:align: center
:width: 300px

Enable
```

### Check Digit Verification

```{figure} ../../media/MSICDB0.png
:align: center
:width: 300px

`*` One Check Digit
```

```{figure} ../../media/MSICDB1.png
:align: center
:width: 300px

Two Check Digits
```



### Transmit Check Character

```{figure} ../../media/MSICDT0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/MSICDT1.png
:align: center
:width: 300px

Enable
```

### Check Digit Algorithm
When the Two MSI Check Digits option is selected, additional verification is required to ensure integrity. Select one of the following algorithms:

```{figure} ../../media/MSIAM11.png
:align: center
:width: 300px

MOD 10/MOD 11
```

```{figure} ../../media/MSIAM10.png
:align: center
:width: 300px

`*` MOD 10/MOD 10
```

### Length Limit Setting


```{figure} ../../media/MSIMIN.png
:align: center
:width: 300px

Minimum Length Limit(0~50 Digits)
```

```{figure} ../../media/MSIMAX.png
:align: center
:width: 300px

Maximum Length Limit(0~50 Digits)
```


## GS1 DataBar/RSS

### Enable/Disable

```{figure} ../../media/RSS140.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/RSS141.png
:align: center
:width: 300px

Enable
```

### GS1 DataBar Limited

```{figure} ../../media/GS1LMT0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/GS1LMT1.png
:align: center
:width: 300px

Enable
```

### GS1 DataBar Expanded

```{figure} ../../media/GS1EPD0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/GS1EPD1.png
:align: center
:width: 300px

Enable
```


## PDF417

### Enable/Disable

```{figure} ../../media/PDF4170.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/PDF4171.png
:align: center
:width: 300px

`*` Enable
```


### Length Limit Setting


```{figure} ../../media/MSIMIN.png
:align: center
:width: 300px

Minimum Length Limit(1~2750)
```

```{figure} ../../media/MSIMAX.png
:align: center
:width: 300px

Maximum Length Limit(1~2750)
```

## Micro PDF417

### Enable/Disable

```{figure} ../../media/MPDF0.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/MPDF1.png
:align: center
:width: 300px

`*` Enable
```

### Length Limit Setting


```{figure} ../../media/MPDFMIN.png
:align: center
:width: 300px

Minimum Length Limit(1~366)
```

```{figure} ../../media/MPDFMAX.png
:align: center
:width: 300px

Maximum Length Limit(1~366)
```

## QR Code

### Enable/Disable

```{figure} ../../media/QRCODE0.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/QRCODE1.png
:align: center
:width: 300px

`*` Enable
```

### Length Limit Setting


```{figure} ../../media/QRMIN.png
:align: center
:width: 300px

Minimum Length Limit(1~7089)
```

```{figure} ../../media/MPDFMAX.png
:align: center
:width: 300px

Maximum Length Limit(1~7089)
```

## Micro QR

### Enable/Disable

```{figure} ../../media/MQRCOD0.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/MQRCOD1.png
:align: center
:width: 300px

`*` Enable
```

### Length Limit Setting


```{figure} ../../media/MQRMIN.png
:align: center
:width: 300px

Minimum Length Limit(1~35)
```

```{figure} ../../media/MQRMAX.png
:align: center
:width: 300px

Maximum Length Limit(1~35)
```



## Data Matrix(DM)

### Enable/Disable

```{figure} ../../media/DATAM0.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/DATAM1.png
:align: center
:width: 300px

`*` Enable
```

### Length Limit Setting


```{figure} ../../media/DMMIN.png
:align: center
:width: 300px

Minimum Length Limit(1~3116)
```

```{figure} ../../media/DMMAX.png
:align: center
:width: 300px

Maximum Length Limit(1~3116)
```


## Aztec Code

### Enable/Disable

```{figure} ../../media/AZTEC0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/AZTEC1.png
:align: center
:width: 300px

Enable
```

### Length Limit Setting


```{figure} ../../media/AZTMIN.png
:align: center
:width: 300px

Minimum Length Limit(1~3832)
```

```{figure} ../../media/AZTMAX.png
:align: center
:width: 300px

Maximum Length Limit(1~3832)
```

## Febraban
``` {warning}
Before enabling the Frbraban function, please disable the AIM ID function first.
```

### Enable/Disable (ITF25)

```{figure} ../../media/FEBRA0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/FEBRA1.png
:align: center
:width: 300px

Enable
```

### Enable/Disable (Code128)

```{figure} ../../media/FEBRC0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/FEBRC1.png
:align: center
:width: 300px

Enable
```

### Code Verification

```{figure} ../../media/FEBCK0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/FEBCK1.png
:align: center
:width: 300px

Enable
```




## Digital Barcode


```{figure} ../../media/K0K.png
:align: center
:width: 300px

0
```
```{figure} ../../media/K1K.png
:align: center
:width: 300px

1
```
```{figure} ../../media/K2K.png
:align: center
:width: 300px

2
```
```{figure} ../../media/K3K.png
:align: center
:width: 300px

3
```
```{figure} ../../media/K4K.png
:align: center
:width: 300px

4
```
```{figure} ../../media/K5K.png
:align: center
:width: 300px

5
```
```{figure} ../../media/K6K.png
:align: center
:width: 300px

6
```
```{figure} ../../media/K7K.png
:align: center
:width: 300px

7
```
```{figure} ../../media/K8K.png
:align: center
:width: 300px

8
```
```{figure} ../../media/K9K.png
:align: center
:width: 300px

9
```
```{figure} ../../media/KAK.png
:align: center
:width: 300px

A
```
```{figure} ../../media/KBK.png
:align: center
:width: 300px

B
```
```{figure} ../../media/KCK.png
:align: center
:width: 300px

C
```
```{figure} ../../media/KDK.png
:align: center
:width: 300px

D
```

```{figure} ../../media/KEK.png
:align: center
:width: 300px

E
```

```{figure} ../../media/KFK.png
:align: center
:width: 300px

F
```

```{figure} ../../media/KRSTP.png
:align: center
:width: 300px

Cancel Current Settings
```

```{figure} ../../media/KRSTN.png
:align: center
:width: 300px

Cancel String Of Data Read Previously
```

```{figure} ../../media/KBACK.png
:align: center
:width: 300px

Cancel Previous Read Data
```

```{figure} ../../media/KSAVE.png
:align: center
:width: 300px

Save
```

