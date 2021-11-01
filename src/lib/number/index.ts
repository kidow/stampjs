import { getNumber } from '../../utils'

export class StampNumber {
  mn(format: string) {
    const match = format.match(/\d+-\d+/g)
    if (!match) return ''
    const arr = match[0].split('-').map(Number)
    return format.replace(
      /number\:\d+-\d+/,
      getNumber(Math.max(...arr), Math.min(...arr)).toString()
    )
  }
  n(format: string) {
    const match = format.match(/\d+/g)
    if (!match) return ''
    const value = Number(match[0])
    return (format = format.replace(/number\:\d+/, getNumber(value).toString()))
  }
}

export default (format: string): string => {
  const number = new StampNumber()

  while (format.indexOf('number:') !== -1) {
    // number:##-##
    if (/number\:\d+-\d+/g.test(format)) {
      const match = format.match(/number\:\d+-\d+/g)
      if (match) {
        Array.from({ length: match.length }).forEach(() => {
          format = format.replace(/number\:\d+-\d+/, number.mn(format))
        })
      }
    }

    // number:#####
    else if (/number\:\d+/g.test(format)) {
      const match = format.match(/number\:\d+/g)
      if (match) {
        Array.from({ length: match.length }).forEach(() => {
          format = format.replace(/number\:\d+/, number.n(format))
        })
      }
    }

    // etc number:
    else {
      const match = format.match(/number\:/g)
      if (match) {
        Array.from({ length: match.length }).forEach(() => {
          format = format.replace(/number\:/, '')
        })
      }
    }
  }

  return format
}
