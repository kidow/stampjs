import { MONTH, WEEKDAY } from '../../data'
import {
  getDate,
  getElement,
  getNumber,
  getNumberString,
  matchArray
} from '../../utils'

const date = (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1

  if (isIncluded('date:YYYY-MM-DD')) {
    const replaceValue = () =>
      getDate(new Date(new Date().getFullYear() - 100, 12, 31)).slice(0, 10)
    matchArray(format, 'date:YYYY-MM-DD').forEach(() => {
      format = format.replace('date:YYYY-MM-DD', replaceValue())
    })
  }
  if (isIncluded('date:time-local')) {
    const replaceValue = () =>
      getDate(new Date(new Date().getFullYear() - 100, 12, 31)).slice(0, 16)
    matchArray(format, 'date:time-local').forEach(() => {
      format = format.replace('date:time-local', replaceValue())
    })
  }
  if (isIncluded('date:hour')) {
    matchArray(format, 'date:hour').forEach(() => {
      format = format.replace('date:hour', getNumberString(24))
    })
  }
  if (isIncluded('date:minute')) {
    matchArray(format, 'date:minute').forEach(() => {
      format = format.replace('date:minute', getNumberString(60))
    })
  }
  if (isIncluded('date:second')) {
    matchArray(format, 'date:second').forEach(() => {
      format = format.replace('date:second', getNumberString(60))
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
    const replaceValue = () =>
      getNumberString(new Date().getTime(), 1000000000000)
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
