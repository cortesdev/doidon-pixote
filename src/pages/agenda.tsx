import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import React, { FC } from 'react'
import Typography from '../design-system/atoms/Typography'


interface AgendaProps {
  pageWidth?: any
}

const Agenda: FC<AgendaProps> = ({ pageWidth }) => {


  const Container = styled.div`
      width: ${pageWidth};
      margin: 0 auto;
  `

  return (
    <Container id="Agenda">
      <Typography size='h3'>
        Agenda de shows
      </Typography>
      <Stack direction="row" justifyContent="space-between" >


        <img src="/images/doidon_logo.jpeg" alt="logo" width="50%" />

        <Stack direction="column" width='41%'>
          <Stack direction="row" justifyContent="space-between" p="15px 0" width="100%">
            <Typography size='h1'>
              21
            </Typography>
            <Typography size='h4'>
              Circo voador
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" p="15px 0" width="100%">
            <Typography size='h1'>
              23
            </Typography>
            <Typography size='h4'>
              Casarao amarelo
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" p="15px 0" width="100%">
            <Typography size='h1'>
              24
            </Typography>
            <Typography size='h4'>
              Beco da bohemia
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" p="15px 0" width="100%">
            <Typography size='h1'>
              24
            </Typography>
            <Typography size='h4'>
              hangar 110
            </Typography>
          </Stack>
        </Stack>
      </Stack>


    </Container>
  )
}

export default Agenda