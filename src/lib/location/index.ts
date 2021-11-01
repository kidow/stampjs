import { ADDRESS, DIRECTION } from '../../data'
import {
  getAddress,
  getDecimal,
  getElement,
  getNumber,
  getNumberString,
  matchArray
} from '../../utils'

export class StampLocation {
  address() {
    const index = getNumber(1)
    const area = getNumber(1024, 1)
    const order = getNumber(99, 1)
    const block = getNumber(1024, 1)
    const streetNumber = [`${area}-${order}`, block][index]
    return `${getAddress(ADDRESS)} ${streetNumber}`
  }
  city() {
    return getElement(Object.keys(ADDRESS))
  }
  direction() {
    return getElement(DIRECTION)
  }
  latitude() {
    return getDecimal(-180, 180, 6)
  }
  longitude() {
    return getDecimal(-180, 180, 6)
  }
  zipCode() {
    const postCode: string = getElement(['###-###', '#####'])
    let result = ''
    for (let i = 0; i < postCode.length; i++) {
      if (postCode[i] === '#') result += getNumber(9).toString()
      else result += '-'
    }
    return result
  }
}

export default (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1
  const location = new StampLocation()

  if (isIncluded('location:address')) {
    matchArray(format, 'location:address').forEach(() => {
      format = format.replace('location:address', location.address())
    })
  }
  if (isIncluded('location:city')) {
    matchArray(format, 'location:city').forEach(() => {
      format = format.replace('location:city', location.city())
    })
  }
  if (isIncluded('location:direction')) {
    matchArray(format, 'location:direction').forEach(() => {
      format = format.replace('location:direction', location.direction())
    })
  }
  if (isIncluded('location:latitude')) {
    matchArray(format, 'location:latitude').forEach(() => {
      format = format.replace('location:latitude', location.latitude())
    })
  }
  if (isIncluded('location:longitude')) {
    matchArray(format, 'location:longitude').forEach(() => {
      format = format.replace('location:longitude', location.longitude())
    })
  }
  if (isIncluded('location:zip_code')) {
    matchArray(format, 'location:zip_code').forEach(() => {
      format = format.replace('location:zip_code', location.zipCode())
    })
  }

  return format
}
