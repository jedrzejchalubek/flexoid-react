import { css } from '@emotion/core'

import { isObject, isPrimitive } from './unit'

export const mqResolver = (property, block) => {
  if (isObject(block)) {
    return block.map(rules => {
      return Object.keys(rules).map(mq => {
        const value = rules[mq]

        if (isPrimitive(value)) {
          return mqRender => mqRender(0, value)
        }

        if (isObject(value)) {
          return mqRender => mqRender(mq, value[property])
        }
      })
    })[0]
  }

  if (isPrimitive(block)) {
    return [mqRender => mqRender(0, block)]
  }
}

export const mqCompose = (mq, declarations) => {
  return mq
    ? css`
        ${mq} {
          ${declarations}
        }
      `
    : css`
        ${declarations}
      `
}
