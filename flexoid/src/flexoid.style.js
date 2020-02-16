import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { mqResolver, mqCompose } from './utils/mq'

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

  ${({ size }) =>
    mqResolver('size', size).map(mqRender =>
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
