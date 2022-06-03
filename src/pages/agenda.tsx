import styled from '@emotion/styled'
import { List, ListItem, Stack } from '@mui/material'
import React, { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Typography from '../design-system/atoms/Typography'
import { agendaShows } from '../__mock__/agendaShows'

interface AgendaProps {
  pageWidth?: any
}

const Agenda: FC<AgendaProps> = ({ pageWidth }) => {


  const Container = styled.div`
      width: ${pageWidth};
      margin: 0 auto;
  `

  return (
    <Container id="agenda">
      <Typography size='h3'>
        Agenda de shows
      </Typography>
      <FlexSpacer minHeight={3} />

      <Stack direction={{xs: 'column', md: 'row'}} justifyContent="space-between" >


        <img src="/images/doidon_logo.jpeg" alt="logo" width="50%" />

        <Stack direction="column" width={{xs: '100%', md: '41%'}}>

          <List>
            {agendaShows.map((item, index) =>
              <ListItem key={index}>
                <Stack direction='row' justifyContent={ 'start'} p="0 1rem" width="100%">

                  <Stack direction="column" alignItems="center">
                    <Typography size="h1" weight='old'>
                      {item.dia}
                    </Typography>
                    <Typography size='body'>
                      {item.mes}
                    </Typography>
                  </Stack>

                  <Stack direction="column" justifyContent="center" ml={2}>
                    <Typography size='h6' mb={2}>
                      {item.local}
                    </Typography>
                    <Typography size='small'>
                      {item.hora}
                    </Typography>
                  </Stack>

                </Stack>
              </ListItem>
            )}
          </List>
         
        </Stack>
      </Stack>


    </Container>
  )
}

export default Agenda