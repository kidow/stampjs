import { ADDRESS, DIRECTION } from '../../data'
import {
  getAddress,
  getDecimal,
  getElement,
  getNumber,
  getNumberString,
  matchArray
} from '../../utils'

const location = (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1

  if (isIncluded('location:address')) {
    const replaceValue = () => {
      const index = getNumber(1)
      const area = getNumber(1024, 1)
      const order = getNumber(99, 1)
      const block = getNumber(1024, 1)
      const streetNumber = [`${area}-${order}`, block][index]
      return `${getAddress(ADDRESS)} ${streetNumber}`
    }
    matchArray(format, 'location:address').forEach(() => {
      format = format.replace('location:address', replaceValue())
    })
  }
  if (isIncluded('location:city')) {
    const replaceValue = () => getElement(Object.keys(ADDRESS))
    matchArray(format, 'location:city').forEach(() => {
      format = format.replace('location:city', replaceValue())
    })
  }
  if (isIncluded('location:direction')) {
    matchArray(format, 'location:direction').forEach(() => {
      format = format.replace('location:direction', getElement(DIRECTION))
    })
  }
  if (isIncluded('location:latitude')) {
    matchArray(format, 'location:latitude').forEach(() => {
      format = format.replace('location:latitude', getDecimal(-180, 180, 6))
    })
  }
  if (isIncluded('location:longitude')) {
    matchArray(format, 'location:longitude').forEach(() => {
      format = format.replace('location:longitude', getDecimal(-180, 180, 6))
    })
  }
  if (isIncluded('location:zip_code')) {
    const postCode: string = getElement(['###-###', '#####'])
    const replaceValue = () => {
      let result = ''
      for (let i = 0; i < postCode.length; i++) {
        if (postCode[i] === '#') result += getNumberString(9)
        else result += '-'
      }
      return result
    }
    matchArray(format, 'location:zip_code').forEach(() => {
      format = format.replace('location:zip_code', replaceValue())
    })
  }

  return format
}

export default location
