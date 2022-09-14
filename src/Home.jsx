import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'

const Home = () => {
  return (
    <Container>
      <Header />
    </Container>
  )
}

export default Home

const Container = styled.div`
  background: #1E1E1E;
  min-height: 100vh;
  padding-top: 2rem;
`