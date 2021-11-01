import { matchArray } from '../../utils'

export class StampImage {
  avatar() {
    return 'https://i.pravatar.cc'
  }
}

export default (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1
  const image = new StampImage()

  if (isIncluded('image:avatar')) {
    matchArray(format, 'image:avatar').forEach(() => {
      format = format.replace('image:avatar', image.avatar())
    })
  }

  return format
}
