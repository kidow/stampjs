import { StampColor } from '.'

describe('color format test', () => {
  const color = new StampColor()
  test('color:hex', () => {
    console.log(`color:hex => ${color.hex()}`)
  })
  test('color:rgba', () => {
    console.log(`color:rgba => ${color.rgba()}`)
  })
  test('color:rgb', () => {
    console.log(`color:rgb => ${color.rgb()}`)
  })
  test('color:shorthex', () => {
    console.log(`color:shorthex => ${color.shorthex()}`)
  })
  test('color:name', () => {
    console.log(`color:name => ${color.name()}`)
  })
  test('color', () => {
    console.log(`color => ${color.default()}`)
  })
})
