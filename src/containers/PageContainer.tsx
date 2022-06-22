import React, { FC } from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  flex: 1 0 auto;
`

type PageContainerProps = {
  children: React.ReactNode
}

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>
}
