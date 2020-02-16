import React from 'react'
import Flexoid from '../flexoid'

import BREAKPOINTS from './settings/breakpoints'

export default function App() {
  return (
    <div>
      <Flexoid.Block
        justify={{
          [BREAKPOINTS.sm]: { justify: 'center' },
          [BREAKPOINTS.md]: { justify: 'flex-end' },
        }}
      >
        <Flexoid.Box
          width={{
            width: 1 / 12,
            [BREAKPOINTS.sm]: { width: 2 / 12 },
            [BREAKPOINTS.md]: { width: 3 / 12 },
            [BREAKPOINTS.lg]: { width: 4 / 12 },
          }}
        >
          1
        </Flexoid.Box>
        <Flexoid.Box
          width={{
            width: 2 / 12,
            [BREAKPOINTS.sm]: { width: 3 / 12 },
            [BREAKPOINTS.md]: { width: 4 / 12 },
            [BREAKPOINTS.lg]: { width: 5 / 12 },
          }}
        >
          2
        </Flexoid.Box>
        <Flexoid.Box width={2 / 12}>3</Flexoid.Box>
      </Flexoid.Block>
    </div>
  )
}
