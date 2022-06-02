import styled from '@emotion/styled'
import { List, ListItem, Stack } from '@mui/material'
import { FC } from 'react'
import { Copyright } from '../../atoms/Copyright'



interface FooterProps {
    pageWidth?: any
}

const Footer: FC<FooterProps> = ({ pageWidth }) => {


    const StyledFooter = styled.footer`
        position: fixed;
        width: 100%;
        bottom: 0;
        margin: 0 auto;
        background: #ffffffcf;
    `

    return (
        <StyledFooter>
            <Stack direction="row" justifyContent="space-between" p={2}>
                <Copyright />

                <List>
                    <Stack direction="row">

                        <ListItem>instagram</ListItem>
                        <ListItem>spotify</ListItem>
                        <ListItem>facebook</ListItem>
                    </Stack>
                </List>
            </Stack>
        </StyledFooter>
    )
}

export default Footer