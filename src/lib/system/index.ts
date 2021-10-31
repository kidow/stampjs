import { FILE_EXTENSION, MIME_TYPE } from '../../data'
import { getElement, matchArray } from '../../utils'

const system = (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1

  if (isIncluded('system:mime_type')) {
    matchArray(format, 'system:mime_type').forEach(() => {
      format = format.replace('system:mime_type', getElement(MIME_TYPE))
    })
  }
  if (isIncluded('system:file_extension')) {
    matchArray(format, 'system:file_extension').forEach(() => {
      format = format.replace(
        'system:file_extension',
        getElement(FILE_EXTENSION)
      )
    })
  }

  return format
}

export default system
