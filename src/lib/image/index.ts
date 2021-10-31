import { matchArray } from '../../utils'

const image = (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1

  if (isIncluded('image:avatar')) {
    matchArray(format, 'image:avatar').forEach(() => {
      format = format.replace('image:avatar', 'https://i.pravatar.cc')
    })
  }

  return format
}

export default image
