import { MONTH, WEEKDAY } from '../../data'
import { getElement, getNumber, getNumberString, matchArray } from '../../utils'

const date = (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1

  if (isIncluded('date:YYYY-MM-DD')) {
    const replaceValue = () => {
      const year = getNumber(new Date().getFullYear(), 1970)
      const month = getNumberString(12, 1)
      let day = ''
      if (['01', '03', '05', '07', '08', '10', '12'].indexOf(month) !== -1)
        day = getNumberString(31, 1)
      else if (month === '02') day = getNumberString(28, 1)
      else if (['04', '06', '09', '11'].indexOf(month) !== -1)
        day = getNumberString(30, 1)

      return `${year}-${month}-${day}`
    }
    matchArray(format, 'date:YYYY-MM-DD').forEach(() => {
      format = format.replace('date:YYYY-MM-DD', replaceValue())
    })
  }
  if (isIncluded('date:time-local')) {
    const year = () =>
      getNumberString(new Date().getFullYear(), new Date().getFullYear() - 100)
    const month = getNumberString(12)
    const day = getNumberString(28)
    const minute = getNumberString(60)
    const second = getNumberString(60)
    const replaceValue = `${year}-${month}-${day}T${minute}:${second}`
    matchArray(format, 'date:time-local').forEach(() => {
      format = format.replace('date:time-local', replaceValue)
    })
  }
  if (isIncluded('date:hour')) {
    matchArray(format, 'date:hour').forEach(() => {
      format = format.replace('date:hour', getNumber(24).toString())
    })
  }
  if (isIncluded('date:minute')) {
    matchArray(format, 'date:minute').forEach(() => {
      format = format.replace('date:minute', getNumber(60).toString())
    })
  }
  if (isIncluded('date:second')) {
    matchArray(format, 'date:second').forEach(() => {
      format = format.replace('date:second', getNumber(60).toString())
    })
  }
  if (isIncluded('date:weekday')) {
    matchArray(format, 'date:weekday').forEach(() => {
      format = format.replace('date:WEEKDAY', getElement(WEEKDAY))
    })
  }
  if (isIncluded('date:month:name')) {
    matchArray(format, 'date:month:name').forEach(() => {
      format = format.replace('date:month:name', getElement(MONTH))
    })
  }
  if (isIncluded('date:month')) {
    matchArray(format, 'date:month').forEach(() => {
      format = format.replace('date:month', getNumberString(12))
    })
  }
  if (isIncluded('date:year')) {
    const replaceValue = () =>
      getNumberString(new Date().getFullYear(), new Date().getFullYear() - 100)
    matchArray(format, 'date:year').forEach(() => {
      format = format.replace('date:year', replaceValue())
    })
  }
  if (isIncluded('date:timestamp')) {
    const replaceValue = () => new Date().getTime().toString()
    matchArray(format, 'date:timestamp').forEach(() => {
      format = format.replace('date:timestamp', replaceValue())
    })
  }
  if (isIncluded('date:millisecond')) {
    const replaceValue = () => new Date().getMilliseconds().toString()
    matchArray(format, 'date:millisecond').forEach(() => {
      format = format.replace('date:millisecond', replaceValue())
    })
  }
  if (isIncluded('date:ampm')) {
    const ampm = ['am', 'pm']
    const replaceValue = () => ampm[getNumber(1)]
    matchArray(format, 'date:ampm').forEach(() => {
      format = format.replace('date:ampm', replaceValue())
    })
  }

  return format
}

export default date
