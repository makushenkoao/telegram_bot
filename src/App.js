import React, {useEffect} from 'react';

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
        </div>
    );
};
