import React, { FC } from 'react'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'

const CanvasWrapper = styled.div`
  height: calc(100vh - 70px);
`

type CanvasContainerProps = {
  children: React.ReactNode
}

export const CanvasContainer: FC<CanvasContainerProps> = ({ children }) => {
  return (
    <CanvasWrapper>
      <Canvas>{children}</Canvas>
    </CanvasWrapper>
  )
}
