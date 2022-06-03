import styled from '@emotion/styled'
import { List, ListItem, Stack, useMediaQuery } from '@mui/material'
import React, { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Typography from '../design-system/atoms/Typography'
import { theme } from '../styles/theme'
import { agendaShows } from '../__mock__/agendaShows'

interface AgendaProps {
  pageWidth?: any
}

const Agenda: FC<AgendaProps> = ({ pageWidth }) => {


  const StyledList = styled(List)`
  background: black;
  border-radius: 20px;
  box-shadow: 2px 2px 12px 10px #000;
}
  `
  const Container = styled.div`
      width: ${pageWidth};
      margin: 0 auto;
  `
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container id="agenda">
      <Typography size='h3' weight='old'>
        Tour e agenda para Shows
      </Typography>
      <FlexSpacer minHeight={3} />

      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" >

        {!isMobile &&
          <img src="/images/doidon_logo.jpeg" alt="logo" width="50%" />
        }
        <Stack direction="column" width={{ xs: '100%', md: '41%' }}>

          <StyledList>
            {agendaShows.map((item, index) =>
              <ListItem key={index}>
                <Stack direction='row' justifyContent={'start'} p="0 1rem" width="100%">

                  <Stack direction="column" alignItems="center">
                    <Typography size="h2" weight='old'>
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
          </StyledList>

        </Stack>
      </Stack>


    </Container>
  )
}

export default Agenda