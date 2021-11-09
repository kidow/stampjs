import stamp from "../.."

describe('internet format test', () => {
  test('internet:ip', () => {
    console.log(`internet:ip => ${stamp('internet:ip')}`)
  })
  test('internet:email', () => {
    console.log(`internet:email => ${stamp('internet:email')}`)
  })
  test('internet:uuid', () => {
    console.log(`internet:uuid => ${stamp('internet:uuid')}`)
  })
  test('internet:domain', () => {
    console.log(`internet:domain => ${stamp('internet:domain')}`)
  })
  test('internet:url', () => {
    console.log(`internet:url => ${stamp('internet:url')}`)
  })
  test('internet:user_agent', () => {
    console.log(`internet:user_agent => ${stamp('internet:user_agent')}`)
  })
  test('internet:tld', () => {
    console.log(`internet:tld => ${stamp('internet:tld')}`)
  })
})
