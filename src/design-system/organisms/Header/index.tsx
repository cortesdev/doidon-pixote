import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import { FC } from 'react'
import Navbar from '../Navbar'

interface HeaderProps {
    pageWidth?: any
}

const Header: FC<HeaderProps> = ({pageWidth}) => {

    const StyledHeader = styled.header `
        width: ${pageWidth};
        position: sticky;
        margin: 0 auto;
        top: 0;
        padding: 1rem 0;
    `

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