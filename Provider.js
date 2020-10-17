import React from 'react';
import ContextProvider from './context/ContextProvider';
import Routes from './routes/Routes';

export default function Provider() {
    return (
        <ContextProvider>
            <Routes />
        </ContextProvider>
    );
}
