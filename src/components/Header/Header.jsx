import React from 'react';
import {AppBar, Toolbar, Typography, Button, Tooltip} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useTelegram} from "../../hooks/useTelegram";
export const Header = () => {
    const { tg, user, onClose } = useTelegram()
    return (
        <>
            <AppBar position='static' color='transparent' sx={{mb : 2}}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography
                        variant='h5' sx={{fontWeight: 'bold'}}
                    >
                        {user?.username}
                    </Typography>
                    <Tooltip title="Close page">
                        <Button
                            sx={
                                {
                                    bgcolor: 'var(--tg-theme-button-color)',
                                    color: 'var(--tg-theme-button-text-color)'
                                }}
                            variant="contained"
                            onClick={onClose}
                        >
                            <CloseIcon/>
                        </Button>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </>
    );
};