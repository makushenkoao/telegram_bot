import React, {useState, useEffect, useCallback} from 'react';
import {Container, Input, FormControl, InputLabel, Select, MenuItem, Typography} from "@mui/material";
import {useTelegram} from "../../hooks/useTelegram";
import {Telegram} from "@mui/icons-material";

export const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [delivery, setDelivery] = useState('Pickup from Nova Poshta');

    const DeliveryMethods = [
        'Pickup from Nova Poshta',
        'Pickup from Ukrposhta',
        'Courier at your address',
        'Courier Nova Poshta',
        'Pickup from our stores',
    ]

    const onChangeCity = ({ target : { value } }) => setCity(value)
    const onChangeName = ({ target : { value } }) => setName(value)
    const onChangeLastName = ({ target : { value } }) => setLastName(value)
    const onChangeNumber = ({ target : { value } }) => setNumber(value)
    const onChangeStreet = ({ target : { value } }) => setStreet(value)
    const onChangeDelivery = ({ target : { value } }) => setDelivery(value)

    const { tg } = useTelegram()

    const sendData = useCallback(() => {
        const data = {
            name,
            lastName,
            number,
            city,
            street,
            delivery,
        }
        tg.sendData(JSON.stringify(data))
    }, [name, lastName, number, city, street, delivery])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send data'
        })
    },[sendData]);

    useEffect(() => {
        if (street && name && lastName && number && city) {
            tg.MainButton.show()
        } else {
            tg.MainButton.hide()
        }
    }, [name, lastName, number, city, street]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', sendData)
        return () => {
            tg.offEvent('mainButtonClicked', sendData)
        }
    }, [])

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
                    sx={{
                        background: 'var(--tg-theme-bg-color)',
                        color: 'var(--tg-theme-text-color),'
                    }}
                />
                <Input
                    placeholder='last name'
                    onChange={onChangeLastName}
                    sx={{
                        background: 'var(--tg-theme-bg-color)',
                        color: 'var(--tg-theme-text-color),'
                    }}
                />
                <Input
                    placeholder='city'
                    onChange={onChangeCity}
                    sx={{
                        background: 'var(--tg-theme-bg-color)',
                        color: 'var(--tg-theme-text-color),'
                    }}
                />
                <Input
                    placeholder='street'
                    onChange={onChangeStreet}
                    sx={{
                        background: 'var(--tg-theme-bg-color)',
                        color: 'var(--tg-theme-text-color),'
                    }}
                />
                <Input
                    placeholder='number'
                    onChange={onChangeNumber}
                    sx={{
                        background: 'var(--tg-theme-bg-color)',
                        color: 'var(--tg-theme-text-color),'
                    }}
                />
                <FormControl
                    sx={{ m: 1, width: 300 }}
                >
                    <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                        sx={{
                            background: 'var(--tg-theme-bg-color)',
                            color: 'var(--tg-theme-text-color)',
                            p: '5px'
                        }}
                    >
                        Delivery methods
                    </InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={delivery}
                        onChange={onChangeDelivery}
                        sx={{
                            background: 'var(--tg-theme-bg-color)',
                            color: 'var(--tg-theme-text-color)',
                            width: '250px'
                        }}
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
