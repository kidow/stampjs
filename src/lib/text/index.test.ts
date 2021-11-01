import { StampText } from '.'

describe('text format test', () => {
  const text = new StampText()
  test('text:character', () => {
    console.log(`text:character => ${text.character()}`)
  })
})
