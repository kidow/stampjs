import { IS_DEV } from './data'
import {
  color,
  location,
  date,
  image,
  internet,
  person,
  system,
  text,
  number,
  thing
} from './lib'

const stamp = (format: string, data?: string): string => {
  if (!IS_DEV && data !== undefined) return data

  const isIncluded = (text: string) => format.indexOf(text) !== -1

  format = color(format)
  format = location(format)
  format = date(format)
  format = image(format)
  format = internet(format)
  format = number(format)
  format = person(format)
  format = text(format)
  format = thing(format)
  format = system(format)

  if (isIncluded('custom')) {
  }

  return ''
}

export default stamp
