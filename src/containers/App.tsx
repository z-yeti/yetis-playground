import React, { FC } from 'react'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/web'
import styled from 'styled-components'
import { Navigation } from '../components/Navigation'
import { CanvasContainer } from './CanvasContainer'
import { Sphere } from '../components/Sphere'

const AnimatedMain = styled.main`
    height: 100%;
`

export const App: FC = () => {
    const [{ background }, setBg] = useSpring({
        background: 'linear-gradient(0, #9491e2 0%, #119DA4 100%)'
    }, [])

    return (
        <AnimatedMain as={a.main} style={{ background }}>
            <Navigation />
            <CanvasContainer>
                <Sphere setBg={setBg} />
            </CanvasContainer>
        </AnimatedMain>
    )
}
