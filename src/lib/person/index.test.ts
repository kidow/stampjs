import stamp from "../.."

describe('person format test', () => {
  test('person:first_name', () => {
    console.log(`person:first_name => ${stamp('person:first_name')}`)
  })
  test('person:last_name:w', () => {
    console.log(`person:last_name:w => ${stamp('person:last_name:w')}`)
  })
  test('person:last_name:m', () => {
    console.log(`person:last_name:m => ${stamp('person:last_name:m')}`)
  })
  test('person:last_name', () => {
    console.log(`person:last_name => ${stamp('person:last_name')}`)
  })
  test('person:phone:format', () => {
    console.log(`person:phone:format => ${stamp('person:phone:format')}`)
  })
  test('person:phone', () => {
    console.log(`person:phone => ${stamp('person:phone')}`)
  })
  test('person:age', () => {
    console.log(`person:age => ${stamp('person:age')}`)
  })
  test('person:gender', () => {
    console.log(`person:gender => ${stamp('person:gender')}`)
  })
  test('person:name', () => {
    console.log(`person:name => ${stamp('person:name')}`)
  })
  test('person:job', () => {
    console.log(`person:job => ${stamp('person:job')}`)
  })
})
