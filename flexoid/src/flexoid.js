import React from 'react'

import * as Style from './flexoid.style'

const Block = ({ justify, children }) => {
  return <Style.Block justify={justify}>{children}</Style.Block>
}

const Box = ({ width, children }) => {
  return <Style.Box width={width}>{children}</Style.Box>
}

export default {
  Block,
  Box,
}
