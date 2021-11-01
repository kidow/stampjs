import { StampPerson } from '.'

describe('person format test', () => {
  const person = new StampPerson()
  test('person:first_name', () => {
    console.log(`person:first_name => ${person.firstName()}`)
  })
  test('person:last_name:w', () => {
    console.log(`person:last_name:w => ${person.lastNameFemale()}`)
  })
  test('person:last_name:m', () => {
    console.log(`person:last_name:m => ${person.lastNameMale()}`)
  })
  test('person:last_name', () => {
    console.log(`person:last_name => ${person.lastName()}`)
  })
  test('person:phone:format', () => {
    console.log(`person:phone:format => ${person.phoneFormat()}`)
  })
  test('person:phone', () => {
    console.log(`person:phone => ${person.phone()}`)
  })
  test('person:age', () => {
    console.log(`person:age => ${person.age()}`)
  })
  test('person:gender', () => {
    console.log(`person:gender => ${person.gender()}`)
  })
  test('person:name', () => {
    console.log(`person:name => ${person.name()}`)
  })
  test('person:job', () => {
    console.log(`person:job => ${person.job()}`)
  })
})
