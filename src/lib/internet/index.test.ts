import { StampInternet } from '.'

describe('internet format test', () => {
  const internet = new StampInternet()
  test('internet:ip', () => {
    console.log(`internet:ip => ${internet.ip()}`)
  })
  test('internet:email', () => {
    console.log(`internet:email => ${internet.email()}`)
  })
  test('internet:uuid', () => {
    console.log(`internet:uuid => ${internet.uuid()}`)
  })
  test('internet:domain', () => {
    console.log(`internet:domain => ${internet.domain()}`)
  })
  test('internet:url', () => {
    console.log(`internet:url => ${internet.url()}`)
  })
  test('internet:user_agent', () => {
    console.log(`internet:user_agent => ${internet.userAgent()}`)
  })
  test('internet:tld', () => {
    console.log(`internet:tld => ${internet.tld()}`)
  })
})
