import { css } from '@emotion/core'

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
  return css(mq ? `${mq} { ${declarations} }` : `${declarations}`)
}

export const mqRenderer = (property, value, declarations) =>
  mqResolver(property, value).map(mqProvider =>
    mqProvider((mq, value) => {
      if (value) {
        return mqCompose(mq, declarations(value))
      }
    })
  )

export const breakpointable = breakpoints => {
  return props => {
    const composition = {}

    Object.keys(props).map(prop => {
      let structure = {}

      props[prop].map((value, index) => {
        if (index === 0) {
          structure[prop] = value
        } else {
          if (breakpoints[index - 1]) {
            structure[breakpoints[index - 1]] = { [prop]: value }
          }
        }
      })

      composition[prop] = structure
    })

    return composition
  }
}
