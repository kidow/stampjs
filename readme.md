# Stamp.js

## The authentic genarator for random data

It parses a string to generate random data  

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

### Color
```js
stamp('color:hex')      // '#d61569'
stamp('color:rgba')     // 'rgba(26, 186, 95, 0.4)'
stamp('color:shorthex') // 'rgb(249, 70, 153)'
stamp('color:name')     // '#270'
stamp('color') // '#6b29e6'
```

### Date
```js
stamp('date:YYYY-MM-DD')  // '2008-09-13'
stamp('date:time-local')  // '2020-10-20T22:45'
stamp('date:hour')        // '09'
stamp('date:minute')      // '14'
stamp('date:second')      // '23'
stamp('date:weekday')     // '월'
stamp('date:month:name')  // 'April'
stamp('date:month')       // '12'
stamp('date:year')        // '1921'
stamp('date:timestamp')   // '1485713592251'
stamp('date:millisecond') // '894'
stamp('date:ampm')        // 'am'
```

### Image
```js
stamp('image:avatar') // 'https://i.pravatar.cc'
```

### Internet
```js
stamp('internet:ip')         // '220.197.26.178'
stamp('internet:email')      // 'oamm2bt7e6@example.com'
stamp('internet:uuid')       // 'af1bea34-3164-4461-b9ce-3fdebcc0a068'
stamp('internet:domain')     // 'tlykqa.ke'
stamp('internet:url')        // 'http://ar.oGwTDvT.co'
stamp('internet:user_agent') // 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)'
stamp('internet:tld')        // 'com'
```

### Location
```js
stamp('location:address')   // '서울 송파구 방이동 161'
stamp('location:city')      // '서울'
stamp('location:direction') // '남동'
stamp('location:latitude')  // '-35.052335'
stamp('location:longitude') // '136.691299'
stamp('location:zip_code')  // '184-793'
```

### Number
```js
stamp('number:m-n') // '8' (one of number from m to n)
stamp('number:n')   // '2' (one of number from 1 to n)
```

### Person
```js
stamp('person:first_name')   // '김'
stamp('person:last_name:w')  // '서연'
stamp('person:last_name:m')  // '민준'
stamp('person:last_name')    // '규리'
stamp('person:phone:format') // '01012345678'
stamp('person:phone')        // '010-1234-5678'
stamp('person:age')          // '21' (between 19 and 65)
stamp('person:gender')       // '남'
stamp('person:name')         // '민채윤'
stamp('person:job')          // '배우'
```

### System
```js
stamp('system:mime_type')      // 'application/json'
stamp('system:file_extension') // 'jpeg'
```

### Text
```js
stamp('text:character') // 'A'
```
```

## Localization

localization is 
default locale is still only `ko` (Korean)