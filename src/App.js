import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {Form, ProductList} from './components'

const {Telegram : {WebApp}} = window

export const App = () => {
    const onClose = () => {
        WebApp.close();
    }

    useEffect(() => {
        WebApp.ready();
    },[])

    return (
        <div>
            <button
                onClick={onClose}
            >
                Close
            </button>
            <p>Makushenko</p>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path={'/form'} element={<Form/>}/>
            </Routes>
        </div>
    );
};
