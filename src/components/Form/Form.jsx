import React, {useState} from 'react';
import {Container, Input, FormControl, InputLabel, Select, MenuItem, Typography} from "@mui/material";

export const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [delivery, setDelivery] = useState('Pickup from Nova Poshta');

    const onChangeCity = ({ target : { value } }) => setCity(value)
    const onChangeName = ({ target : { value } }) => setName(value)
    const onChangeLastName = ({ target : { value } }) => setLastName(value)
    const onChangeNumber = ({ target : { value } }) => setNumber(value)
    const onChangeStreet = ({ target : { value } }) => setStreet(value)
    const onChangeDelivery = ({ target : { value } }) => setDelivery(value)
    const DeliveryMethods = [
        'Pickup from Nova Poshta',
        'Pickup from Ukrposhta',
        'Courier at your address',
        'Courier Nova Poshta',
        'Pickup from our stores',
    ]
    return (
        <Container>
            <Typography
                component='span'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    maxWidth: '300px',
                    m: '0 auto'
            }}>
                <Typography>Fill out the form</Typography>
                <Input
                    placeholder='name'
                    onChange={onChangeName}
                />
                <Input
                    placeholder='last name'
                    onChange={onChangeLastName}
                />
                <Input
                    placeholder='city'
                    onChange={onChangeCity}
                />
                <Input
                    placeholder='street'
                    onChange={onChangeStreet}
                />
                <Input
                    placeholder='number'
                    onChange={onChangeNumber}
                />
                <FormControl
                    sx={{ m: 1, width: 300 }}
                >
                    <InputLabel
                        sx={{p: '5px'}}
                        variant="standard"
                        htmlFor="uncontrolled-native"
                    >
                        Delivery methods
                    </InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={delivery}
                        onChange={onChangeDelivery}
                    >
                        {DeliveryMethods.map(method => (
                            <MenuItem
                                key={method}
                                value={method}
                            >
                                {method}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Typography>
        </Container>

    );
};
