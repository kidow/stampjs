import stamp from "../.."

describe('system format test', () => {
  test('system:mime_type', () => {
    console.log(`system:mime_type => ${stamp('system:mime_type')}`)
  })
  test('system:file_extension', () => {
    console.log(`system:file_extension => ${stamp('system:file_extension')}`)
  })
})
