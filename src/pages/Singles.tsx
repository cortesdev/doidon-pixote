import { FC } from 'react'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import Typography from '../design-system/atoms/Typography'
import { FlexSpacer } from '../design-system/atoms/FlexSpacer'


interface SinglesProps {
    pageWidth?: any
}

const Singles: FC<SinglesProps> = ({ pageWidth }) => {

    const Singles = styled.div`
      width: ${pageWidth};
      margin: 0 auto;
  `

    return (
        <Singles id="Singles">
            <Typography size='h3' weight='old'>
                Singles
            </Typography>

            <FlexSpacer minHeight={3} />

            <Grid container spacing={1} margin="0 auto">
                <Grid item xs={12} md={3}>
                    <img src="/images/doidon_logo.jpeg" alt="logo" />
                </Grid>
                <Grid item xs={12} md={3}>
                    <img src="/images/doidon_logo.jpeg" alt="logo" />
                </Grid>
                <Grid item xs={12} md={3}>
                    <img src="/images/doidon_logo.jpeg" alt="logo" />
                </Grid>
                <Grid item xs={12} md={3}>
                    <img src="/images/doidon_logo.jpeg" alt="logo" />
                </Grid>
            </Grid>
        </Singles>
    )
}

export default Singles;