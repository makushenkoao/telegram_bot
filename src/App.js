import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {Form, Header, ProductList} from './components'
import {useTelegram} from "./hooks/useTelegram";

export const App = () => {
    const { tg, onToggleButton } = useTelegram();

    useEffect(() => {
        tg.ready()
    }, [])

    return (
        <>
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path={'/form'} element={<Form/>}/>
            </Routes>
        </>
    );
};


