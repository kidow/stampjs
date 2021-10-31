import { CHARACTER } from '../../data'
import { getElement, matchArray } from '../../utils'

const text = (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1

  if (isIncluded('text:word')) {
  }
  if (isIncluded('text:character')) {
    matchArray(format, 'text:character').forEach(() => {
      format = format.replace('text:character', getElement(CHARACTER.split('')))
    })
  }
  if (isIncluded('text:sentence')) {
  }

  return format
}

export default text
