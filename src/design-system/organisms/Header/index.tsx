import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import { FC } from 'react'
import Navbar from '../Navbar'

interface HeaderProps {
    pageWidth?: any
}

const Header: FC<HeaderProps> = ({pageWidth}) => {

    const StyledHeader = styled.header `
    position: sticky;
    top: 0;
    background: #ffffffcf;
    `
    
    const StyledContainer = styled(Stack) `
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
    `

    return (
        <StyledHeader>
            <StyledContainer direction="row" justifyContent="space-between">
                <img src="/images/doidon_logo.jpeg" height="80px" alt="logo" />

                <Navbar />
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header