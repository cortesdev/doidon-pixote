import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import React, { FC } from 'react'
import Typography from '../design-system/atoms/Typography'
import Agenda from './agenda'
import Contact from './contact'
import Hero from './hero'
import Videos from './videos'


interface HomeProps {
  pageWidth?: any
}

const Home: FC<HomeProps> = ({ pageWidth }) => {


  const Container = styled.div`
      width: ${pageWidth};
      margin: 0 auto;
  `

  return (
    <>     

      <Container>

        {/* Subpaginas */}

        <Agenda />

        <Videos />

        <Contact />
      </Container>
    </>
  )
}

export default Home