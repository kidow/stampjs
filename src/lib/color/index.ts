import { COLOR_NAME } from '../../data'
import { matchArray, getElement, getNumber } from '../../utils'

const color = (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1

  if (isIncluded('color:hex')) {
    const replaceValue = () => `#${Math.random().toString(16).slice(-6)}`
    matchArray(format, 'color:hex').forEach(() => {
      format = format.replace('color:hex', replaceValue())
    })
  }
  if (isIncluded('color:rgba')) {
    const replaceValue = () =>
      `rgba(${getNumber(256)}, ${getNumber(256)}, ${getNumber(256)}, ${
        Math.ceil(Math.random() * 10) / 10
      })`
    matchArray(format, 'color:rgba').forEach(() => {
      format = format.replace('color:hex', replaceValue())
    })
  }
  if (isIncluded('color:rgb')) {
    const replaceValue = () =>
      `rgb(${getNumber(256)}, ${getNumber(256)}, ${getNumber(256)})`
    matchArray(format, 'color:rgb').forEach(() => {
      format = format.replace('color:rgb', replaceValue())
    })
  }
  if (isIncluded('color:shorthex')) {
    const replaceValue = () =>
      `#${Math.floor(Math.random() * (Math.pow(2, 12) - 1)).toString(16)}`
    matchArray(format, 'color:shorthex').forEach(() => {
      format = format.replace('color:shorthex', replaceValue())
    })
  }
  if (isIncluded('color:name')) {
    const replaceValue = () => getElement(COLOR_NAME)
    matchArray(format, 'color:name').forEach(() => {
      format = format.replace('color:name', replaceValue())
    })
  }
  if (isIncluded('color')) {
    const replaceValue = () =>
      `#${Math.floor(Math.random() * (Math.pow(2, 24) - 1)).toString(16)}`
    matchArray(format, 'color').forEach(() => {
      format = format.replace('color', replaceValue())
    })
  }

  return format
}

export default color
