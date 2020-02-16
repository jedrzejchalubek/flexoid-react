import React from 'react'

import * as Style from './flexoid.style'

const Block = ({ justify, children }) => {
  return <Style.Block justify={justify}>{children}</Style.Block>
}

const Cell = ({ size, children }) => {
  return <Style.Cell size={size}>{children}</Style.Cell>
}

export default {
  Block,
  Cell,
}
