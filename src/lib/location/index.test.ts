import stamp from "../.."

describe('location format test', () => {
  test('location:address', () => {
    console.log(`location:address => ${stamp('location:address')}`)
  })
  test('location:city', () => {
    console.log(`location:city => ${stamp('location:city')}`)
  })
  test('location:direction', () => {
    console.log(`location:direction => ${stamp('location:direction')}`)
  })
  test('location:latitude', () => {
    console.log(`location:latitude => ${stamp('location:latitude')}`)
  })
  test('location:longitude', () => {
    console.log(`location:longitude => ${stamp('location:longitude')}`)
  })
  test('location:zip_code', () => {
    console.log(`location:zip_code => ${stamp('location:zip_code')}`)
  })
})
