export const toCyrillicKebabCase = (str: string) => {
  // @ts-ignore
  return str
    .match(/[А-Я]{2,}(?=[А-Я][а-я]+[0-9]*|\b)|[А-Я]?[а-я]+[0-9]*|[А-Я]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-')
}