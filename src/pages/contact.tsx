import styled from '@emotion/styled'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'
import Typography from '../design-system/atoms/Typography'


interface ContactProps {
  pageWidth?: any
}

const Contact: FC<ContactProps> = ({ pageWidth }) => {


  const Container = styled(Box)`
      width: ${pageWidth};
      margin: 0 auto;
  `

  return (
    <Container id="contact" mb={4}>
      <Typography size='h3' weight='old'>
        Contato para shows:
      </Typography>

      <FlexSpacer minHeight={3} />
      
      <Typography size='h4'>
        telefone:
      </Typography>

      <FlexSpacer minHeight={3} />

      <Typography size='h6'>
        21 303030303
      </Typography>


      <FlexSpacer minHeight={5} />

      <Typography size='h3' weight='old'>
        Loja:
      </Typography>

      <FlexSpacer minHeight={3} />

      <Typography size='h6'>
        {'Mercado Livre [link aqui]'}
      </Typography>

    </Container>
  )
}

export default Contact