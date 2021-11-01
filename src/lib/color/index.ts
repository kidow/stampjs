import { COLOR_NAME } from '../../data'
import { matchArray, getElement, getNumber } from '../../utils'

export class StampColor {
  hex() {
    return `#${Math.random().toString(16).slice(-6)}`
  }
  rgba() {
    return `rgba(${getNumber(256)}, ${getNumber(256)}, ${getNumber(256)}, ${
      Math.ceil(Math.random() * 10) / 10
    })`
  }
  rgb() {
    return `rgb(${getNumber(256)}, ${getNumber(256)}, ${getNumber(256)})`
  }
  shorthex() {
    return `#${Math.floor(Math.random() * (Math.pow(2, 12) - 1)).toString(16)}`
  }
  name() {
    return getElement(COLOR_NAME)
  }
  default() {
    return `#${Math.floor(Math.random() * (Math.pow(2, 24) - 1)).toString(16)}`
  }
}

export default (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1
  const color = new StampColor()

  if (isIncluded('color:hex')) {
    matchArray(format, 'color:hex').forEach(() => {
      format = format.replace('color:hex', color.hex())
    })
  }
  if (isIncluded('color:rgba')) {
    matchArray(format, 'color:rgba').forEach(() => {
      format = format.replace('color:hex', color.rgba())
    })
  }
  if (isIncluded('color:rgb')) {
    matchArray(format, 'color:rgb').forEach(() => {
      format = format.replace('color:rgb', color.rgb())
    })
  }
  if (isIncluded('color:shorthex')) {
    matchArray(format, 'color:shorthex').forEach(() => {
      format = format.replace('color:shorthex', color.shorthex())
    })
  }
  if (isIncluded('color:name')) {
    matchArray(format, 'color:name').forEach(() => {
      format = format.replace('color:name', color.name())
    })
  }
  if (isIncluded('color')) {
    matchArray(format, 'color').forEach(() => {
      format = format.replace('color', color.default())
    })
  }

  return format
}
