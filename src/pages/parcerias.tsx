import styled from '@emotion/styled'
import { Grid, Link } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Typography from '../design-system/atoms/Typography'


interface ParceriasProps {
  pageWidth?: any
}


const marcas = [
  { url: '/images/casa33.png', height: '100px', nome: '', contrast: 'dark' },
  { url: '/images/SVG/logo-doidon-white.svg', height: '30px', nome: '', contrast: '' },
  { url: '/images/SVG/logo-doidon-white.svg', height: '30px', nome: '', contrast: '' },
  { url: '/images/SVG/logo-doidon-white.svg', height: '30px', nome: '', contrast: '' },
  { url: '/images/SVG/logo-doidon-white.svg', height: '30px', nome: '', contrast: '' },
  { url: '/images/SVG/logo-doidon-white.svg', height: '30px', nome: '', contrast: '' },
]
const Parcerias: FC<ParceriasProps> = ({ pageWidth }) => {


  const Container = styled(Box)`
      width: ${pageWidth};
      margin: 0 auto;
  `

  return (
    <Container id="Parcerias" mb={4}>

      <FlexSpacer minHeight={3} />

      <Grid container alignItems="center">
        {marcas.map((item) => (
          <Grid item xs={12} md={2}>
            <img src={item.url} height={item.height} alt="logo"
              style={{ filter: item.contrast === "dark" ? 'invert(1)' : '' }}
            />
          </Grid>
        ))}





      </Grid>




      <FlexSpacer minHeight={5} />


    </Container>
  )
}

export default Parcerias