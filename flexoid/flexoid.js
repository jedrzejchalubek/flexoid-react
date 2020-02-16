import React from 'react'

import * as Style from './flexoid.style'

const Block = ({ justify, children }) => {
  return <Style.Block justify={justify}>{children}</Style.Block>
}

const Cell = ({ width, children }) => {
  return <Style.Cell width={width}>{children}</Style.Cell>
}

export default {
  Block,
  Cell,
}
