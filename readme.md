# Stamp.js

## The authentic genarator for random data

It parses a string to generate random data  

## Demo

...

## Installation

```zsh
$ npm install --save-dev stampjs

# yarn
$ yarn add stampjs --dev
```

## Example

```js
import stamp from 'stampjs'

const real_email = 'stampjs@gmail.com'

// development mode
stamp('internet:email', real_email) // random@email.com

// production mode
stamp('internet:email', real_email) // stampjs@gmail.com
```

## Usage

### **color**

- color:hex : `#d61569` `#843865` `#4c9605` `#cea7b8` ...
- color:rgba : `rgba(26, 186, 95, 0.4)` `rgba(222, 147, 32, 0.5)` ...
- color:rgb : `rgb(249, 70, 153)` `rgb(35, 76, 217)` `rgb(55, 1, 233)` ...
- color:shorthex : `#270` `#22f` `#ec7` `#e62` ...
- color:name : `chocolate` `dimgray` `indianred` `dodgerblue` ...
- color : `#6b29e6` `#784d99` `#504c54` `#fed062` ...

### **date**

- date:YYYY-MM-DD : `2008-09-13` `2020-07-21` `1988-04-08` ...
  - range : 1921-01-01 ~ 2021-12-31
- date:time-local : `2020-10-20T22:45` `2010-08-15T15:44` ...
- date:hour : `23` `12` `04` `08` ...
  - range : 00 ~ 24
- date:minute : `45` `52` `11` `42` ...
  - range : 00 ~ 60
- date:second : `23` `09` `13` `43` ...
  - range : 00 ~ 60
- date:weekday : `월` `화` `수` `목` `금` `토` `일`
- date:month:name : `Monday` `Tuesday` ...
- date:month : `12` `06` `07`
  - range : 00 ~ 12
- date:year : `1925` `1973` `1976` `1958` ...
  - range : 1921 ~ 2021
- date:timestamp : `1037083850627` `1485713592251` ...
  - range : 1000000000000 ~ `new Date().getTime()`
- date:millisecond : `894` `990` `495` `838` ...
- date:ampm : `am` `pm`

### **image**

- image:avatar : `https://i.pravatar.cc`

### **internet**

- internet:ip : `220.197.26.178` `111.17.239.156` ...
- internet:email : `oamm2bt7e6@example.com` ...
- internet:uuid : `af1bea34-3164-4461-b9ce-3fdebcc0a068` ...
- internet:domain : `tlykqa.ke` `sgjbywhx.fi`
- internet:url : `http://ar.oGwTDvT.co` ...
- internet:user_agent `Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)` ...
- internet:tld `com` `org` `net` ...

### **location**

- location:address : `서울 송파구 방이동 161` `서울 양천구 신월동 111-39`
- location:city : `서울` `전남` `충북` ...
- location:direction : `동` `서` `남` `북` `북동` `북서` `남동` `남서`
- location:latitude : `-35.052335` `36.043344` ...
- location:longitude : `136.691299` `-7.422723`
- location:zip_code : `184-793` `03750` ...

### **number**

- number:m-n : one of number from m to n
  - e.g. : number:1-100 `56` `32` `21` `37` `1` ...
- number:n : one of number from 1 to n

### **person**

- person:first_name : `김` `이` `박` `최` ...
- person:last_name:w : `서연` `서윤` `지우` `서현` ...
- person:last_name:m : `민준` `서준` `예준` `도윤` ...
- person:last_name : `규리` `준서` `민아` `지훈` ...
- person:phone:format : `01021363383` `01001290042` ...
- person:phone : `010-3534-1038` `010-3290-1823` ...
- person:age : `23` `21` `53` `42` ...
  - range : 19 ~ 65
- person:gender : `남` `여`
- person:name : `민채윤` `남궁채은` `원세아` ...
- person:job : `경찰관` `미용사` `배우` ...

### **system**

- system:mime_type : `application/json` `text/css` ...
- system:file_extension : `jpeg` `mp4` `xls` ...

### **text**

- text:character : 

## Localization

localization is 
default locale is `ko` (Korean)

If you contribute 