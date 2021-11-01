import { FILE_EXTENSION, MIME_TYPE } from '../../data'
import { getElement, matchArray } from '../../utils'

export class StampSystem {
  mimeType() {
    return getElement(MIME_TYPE)
  }
  fileExtension() {
    return getElement(FILE_EXTENSION)
  }
}

export default (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1
  const system = new StampSystem()

  if (isIncluded('system:mime_type')) {
    matchArray(format, 'system:mime_type').forEach(() => {
      format = format.replace('system:mime_type', system.mimeType())
    })
  }
  if (isIncluded('system:file_extension')) {
    matchArray(format, 'system:file_extension').forEach(() => {
      format = format.replace('system:file_extension', system.fileExtension())
    })
  }

  return format
}
