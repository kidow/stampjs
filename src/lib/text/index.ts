import { CHARACTER } from '../../data'
import { getElement, matchArray } from '../../utils'

export class StampText {
  character() {
    return getElement(CHARACTER.split(''))
  }
}

export default (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1
  const text = new StampText()

  if (isIncluded('text:word')) {
  }
  if (isIncluded('text:character')) {
    matchArray(format, 'text:character').forEach(() => {
      format = format.replace('text:character', text.character())
    })
  }
  if (isIncluded('text:sentence')) {
  }

  return format
}
