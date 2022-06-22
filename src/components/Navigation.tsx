import React, { FC } from 'react'
import styled from 'styled-components'

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem 0 1.5rem;
`

const SiteTitle = styled.a`
  text-decoration: none;
  color: #111;
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
`

export const Navigation: FC = () => {
  return (
    <NavBar>
      <SiteTitle href='/'>{`<Yeti'sPlayground />`}</SiteTitle>
    </NavBar>
  )
}
