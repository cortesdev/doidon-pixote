import styled from '@emotion/styled'
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
      <Typography size='h1'>
        Agenda de shows
      </Typography>

      <Typography size='h4'>
        telefone:
      </Typography>
      <Typography size='h4'>
        21 303030303
      </Typography>
    </Container>
  )
}

export default Agenda