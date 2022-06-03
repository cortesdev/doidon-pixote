import { List, ListItem, Stack } from '@mui/material'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Typography from '../../atoms/Typography';

const Navbar = () => {

    return (
        <List sx={{ alignSelf: 'center' }}>
            <Stack direction="row">
                <ListItem sx={{ transform: 'rotate(2deg)' }}>
                    <Link to="#home" smooth>
                        <Typography size="h3" weight='old'>home</Typography>
                    </Link>
                </ListItem>
                <ListItem sx={{ transform: 'scale(1.35) rotate(-5deg)' }}>
                    <Link to="#agenda" smooth>
                        <Typography size="h3" weight='old'>agenda</Typography>

                    </Link>
                </ListItem>
                <ListItem sx={{ transform: 'rotate(3deg)' }}>
                    <Link to="#videos" smooth>
                        <Typography size="h3" weight='old'>videos</Typography>

                    </Link>
                </ListItem>
                <ListItem sx={{ transform: 'scale(1.5) rotate(-3.5deg)' }}>
                    <Link to="#contact" smooth>
                        <Typography size="h3" weight='old'>contato</Typography>
                    </Link>
                </ListItem>
            </Stack>
        </List>

    )
}

export default Navbar