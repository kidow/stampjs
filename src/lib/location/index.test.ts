import { StampLocation } from '.'

describe('location format test', () => {
  const location = new StampLocation()
  test('location:address', () => {
    console.log(`location:address => ${location.address()}`)
  })
  test('location:city', () => {
    console.log(`location:city => ${location.city()}`)
  })
  test('location:direction', () => {
    console.log(`location:direction => ${location.direction()}`)
  })
  test('location:latitude', () => {
    console.log(`location:latitude => ${location.latitude()}`)
  })
  test('location:longitude', () => {
    console.log(`location:longitude => ${location.longitude()}`)
  })
  test('location:zip_code', () => {
    console.log(`location:zip_code => ${location.zipCode()}`)
  })
})
