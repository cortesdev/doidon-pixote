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
      <Typography size='h3'>
        Contato para shows:
      </Typography>
      <FlexSpacer minHeight={3} />
      
      <Typography size='body'>
        telefone:
      </Typography>

      <Typography size='h6'>
        21 303030303
      </Typography>
    </Container>
  )
}

export default Contact