import { StampImage } from '.'

describe('image format test', () => {
  const image = new StampImage()
  test('image:avatar', () => {
    console.log(`image:avatar => ${image.avatar()}`)
  })
})
