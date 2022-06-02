import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Typography from '../design-system/atoms/Typography'


interface HeroProps {
  pageWidth?: any
}

const Hero: FC<HeroProps> = ({ pageWidth }) => {


  const Container = styled(Stack)`
 
  `

  const HeroCenter = styled(Stack)`
  width: ${pageWidth};
  margin: 0 auto;
`

  return (
    <Container id="Hero" sx={{ background: 'wheat' }}>

      <FlexSpacer minHeight={6} />
      <HeroCenter direction="row" justifyContent="space-between" >


        <Stack direction="column" width='41%' mt="15%">

          <Typography size='h1'>
            Doidon Pixote
          </Typography>

          <Typography size='h4'>
            e os Van der Zicrey
          </Typography>

        </Stack>

        <img src="/images/doidon_logo.jpeg" alt="logo" width="50%" />
      </HeroCenter>

      <FlexSpacer minHeight={6} />

    </Container>
  )
}

export default Hero