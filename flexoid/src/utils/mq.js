import { css } from '@emotion/core'

import { isObject, isPrimitive } from './unit'

export const mqResolver = (property, rules) => {
  if (isObject(rules)) {
    return Object.keys(rules).map(mq => {
      const value = rules[mq]

      if (isPrimitive(value)) {
        return mqProvider => mqProvider(0, value)
      }

      if (isObject(value)) {
        return mqProvider => mqProvider(mq, value[property])
      }
    })
  }

  if (isPrimitive(rules)) {
    return [mqProvider => mqProvider(0, rules)]
  }
}

export const mqCompose = (mq, declarations) => {
  return css(mq ? `${mq} { ${declarations} }` : `${declarations}`)
}

export const mqRenderer = (property, value, declarations) =>
  mqResolver(property, value).map(mqProvider =>
    mqProvider((mq, value) => mqCompose(mq, declarations(value)))
  )
