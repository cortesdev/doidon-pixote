import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import Navbar from '../Navbar'

interface HeaderProps {
    pageWidth?: any
}



const Header: FC<HeaderProps> = ({pageWidth}) => {
    
    const [scroll, setScroll] = useState(false);
    
     useEffect(() => {
       window.addEventListener("scroll", () => {
         setScroll(window.scrollY > 50);
       });
     }, []);
    
    const StyledHeader = styled.header `
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
    `
    
    const StyledContainer = styled(Stack) `
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
    `

    return (
        <StyledHeader className={scroll ? "bg-light" : "bg-dark"}        >
            <StyledContainer direction="row" justifyContent="space-between">
                <img src="/images/doidon_logo.jpeg" height="80px" alt="logo" />

                <Navbar />
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header