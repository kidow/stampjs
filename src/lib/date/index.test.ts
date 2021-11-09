import stamp from "../.."

describe('date format test', () => {
  test('date:YYYY-MM-DD', () => {
    console.log(`date:YYYY-MM-DD => ${stamp('date:YYYY-MM-DD')}`)
  })
  test('date:time-local', () => {
    console.log(`date:time-local => ${stamp('date:time-local')}`)
  })
  test('date:hour', () => {
    console.log(`date:hour => ${stamp('date:hour')}`)
  })
  test('date:minute', () => {
    console.log(`date:minute => ${stamp('date:minute')}`)
  })
  test('date:second', () => {
    console.log(`date:second => ${stamp('date:second')}`)
  })
  test('date:weekday', () => {
    console.log(`date:weekday => ${stamp('date:weekday')}`)
  })
  test('date:month:name', () => {
    console.log(`date:month:name => ${stamp('date:month:name')}`)
  })
  test('date:month', () => {
    console.log(`date:month => ${stamp('date:month')}`)
  })
  test('date:year', () => {
    console.log(`date:year => ${stamp('date:year')}`)
  })
  test('date:timestamp', () => {
    console.log(`date:timestamp => ${stamp('date:timestamp')}`)
  })
  test('date:millisecond', () => {
    console.log(`date:millisecond => ${stamp('date:millisecond')}`)
  })
  test('date:ampm', () => {
    console.log(`date:ampm => ${stamp('date:ampm')}`)
  })
})
