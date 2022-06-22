import React, { FC } from 'react'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'

const CanvasWrapper = styled.div`
  height: 100%;
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
