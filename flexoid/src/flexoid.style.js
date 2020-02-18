import styled from '@emotion/styled'

import { mqRenderer } from './utils/mq'

export const Flex = styled.div`
  display: flex;

  ${({ justify }) =>
    justify &&
    mqRenderer(
      'justify',
      justify,
      value => `
        justify-content: ${value};
      `
    )}

  ${({ align }) =>
    align &&
    mqRenderer(
      'align',
      align,
      value => `
        align-items: ${value};
      `
    )}

  ${({ direction }) =>
    direction &&
    mqRenderer(
      'direction',
      direction,
      value => `
        flex-direction: ${value};
      `
    )}
`

export const Box = styled.div`
  flex: 1;
  max-width: 100%;

  ${({ width }) =>
    width &&
    mqRenderer(
      'width',
      width,
      value => `
        flex-basis: ${value * 100}%;
        max-width: ${value * 100}%;
      `
    )}
`
