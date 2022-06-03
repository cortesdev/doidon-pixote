import { List, ListItem, Stack } from '@mui/material'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Typography from '../../atoms/Typography';

const Navbar = () => {

    return (
        <List sx={{ alignSelf: 'center' }}>
            <Stack direction="row">
                <ListItem>
                    <Link to="#home" smooth>
                       <Typography size="h3" weight='old'>home</Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="#agenda" smooth>
                    <Typography size="h3" weight='old'>agenda</Typography>

                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="#videos" smooth>
                    <Typography size="h3" weight='old'>videos</Typography>

                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="#contact" smooth>
                    <Typography size="h3" weight='old'>contato</Typography>
                    </Link>
                </ListItem>
            </Stack>
        </List>

    )
}

export default Navbar