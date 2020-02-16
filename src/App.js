import React from 'react'
import facepaint from 'facepaint'

import Flexoid from '../flexoid/flexoid'

const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)',
])

export default function App() {
  return (
    <div>
      <Flexoid.Block justify="flex-end">
        <Flexoid.Cell
          width={mq({
            width: [1 / 12, 2 / 12, 3 / 12, 4 / 12],
          })}
        >
          1
        </Flexoid.Cell>
        <Flexoid.Cell
          width={[
            {
              width: 2 / 12,
              '@media(min-width: 420px)': { width: 3 / 12 },
              '@media(min-width: 920px)': { width: 4 / 12 },
              '@media(min-width: 1120px)': { width: 5 / 12 },
            },
          ]}
        >
          2
        </Flexoid.Cell>
        <Flexoid.Cell width={2 / 12}>3</Flexoid.Cell>
      </Flexoid.Block>
    </div>
  )
}
