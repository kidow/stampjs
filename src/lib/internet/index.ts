import { TLD, USER_AGENT } from '../../data'
import {
  getBoolean,
  getElement,
  getId,
  getNumber,
  getWord,
  matchArray,
  getUuid
} from '../../utils'

const internet = (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1

  if (isIncluded('internet:ip')) {
    const replaceValue = () =>
      `${getNumber(255)}.${getNumber(255)}.${getNumber(255)}.${getNumber(255)}`
    matchArray(format, 'internet:ip').forEach(() => {
      format = format.replace('internet:ip', replaceValue())
    })
  }
  if (isIncluded('internet:email')) {
    const replaceValue = () => `${getId()}@example.com`
    matchArray(format, 'internet:email').forEach(() => {
      format = format.replace('internet:email', replaceValue())
    })
  }
  if (isIncluded('internet:uuid')) {
    matchArray(format, 'internet:uuid').forEach(() => {
      format = format.replace('internet:uuid', getUuid())
    })
  }
  if (isIncluded('internet:domain')) {
    const replaceValue = () =>
      `${getWord(8, 4).toLowerCase()}.${getElement(TLD)}`
    matchArray(format, 'internet:domain').forEach(() => {
      format = format.replace('internet:domain', replaceValue())
    })
  }
  if (isIncluded('internet:url')) {
    const protocol = getElement(['http', 'https'])
    const replaceValue = () =>
      `${protocol}://${getBoolean() ? getWord(4) : ''}.${getWord(
        10,
        5
      )}.${getElement(TLD)}`
    matchArray(format, 'internet:url').forEach(() => {
      format = format.replace('internet:url', replaceValue())
    })
  }
  if (isIncluded('internet:user_agent')) {
    const replaceValue = () => getElement(USER_AGENT)
    matchArray(format, 'internet:user_agent').forEach(() => {
      format = format.replace('internet:user_agent', replaceValue())
    })
  }
  if (isIncluded('internet:tld')) {
    const replaceValue = () => getElement(TLD)
    matchArray(format, 'internet:tld').forEach(() => {
      format = format.replace('internet:tld', replaceValue())
    })
  }

  return format
}

export default internet
