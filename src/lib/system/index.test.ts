import { StampSystem } from '.'

describe('system format test', () => {
  const system = new StampSystem()
  test('system:mime_type', () => {
    console.log(`system:mime_type => ${system.mimeType()}`)
  })
  test('system:file_extension', () => {
    console.log(`system:file_extension => ${system.fileExtension()}`)
  })
})
