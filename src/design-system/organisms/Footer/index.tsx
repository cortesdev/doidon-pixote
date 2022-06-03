import styled from '@emotion/styled'
import { List, ListItem, ListItemButton, Stack } from '@mui/material'
import { FC } from 'react'
import { Copyright } from '../../atoms/Copyright'


interface FooterProps {
    pageWidth?: any
}

const Footer: FC<FooterProps> = ({ pageWidth }) => {


    const StyledFooter = styled.footer`       
        width: 100%;
        bottom: 0;
        margin: 0 auto;
        background: #ffffffcf;
    `
    const StyledImage = styled.img`
       width: 20px;
    `

    const linkData = [
        { src: '/images/facebook.svg', alt: 'facebook', url: 'https://www.facebook.com/doidonpixote' },
        { src: '/images/insta.svg', alt: 'insta', url: 'https://www.instagram.com/doidonpix/' },
        { src: '/images/spotify.svg', alt: 'spotify', url: 'https://open.spotify.com/artist/1H3kmZKczSXJ2jum4zrqR3' },
    ]

    return (
        <StyledFooter>
            <Stack direction="row" justifyContent="space-between" p={2}>

                <Copyright />

                <List>
                    <Stack direction="row">
                        {linkData.map((item, index) => (
                            <ListItemButton component="a" target="_blank" href={item.url} sx={{borderRadious: 50}}>
                                <StyledImage src={item.src} alt={item.alt} />
                            </ListItemButton>
                        ))}
                    </Stack>
                </List>
            </Stack>
        </StyledFooter>
    )
}

export default Footer