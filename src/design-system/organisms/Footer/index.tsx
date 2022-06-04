import styled from '@emotion/styled'
import { Box, Grid, List, ListItem, ListItemButton, Stack } from '@mui/material'
import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { Copyright } from '../../atoms/Copyright'
import { FlexSpacer } from '../../atoms/FlexSpacer'
import FooterLinks from '../../molecules/FooterLinks'

import { useNavigate } from "react-router-dom";

interface FooterProps {
    pageWidth?: any
}

const Footer: FC<FooterProps> = ({ pageWidth }) => {

    const navigate = useNavigate();

    const StyledFooter = styled.footer`       
        maxWidth: ${pageWidth};
        bottom: 0;
        margin: 0 3rem;
    `
    const StyledImage = styled.img`
       width: 20px;
       filter: invert(1);
    `

    const linkData = [
        { src: '/images/facebook.svg', alt: 'facebook', url: 'https://www.facebook.com/doidonpixote' },
        { src: '/images/insta.svg', alt: 'insta', url: 'https://www.instagram.com/doidonpix/' },
        { src: '/images/spotify.svg', alt: 'spotify', url: 'https://open.spotify.com/artist/1H3kmZKczSXJ2jum4zrqR3' },
    ]

    return (
        <StyledFooter>
            <Stack direction="row" justifyContent="space-between" p={2}>
                <Grid container>
                    <Grid item xs={12} md={9}>
                        <FooterLinks />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Stack direction="column" justifyContent="space-between" p={2} >

                            <List >
                                <Stack direction="row">
                                    {linkData.map((item, index) => (
                                        <ListItemButton component="a" target="_blank" href={item.url} sx={{ borderRadious: 50 }}>
                                            <StyledImage src={item.src} alt={item.alt} />
                                        </ListItemButton>
                                    ))}
                                </Stack>
                            </List>
                        </Stack>

                        <Box onClick={() => navigate('/#home')}>
                            <img src="/images/SVG/logo-rot.svg" alt="logo" height={100} style={{ display: 'flex', margin: '0 3rem 2rem auto ' }} />
                        </Box>

                        <Copyright />
                    </Grid>
                </Grid>
            </Stack>
        </StyledFooter>
    )
}

export default Footer