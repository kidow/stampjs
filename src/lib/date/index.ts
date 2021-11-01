import { MONTH, WEEKDAY } from '../../data'
import { getDate, getElement, getNumberString, matchArray } from '../../utils'

export class StampDate {
  YYYYMMDD() {
    return getDate(new Date(new Date().getFullYear() - 100, 12, 31)).slice(
      0,
      10
    )
  }
  timeLocal() {
    return getDate(new Date(new Date().getFullYear() - 100, 12, 31)).slice(
      0,
      16
    )
  }
  hour() {
    return getNumberString(24)
  }
  minute() {
    return getNumberString(60)
  }
  second() {
    return getNumberString(60)
  }
  weekday() {
    return getElement(WEEKDAY)
  }
  monthName() {
    return getElement(MONTH)
  }
  month() {
    return getNumberString(12)
  }
  year() {
    return getNumberString(
      new Date().getFullYear(),
      new Date().getFullYear() - 100
    )
  }
  timestamp() {
    return getNumberString(new Date().getTime(), 1000000000000)
  }
  millisecond() {
    return new Date().getMilliseconds().toString()
  }
  ampm() {
    return getElement(['am', 'pm'])
  }
}

export default (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1
  const date = new StampDate()

  if (isIncluded('date:YYYY-MM-DD')) {
    matchArray(format, 'date:YYYY-MM-DD').forEach(() => {
      format = format.replace('date:YYYY-MM-DD', date.YYYYMMDD())
    })
  }
  if (isIncluded('date:time-local')) {
    matchArray(format, 'date:time-local').forEach(() => {
      format = format.replace('date:time-local', date.timeLocal())
    })
  }
  if (isIncluded('date:hour')) {
    matchArray(format, 'date:hour').forEach(() => {
      format = format.replace('date:hour', date.hour())
    })
  }
  if (isIncluded('date:minute')) {
    matchArray(format, 'date:minute').forEach(() => {
      format = format.replace('date:minute', date.minute())
    })
  }
  if (isIncluded('date:second')) {
    matchArray(format, 'date:second').forEach(() => {
      format = format.replace('date:second', date.second())
    })
  }
  if (isIncluded('date:weekday')) {
    matchArray(format, 'date:weekday').forEach(() => {
      format = format.replace('date:WEEKDAY', date.weekday())
    })
  }
  if (isIncluded('date:month:name')) {
    matchArray(format, 'date:month:name').forEach(() => {
      format = format.replace('date:month:name', date.monthName())
    })
  }
  if (isIncluded('date:month')) {
    matchArray(format, 'date:month').forEach(() => {
      format = format.replace('date:month', date.month())
    })
  }
  if (isIncluded('date:year')) {
    matchArray(format, 'date:year').forEach(() => {
      format = format.replace('date:year', date.year())
    })
  }
  if (isIncluded('date:timestamp')) {
    matchArray(format, 'date:timestamp').forEach(() => {
      format = format.replace('date:timestamp', date.timestamp())
    })
  }
  if (isIncluded('date:millisecond')) {
    matchArray(format, 'date:millisecond').forEach(() => {
      format = format.replace('date:millisecond', date.millisecond)
    })
  }
  if (isIncluded('date:ampm')) {
    matchArray(format, 'date:ampm').forEach(() => {
      format = format.replace('date:ampm', date.ampm())
    })
  }

  return format
}
