import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import React, { FC } from 'react'
import Typography from '../design-system/atoms/Typography'
import Agenda from './agenda'
import Contact from './contact'
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
    <Container>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="column">

          <Typography size='h1'>
            Doidon Pixote
          </Typography>

          <Typography size='h4'>
            e os Van der Zicrey
          </Typography>


        </Stack>
        <img src="/images/doidon_logo.jpeg" alt="logo" />
      </Stack>

      {/* Subpaginas */}
      
      <Agenda />

      <Videos />

      <Contact />
    </Container>
  )
}

export default Home