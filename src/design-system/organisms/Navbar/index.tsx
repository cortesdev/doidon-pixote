import { List, ListItem, Stack } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <List sx={{ alignSelf: 'center'}}>
            <Stack direction="row">
                <ListItem>home</ListItem>
                <ListItem>shows</ListItem>
                <ListItem>videos</ListItem>
                <ListItem>agenda</ListItem>
                <ListItem>contato</ListItem>
            </Stack>
        </List>

    )
}

export default Navbar