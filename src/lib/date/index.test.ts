import { StampDate } from '.'

describe('date format test', () => {
  const date = new StampDate()

  test('date:YYYY-MM-DD', () => {
    console.log(`date:YYYY-MM-DD => ${date.YYYYMMDD()}`)
  })
  test('date:time-local', () => {
    console.log(`date:time-local => ${date.timeLocal()}`)
  })
  test('date:hour', () => {
    console.log(`date:hour => ${date.hour()}`)
  })
  test('date:minute', () => {
    console.log(`date:minute => ${date.minute()}`)
  })
  test('date:second', () => {
    console.log(`date:second => ${date.second()}`)
  })
  test('date:weekday', () => {
    console.log(`date:weekday => ${date.weekday()}`)
  })
  test('date:month:name', () => {
    console.log(`date:month:name => ${date.monthName()}`)
  })
  test('date:month', () => {
    console.log(`date:month => ${date.month()}`)
  })
  test('date:year', () => {
    console.log(`date:year => ${date.year()}`)
  })
  test('date:timestamp', () => {
    console.log(`date:timestamp => ${date.timestamp()}`)
  })
  test('date:millisecond', () => {
    console.log(`date:millisecond => ${date.millisecond()}`)
  })
  test('date:ampm', () => {
    console.log(`date:ampm => ${date.ampm()}`)
  })
})
