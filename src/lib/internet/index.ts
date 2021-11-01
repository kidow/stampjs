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

export class StampInternet {
  ip() {
    return `${getNumber(255)}.${getNumber(255)}.${getNumber(255)}.${getNumber(
      255
    )}`
  }
  email() {
    return `${getId()}@example.com`
  }
  uuid() {
    return getUuid()
  }
  domain() {
    return `${getWord(8, 4).toLowerCase()}.${getElement(TLD)}`
  }
  url() {
    const protocol = getElement(['http', 'https'])
    return `${protocol}://${
      getBoolean() ? `${getWord(4).toLowerCase()}.` : ''
    }${getWord(10, 5).toLowerCase()}.${getElement(TLD)}`
  }
  userAgent() {
    return getElement(USER_AGENT)
  }
  tld() {
    return getElement(TLD)
  }
}

export default (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1
  const internet = new StampInternet()

  if (isIncluded('internet:ip')) {
    matchArray(format, 'internet:ip').forEach(() => {
      format = format.replace('internet:ip', internet.ip())
    })
  }
  if (isIncluded('internet:email')) {
    matchArray(format, 'internet:email').forEach(() => {
      format = format.replace('internet:email', internet.email())
    })
  }
  if (isIncluded('internet:uuid')) {
    matchArray(format, 'internet:uuid').forEach(() => {
      format = format.replace('internet:uuid', internet.uuid())
    })
  }
  if (isIncluded('internet:domain')) {
    matchArray(format, 'internet:domain').forEach(() => {
      format = format.replace('internet:domain', internet.domain())
    })
  }
  if (isIncluded('internet:url')) {
    matchArray(format, 'internet:url').forEach(() => {
      format = format.replace('internet:url', internet.url())
    })
  }
  if (isIncluded('internet:user_agent')) {
    matchArray(format, 'internet:user_agent').forEach(() => {
      format = format.replace('internet:user_agent', internet.userAgent())
    })
  }
  if (isIncluded('internet:tld')) {
    matchArray(format, 'internet:tld').forEach(() => {
      format = format.replace('internet:tld', internet.tld())
    })
  }

  return format
}
