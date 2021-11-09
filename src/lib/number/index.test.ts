import stamp from "../.."

describe('number format test', () => {
  test('number:m-n', () => {
    console.log(`number:m-n => ${stamp('number:1-100')}`)
  })
  test('number:n', () => {
    console.log(`number:n => ${stamp('number:100')}`)
  })
})
