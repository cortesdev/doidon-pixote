import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import React, { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Typography from '../design-system/atoms/Typography'
import Agenda from './agenda'
import Contact from './contact'
import Hero from './hero'
import Singles from './Singles'
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
        <FlexSpacer minHeight={5} />
        <Agenda />
        <FlexSpacer minHeight={5} />
        <Videos />
        <FlexSpacer minHeight={5} />
        <Singles />
        <FlexSpacer minHeight={5} />
        <Contact />

        <FlexSpacer minHeight={10} />
      </Container>
    </>
  )
}

export default Home