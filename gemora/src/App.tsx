import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";

import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

import {AppRouter} from "./router/App.router";


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <AppRouter/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
