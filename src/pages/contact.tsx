import styled from '@emotion/styled'
import React, { FC } from 'react'
import Typography from '../design-system/atoms/Typography'


interface ContactProps {
  pageWidth?: any
}

const Contact: FC<ContactProps> = ({ pageWidth }) => {


  const Container = styled.div`
      width: ${pageWidth};
      margin: 0 auto;
  `

  return (
    <Container id="contact">
      <Typography size='h1'>
        Contato para shows
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

export default Contact