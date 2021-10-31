import { CHARACTER } from '../data'

export const getNumber = (max: number, min: number = 0): number => {
  if (!!min && min < 0) {
    console.warn('min must not be less than 0.')
    return getNumber(max)
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getUuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0
    let v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const getElement = (array: any[]) => array[getNumber(array.length - 1)]

export const matchArray = (value: string, format: string): unknown[] => {
  return Array.from({
    length: value.split(' ').filter((str) => str === format).length
  })
}

export const getId = () => Math.random().toString(36).slice(2)

export const getDecimal = (from: number, to: number, fixed: number) => {
  const num = Math.random() * (to - from) + from
  return num.toFixed(fixed)
}

export const getAddress = (param: any, address?: string): any => {
  if (!address) {
    const cities = Object.keys(param)
    const random_city = getElement(cities)
    address = random_city
    return getAddress(param[random_city], address)
  } else if (typeof param === 'object') {
    const keys = Object.keys(param)
    const random_key = getElement(keys)
    if (!isNaN(Number(random_key))) {
      const result = `${address} ${param[random_key]}`
      return result
    } else if (Array.isArray(param[random_key])) {
      const random_item =
        param[random_key][getNumber(param[random_key].length - 1)]
      const result = `${address} ${random_key} ${random_item}`
      return result
    } else if (typeof param[random_key] === 'object') {
      address = `${address} ${random_key}`
      return getAddress(param[random_key], address)
    } else {
      return getAddress(param[random_key], address)
    }
  }
}

export const getNumberString = (max: number, min: number = 0): string => {
  if (!!min && min < 0) {
    console.warn('min should not be less than 0.')
    return ''
  }
  const result = Math.floor(Math.random() * (max - min + 1)) + min
  return result < 10 ? `0${result}` : result.toString()
}

export const getWord = (max: number, min: number = 1): string => {
  if (max < 2) {
    console.warn('max should not be less than 2.')
    return ''
  }
  let result = ''
  const length = getNumber(max, min)
  for (let i = 0; i < length; i++) {
    result += getElement(CHARACTER.split(''))
  }
  return result
}

export const getBoolean = () => !!Math.round(Math.random())

export const getDate = (start: Date, end: Date = new Date()) =>
  new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toISOString()

// function convertToRoman(num: number) {
//   var roman = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   }
//   var str = ''

//   for (var i of Object.keys(roman)) {
//     var q = Math.floor(num / roman[i])
//     num -= q * roman[i]
//     str += i.repeat(q)
//   }

//   return str
// }
