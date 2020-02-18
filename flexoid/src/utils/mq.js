import { isObject, isPrimitive } from './unit'

export const mqResolver = (property, rules) => {
  if (isObject(rules)) {
    return Object.keys(rules).map(mq => {
      const value = rules[mq]

      if (value && isPrimitive(value)) {
        return mqProvider => mqProvider(0, value)
      }

      if (value && isObject(value)) {
        return mqProvider => mqProvider(mq, value[property])
      }

      return mqProvider => mqProvider(mq, null)
    })
  }

  if (isPrimitive(rules)) {
    return [mqProvider => mqProvider(0, rules)]
  }
}

export const mqCompose = (mq, declarations) => {
  return mq ? `${mq} { ${declarations} }` : `${declarations}`
}

export const mqRenderer = (property, value, declarations) => {
  return mqResolver(property, value).map(mqProvider => {
    return mqProvider((mq, value) => {
      if (value) {
        return mqCompose(mq, declarations(value))
      }
    })
  })
}
