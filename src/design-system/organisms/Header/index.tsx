import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import Navbar from '../Navbar'

const StyledHeader = styled.header `
    width: 100%;
    position: fixed;
    top: 0;
    padding: 1rem 1.5rem;
`


const Header = () => {
    return (
        <StyledHeader>
            <Stack direction="row" justifyContent="space-between">
                <img src="/images/doidon_logo.jpeg" height="80px" alt="logo" />

                <Navbar />
            </Stack>
        </StyledHeader>
    )
}

export default Header