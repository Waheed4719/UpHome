import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { FilterDrawerProvider } from './contexts/FilterDrawerContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <FilterDrawerProvider>
                <App />
            </FilterDrawerProvider>
        </BrowserRouter>
    </React.StrictMode>
);
