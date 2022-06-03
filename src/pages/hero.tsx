import styled from '@emotion/styled'
import { List, ListItemButton, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Typography from '../design-system/atoms/Typography'


interface HeroProps {
  isMobile?: any
  pageWidth?: any
}

const Hero: FC<HeroProps> = ({ pageWidth, isMobile }) => {


  const Container = styled(Stack)`
   
  `

  const HeroImage = styled(Stack)`
    background: url('/images/foto_horiz.jpg') no-repeat 50% 50%;
    background-size: cover;
    filter: brightness(50%);
    box-shadow:   inset 0 24px 36px  40px  rgba(0,0,0,.);
    height: 100%;
    width: 100%;
    position: absolute;
`

  const HeroCenter = styled(Stack)`
    margin: 0 auto;
  `

  return (
    <Container id="Hero" sx={{ backgroundImage: 'wheat' }}>
      <HeroImage />
      <FlexSpacer minHeight={6} />
      <HeroCenter direction="row" justifyContent="space-between" width={{ md: pageWidth }}>


        <Stack direction="column" width={{ xs: '100%', md: '41%' }} mt="15%" color="white" zIndex={999}>

          <Typography size='h1' weight='old'>
            Doidon Pixote
          </Typography>

          <Typography size='h4'>
            e os Van der Zicrey
          </Typography>

          <List>
            <Stack direction="row">
              <ListItemButton sx={{paddingLeft: 0}}>
                <img src="/images/SVG/Amazon.svg" alt="amazon" />
              </ListItemButton>

              <ListItemButton>
                <img src="/images/SVG/Spotify.svg" alt="spotify" />
              </ListItemButton>
            </Stack>
          </List>
        </Stack>

        {!isMobile && <img src="/images/doidon_logo.jpeg" alt="logo" width="50%" />}
      </HeroCenter>

      <FlexSpacer minHeight={6} />

    </Container>
  )
}

export default Hero