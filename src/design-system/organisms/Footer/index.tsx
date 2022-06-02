import styled from '@emotion/styled'
import { List, ListItem, Stack } from '@mui/material'

const StyledFooter = styled.footer `
    position: fixed;
    bottom: 0;
`



const Footer = () => {
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