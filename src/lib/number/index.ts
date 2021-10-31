import { getNumber } from '../../utils'

const number = (format: string): string => {
  while (format.indexOf('number:') !== -1) {
    // number:##-##
    if (/number\:\d+-\d+/g.test(format)) {
      const match = format.match(/number\:\d+-\d+/g)
      const formatArr = format.match(/\d+-\d+/g)
      if (match && formatArr) {
        const arr = formatArr[0].split('-').map(Number)
        Array.from({ length: match.length }).forEach(() => {
          format = format.replace(
            /number\:\d+-\d+/g,
            getNumber(Math.max(...arr), Math.min(...arr)).toString()
          )
        })
      }
    }

    // number:#####
    if (/number\:\d+/g.test(format)) {
      const match = format.match(/number\:\d+/g)
      const formatArr = format.match(/\d+/g)
      if (match && formatArr) {
        const value = Number(formatArr[0])
        Array.from({ length: match.length }).forEach(() => {
          format = format.replace(/number\:\d+/g, getNumber(value).toString())
        })
      }
    }
  }

  return format
}

export default number
