import React from 'react';
import {Typography, Button, Grid } from "@mui/material";

export const ProductItem = ({ product, className, onAdd, Avatar }) => {

    const onAddHandler = () => {
        onAdd(product)
    }

    return (
        <Grid sx={{textAlign: 'center', alignItems: 'center', border: '1px solid teal', p: '10px'}}>
            <Typography sx={{bgcolor: 'lightblue', width: '50px', height: '50px', margin: '0 auto'}}/>
            <Typography>{product.title}</Typography>
            <Typography>{product.description}</Typography>
            <Typography>{product.price}</Typography>
            <Button
                onClick={onAddHandler}
                variant="contained"
                sx={
                    {
                        bgcolor: 'var(--tg-theme-button-color)',
                        color: 'var(--tg-theme-button-text-color)'
                    }}
            >Add to Shopping Cart</Button>
        </Grid >
    );
};