import { css } from '@emotion/core'
import styled from '@emotion/styled'

const isPrimitive = value => {
  return typeof value === 'number' || typeof value === 'string'
}

const isObject = value => {
  return typeof value === 'object'
}

const mqResolver = (property, block) => {
  console.log(block)
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

const mqCompose = (mq, declarations) => {
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

export const Block = styled.div`
  display: flex;

  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
`

export const Cell = styled.div`
  flex: 1;
  max-width: 100%;

  ${({ width }) =>
    mqResolver('width', width).map(mqRender =>
      mqRender((mq, value) =>
        mqCompose(
          mq,
          `
            flex-basis: ${value * 100}%;
            max-width: ${value * 100}%;
          `
        )
      )
    )}
`
