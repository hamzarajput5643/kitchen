import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from '@app/App';
import { store } from '@store/store';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';

import './utils/i18n';
import './index.scss';
import { AxiosApiInterceptor } from './app/AxiosApiInterceptor';
import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const { VITE_NODE_ENV, VITE_GA_ID } = import.meta.env;

if (VITE_NODE_ENV === 'production' && VITE_GA_ID) {
    ReactGA.initialize(VITE_GA_ID);
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60000,
            refetchOnMount: true,
            refetchOnWindowFocus: false,
            retry: 2
        }
    }
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

const renderApp = () => (
    // <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <AxiosApiInterceptor />
                    <App />
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    // </React.StrictMode>
);

root.render(renderApp());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();