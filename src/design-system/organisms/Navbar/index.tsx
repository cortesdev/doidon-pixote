import { List, ListItem, Stack } from '@mui/material'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

    return (
        <List sx={{ alignSelf: 'center' }}>
            <Stack direction="row">
                <ListItem>
                    <Link to="#home" smooth>
                        home
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="#agenda" smooth>
                        agenda
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="#videos" smooth>
                        videos
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="#contact" smooth>
                        contato
                    </Link>
                </ListItem>
            </Stack>
        </List>

    )
}

export default Navbar