import React from 'react';
import {createRoot} from 'react-dom/client';
import createCache from '@emotion/cache';
import { CacheProvider } from "@emotion/react";
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

const root = createRoot(document.getElementById('root'));

        export const muiCache = createCache({
        'key': 'mui',
        'prepend': true,
        });

root.render(
        <Provider store={store}>
    <CacheProvider value={muiCache}>
        <App />
        </CacheProvider>
        </Provider>
);