import React from 'react'

import * as Style from './flexoid.style'

const Flex = ({ justify, align, direction, children }) => {
  return (
    <Style.Flex justify={justify} align={align} direction={direction}>
      {children}
    </Style.Flex>
  )
}

const Box = ({ width, children }) => {
  return <Style.Box width={width}>{children}</Style.Box>
}

export default {
  Flex,
  Box,
}
