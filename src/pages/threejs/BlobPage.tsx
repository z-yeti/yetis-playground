import { FC } from 'react'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
import styled from 'styled-components'
import { CanvasContainer } from '../../containers/CanvasContainer'
import { Blob } from '../../components/threejs/Blob'

const AnimatedMain = styled.main`
  height: 100%;
`

export const BlobPage: FC = () => {
  const [{ background }, setBg] = useSpring(
    {
      background: 'linear-gradient(0, #9491e2 0%, #119DA4 100%)',
    },
    []
  )

  return (
    <AnimatedMain as={a.main} style={{ background }}>
      <CanvasContainer>
        <Blob setBg={setBg} />
      </CanvasContainer>
    </AnimatedMain>
  )
}
