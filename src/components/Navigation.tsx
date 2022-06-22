import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  background: #2d2a32;
  color: #fdfffc;
`

const SiteLinks = styled.ul`
  display: flex;
`

const SiteLink = styled(Link)`
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  color: inherit;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`

const SiteLinkTitle = styled(SiteLink)`
  font-size: 1.5rem;
`

export const Navigation: FC = () => {
  return (
    <NavBar>
      <SiteLinkTitle to='/'>{`<Yeti'sPlayground />`}</SiteLinkTitle>
      <SiteLinks>
        <SiteLink to='/start-page'>Start Page</SiteLink>
        <SiteLink to='/threejs/blob'>Blob</SiteLink>
      </SiteLinks>
    </NavBar>
  )
}
