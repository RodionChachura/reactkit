import { DemoPage } from 'components/DemoPage'
import { Confetti } from '@reactkit/ui/ui/animations/Confetti'
import { Checkbox } from '@reactkit/ui/ui/inputs/Checkbox/Checkbox'
import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`

const ConfettiPage: NextPage = () => {
  const [value, setValue] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  return (
    <DemoPage title="Confetti">
      <Container>
        <Checkbox
          label="Confetti!"
          value={value}
          onChange={() => {
            const newValue = !value
            setValue(newValue)
            setShowConfetti(newValue)
          }}
        />
        {showConfetti && <Confetti x={20} y={-20} />}
      </Container>
    </DemoPage>
  )
}

export default ConfettiPage
