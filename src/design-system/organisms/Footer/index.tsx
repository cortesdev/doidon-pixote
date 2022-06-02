import styled from '@emotion/styled'
import { List, ListItem, Stack } from '@mui/material'
import { FC } from 'react'



interface FooterProps {
    pageWidth?: any
}

const Footer: FC<FooterProps> = ({ pageWidth }) => {


    const StyledFooter = styled.footer`
        position: fixed;
        width: ${pageWidth};
        bottom: 0;
        margin: 0 auto;
    `

    return (
        <StyledFooter>
            <List>
                <Stack direction="row" maxWidth="200px">
                    <ListItem>instagram</ListItem>
                    <ListItem>spotify</ListItem>
                    <ListItem>facebook</ListItem>
                </Stack>
            </List>

        </StyledFooter>
    )
}

export default Footer