export const isPrimitive = value => {
  return typeof value === 'number' || typeof value === 'string'
}

export const isObject = value => {
  return typeof value === 'object'
}
