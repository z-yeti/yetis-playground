import { FC } from 'react'
import styled, { css, keyframes } from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #504a59;
`

const createAnimationDelayCSS = () => {
  let styles = ''
  for (let i = 0; i < 100; i += 1) {
    const delayCalc = i * 0.2 - 100 * 0.2
    styles += `
      span:nth-of-type(${i}) {
        animation-delay: ${delayCalc}s;
      }
    `
  }
  return css`
    ${styles}
  `
}

const createAnimationKeyframes = () => {
  let colorTextAnimationKeysframesString = ''
  for (let i = 0; i < 20; i += 1) {
    colorTextAnimationKeysframesString += `
      ${i * ((1 / 20) * 100)}% {
        color: hsla(${Math.floor(Math.random() * 365)}, 60%, 60%, 1);
      }
    `
  }
  return colorTextAnimationKeysframesString
}

const colorTextAnimation = keyframes`
  ${createAnimationKeyframes()}
`

const AnimatedTag = styled.h1`
  & span {
    animation: ${colorTextAnimation} 50s alternate infinite forwards;
  }

  ${createAnimationDelayCSS()}
`

export const Home: FC = () => {
  const chars = "Yeti's Code Playground".split('')
  return (
    <HomeContainer>
      <AnimatedTag>
        {chars.map((char, i) => (
          <span key={`${char}-${i}`}>{char}</span>
        ))}
      </AnimatedTag>
    </HomeContainer>
  )
}
