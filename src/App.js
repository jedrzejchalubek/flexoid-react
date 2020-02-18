import React from 'react'
import Flexoid, { breakpointable } from '../flexoid'

import BREAKPOINTS from './settings/breakpoints'

const mq = breakpointable(Object.values(BREAKPOINTS))

export default function App() {
  return (
    <div>
      <Flexoid.Flex
        {...mq({
          justify: [null, 'flex-end', 'center'],
          direction: [null, null, 'row-reverse'],
        })}
      >
        <Flexoid.Box width={1 / 24}>1</Flexoid.Box>
        <Flexoid.Box
          width={{
            width: 1 / 24,
            [BREAKPOINTS.sm]: { width: 2 / 24 },
            [BREAKPOINTS.md]: { width: 3 / 24 },
            [BREAKPOINTS.lg]: { width: 4 / 24 },
          }}
        >
          2
        </Flexoid.Box>
        <Flexoid.Box
          {...mq({
            width: [3 / 24, 4 / 24, 5 / 24, 6 / 24],
          })}
        >
          3
        </Flexoid.Box>
      </Flexoid.Flex>
    </div>
  )
}
