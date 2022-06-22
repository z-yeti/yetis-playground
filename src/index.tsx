import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { PageContainer } from './containers/PageContainer'
import { Home } from './pages/Home'
import { BlobPage } from './pages/threejs/BlobPage'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Oxygen&display=swap');
  body {
    margin: 0;
    font-family: 'Oxygen', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Navigation />
      <PageContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/threejs/blob' element={<BlobPage />} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  </React.StrictMode>
)
