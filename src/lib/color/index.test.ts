import stamp from '../..'

describe('color format test', () => {
  test('color:hex', () => {
    console.log(`color:hex => ${stamp('color:hex')}`)
  })
  test('color:rgba', () => {
    console.log(`color:rgba => ${stamp('color:rgba')}`)
  })
  test('color:rgb', () => {
    console.log(`color:rgb => ${stamp('color:rgb')}`)
  })
  test('color:shorthex', () => {
    console.log(`color:shorthex => ${stamp('color:shorthex')}`)
  })
  test('color:name', () => {
    console.log(`color:name => ${stamp('color:name')}`)
  })
  test('color', () => {
    console.log(`color => ${stamp('color')}`)
  })
})
