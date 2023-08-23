import React from 'react';
import './App.css';


import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

import {AppRouter} from "./router/App.router";
import {UserContextProvider} from "./context/UserContext";
import {CartContextProvider} from "./context/CartContext";


function App() {
    return (
        <UserContextProvider>
            <CartContextProvider>
                <Layout>
                    <AppRouter/>
                </Layout>
            </CartContextProvider>
        </UserContextProvider>
    );
}

export default App;
