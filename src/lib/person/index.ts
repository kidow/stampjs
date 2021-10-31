import { FIRST_NAME, JOB, LAST_NAME_FEMALE, LAST_NAME_MALE } from '../../data'
import { getElement, getNumberString, matchArray } from '../../utils'

const person = (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1

  if (isIncluded('person:first_name')) {
    const replaceValue = () => getElement(FIRST_NAME)
    matchArray(format, 'person:first_name').forEach(() => {
      format = format.replace('person:first_name', replaceValue())
    })
  }
  if (isIncluded('person:last_name:w')) {
    const replaceValue = () => getElement(LAST_NAME_FEMALE)
    matchArray(format, 'person:last_name:w').forEach(() => {
      format = format.replace('person:last_name:w', replaceValue())
    })
  }
  if (isIncluded('person:last_name:m')) {
    const replaceValue = () => getElement(LAST_NAME_MALE)
    matchArray(format, 'person:last_name:w').forEach(() => {
      format = format.replace('person:last_name:w', replaceValue())
    })
  }
  if (isIncluded('person:last_name')) {
    const replaceValue = () =>
      getElement([...LAST_NAME_FEMALE, ...LAST_NAME_MALE])
    matchArray(format, 'person:last_name:w').forEach(() => {
      format = format.replace('person:last_name:w', replaceValue())
    })
  }
  if (isIncluded('person:phone:format')) {
    const r = () => getNumberString(9)
    const replaceValue = () =>
      `010-${r()}${r()}${r()}${r()}-${r()}${r()}${r()}${r()}`
    matchArray(format, 'person:phone:format').forEach(() => {
      format = format.replace('person:phone:format', replaceValue())
    })
  }
  if (isIncluded('person:phone')) {
    const r = () => getNumberString(9)
    const replaceValue = () =>
      `010${r()}${r()}${r()}${r()}${r()}${r()}${r()}${r()}`
    matchArray(format, 'person:phone').forEach(() => {
      format = format.replace('person:phone', replaceValue())
    })
  }
  if (isIncluded('person:age')) {
    const replaceValue = () => getNumberString(65, 19)
    matchArray(format, 'person:age').forEach(() => {
      format = format.replace('person:age', replaceValue())
    })
  }
  if (isIncluded('person:gender')) {
    matchArray(format, 'person:gender').forEach(() => {
      format = format.replace('person:gender', getElement(['남', '여']))
    })
  }
  if (isIncluded('person:name')) {
    const replaceValue = () =>
      `${getElement(FIRST_NAME)}${getElement([
        ...LAST_NAME_FEMALE,
        ...LAST_NAME_MALE
      ])}`
    matchArray(format, 'person:name').forEach(() => {
      format = format.replace('person:name', replaceValue())
    })
  }
  if (isIncluded('person:job')) {
    matchArray(format, 'person:job').forEach(() => {
      format = format.replace('person:job', getElement(JOB))
    })
  }

  return format
}

export default person
