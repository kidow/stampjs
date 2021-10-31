const thing = (format: string): string => {
  const isIncluded = (text: string) => format.indexOf(text) !== -1

  if (isIncluded('thing:animal')) {
  }

  return format
}

export default thing
