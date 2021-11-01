import { FIRST_NAME, JOB, LAST_NAME_FEMALE, LAST_NAME_MALE } from '../../data'
import { getElement, getNumber, matchArray } from '../../utils'

export class StampPerson {
  firstName() {
    return getElement(FIRST_NAME)
  }
  lastNameFemale() {
    return getElement(LAST_NAME_FEMALE)
  }
  lastNameMale() {
    return getElement(LAST_NAME_MALE)
  }
  lastName() {
    return getElement([...LAST_NAME_FEMALE, ...LAST_NAME_MALE])
  }
  phoneFormat() {
    const r = () => getNumber(9).toString()
    return `010-${r()}${r()}${r()}${r()}-${r()}${r()}${r()}${r()}`
  }
  phone() {
    const r = () => getNumber(9).toString()
    return `010${r()}${r()}${r()}${r()}${r()}${r()}${r()}${r()}`
  }
  age() {
    return getNumber(65, 19).toString()
  }
  gender() {
    return getElement(['남', '여'])
  }
  name() {
    return `${getElement(FIRST_NAME)}${getElement([
      ...LAST_NAME_FEMALE,
      ...LAST_NAME_MALE
    ])}`
  }
  job() {
    return getElement(JOB)
  }
}

export default (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1
  const person = new StampPerson()

  if (isIncluded('person:first_name')) {
    matchArray(format, 'person:first_name').forEach(() => {
      format = format.replace('person:first_name', person.firstName())
    })
  }
  if (isIncluded('person:last_name:w')) {
    matchArray(format, 'person:last_name:w').forEach(() => {
      format = format.replace('person:last_name:w', person.lastNameFemale())
    })
  }
  if (isIncluded('person:last_name:m')) {
    matchArray(format, 'person:last_name:w').forEach(() => {
      format = format.replace('person:last_name:w', person.lastNameMale())
    })
  }
  if (isIncluded('person:last_name')) {
    matchArray(format, 'person:last_name').forEach(() => {
      format = format.replace('person:last_name:w', person.lastName())
    })
  }
  if (isIncluded('person:phone:format')) {
    matchArray(format, 'person:phone:format').forEach(() => {
      format = format.replace('person:phone:format', person.phoneFormat())
    })
  }
  if (isIncluded('person:phone')) {
    matchArray(format, 'person:phone').forEach(() => {
      format = format.replace('person:phone', person.phone())
    })
  }
  if (isIncluded('person:age')) {
    matchArray(format, 'person:age').forEach(() => {
      format = format.replace('person:age', person.age())
    })
  }
  if (isIncluded('person:gender')) {
    matchArray(format, 'person:gender').forEach(() => {
      format = format.replace('person:gender', person.gender())
    })
  }
  if (isIncluded('person:name')) {
    matchArray(format, 'person:name').forEach(() => {
      format = format.replace('person:name', person.name())
    })
  }
  if (isIncluded('person:job')) {
    matchArray(format, 'person:job').forEach(() => {
      format = format.replace('person:job', person.job())
    })
  }

  return format
}
