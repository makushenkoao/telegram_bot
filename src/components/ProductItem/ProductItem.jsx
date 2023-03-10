import React, {useState} from 'react';
import {Typography, Button, Grid } from "@mui/material";

export const ProductItem = ({ product, onAdd}) => {
    const [isAdded, setIsAdded] = useState(false)

    const onAddHandler = () => {
        onAdd(product)
        setIsAdded(prevState => !prevState)
    }

    return (
        <Grid sx={{textAlign: 'center', alignItems: 'center', border: '1px solid orange', p: '10px', width: '250px'}}>
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
            >{!isAdded ? 'Add to Shopping Cart' : 'Remove from cart'}</Button>
        </Grid >
    );
};