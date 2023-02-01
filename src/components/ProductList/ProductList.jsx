import React, {useState} from 'react';
import {ProductItem} from "../ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {Grid} from "@mui/material";

const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
    {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
    {id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая'},
    {id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые'},
    {id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая'},
    {id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые'},
    {id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

export const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const { tg } = useTelegram()

    const onAdd = product => {
        const alreadyAdded = addedItems.find(_ => _.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(_ => _.id !== product.id)
        } else {
            newItems = [...addedItems, product];
        }
        setAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Buy ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <Grid container direction="column" columns={4} gap={1} sx={{alignItems: 'center'}}>
            {products.map(item =>
                        <ProductItem
                            key={item.id}
                            product={item}
                            onAdd={onAdd}
                        />
                )}
        </Grid>
    );
};