import { StampNumber } from '.'

describe('number format test', () => {
  const number = new StampNumber()
  test('number:m-n', () => {
    console.log(`number:m-n => ${number.mn('number:1-100')}`)
  })
  test('number:n', () => {
    console.log(`number:n => ${number.n('number:100')}`)
  })
})
