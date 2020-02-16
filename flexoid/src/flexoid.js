import React from 'react'

import * as Style from './flexoid.style'

const Flex = ({ justify, children }) => {
  return <Style.Flex justify={justify}>{children}</Style.Flex>
}

const Box = ({ width, children }) => {
  return <Style.Box width={width}>{children}</Style.Box>
}

export default {
  Flex,
  Box,
}
