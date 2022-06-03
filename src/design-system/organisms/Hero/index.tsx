import styled from '@emotion/styled'
import { Grid, List, ListItemButton, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { FlexSpacer } from '../../atoms/FlexSpacer'
import Typography from '../../atoms/Typography'
import ImgSwiper from '../../molecules/ImgSwiper'


interface HeroProps {
  isMobile?: any
  pageWidth?: any
}

const Hero: FC<HeroProps> = ({ pageWidth, isMobile }) => {


  const Container = styled(Stack)`
   
  `

  const HeroImage = styled(Stack)`
    background: linear-gradient(to left top, #240000a3, #ff0000b8),url(/images/foto_horiz.jpg) no-repeat 50% 50%;
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
    <Container id="Hero">
      <HeroImage />

      <FlexSpacer minHeight={6} />

      <HeroCenter direction="row" justifyContent="space-between" sx={{ maxWidth: '100%' }}>

        <Grid container sx={{ margin: '0 3rem' }}>


          <Grid item direction="column" marginTop={{ xs: '30px', md: "50px" }} width={{ xs: '100%', md: '60%' }} mt="15%" color="white" zIndex={999}>

            <Stack direction="row">

              <Typography size='h1' weight='old' sx={{ transform: 'rotate(3deg)', marginBottom: '-3rem' }}>
                Doidon
              </Typography>

              <Typography size='h1' weight='old' sx={{ transform: 'rotate(-7deg)', marginBottom: '1rem', fontSize: '15rem', marginLeft: '2rem' }}>
                Pixote
              </Typography>
            </Stack>

            <Typography size='h4' weight='old' sx={{ transform: 'rotate(-7deg)', marginBottom: '6rem', fontSize: '3rem', marginLeft: '2rem' }}>
              e os Van der Zicrey
            </Typography>


            <List style={{ maxWidth: "60%" }}>
              <Stack direction="row">
                <ListItemButton sx={{ paddingLeft: 0 }} component="a" target="_blank"
                  href="https://www.amazon.de/music/player/artists/B083PV5JS6/doidon-pixote-e-os-van-der-zicrey">
                  <img src="/images/SVG/Amazon.svg" alt="amazon" />
                </ListItemButton>

                <ListItemButton component="a" target="_blank"
                  href="https://open.spotify.com/artist/1H3kmZKczSXJ2jum4zrqR3">
                  <img src="/images/SVG/Spotify.svg" alt="spotify" />
                </ListItemButton>
              </Stack>
            </List>

          </Grid>

          {!isMobile &&
            <Grid item direction="column" sx={{ marginTop: "220px" }} width={{ xs: '100%', md: '40%' }} >
              <ImgSwiper />
            </Grid>
          }
        </Grid>
      </HeroCenter>

      <FlexSpacer minHeight={6} />

    </Container >
  )
}

export default Hero