import React from 'react';
import './App.css';


import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

import {AppRouter} from "./router/App.router";
import {UserContextProvider} from "./context/UserContext";


function App() {
    return (
        <UserContextProvider>
            <Layout>
                <AppRouter/>
            </Layout>
        </UserContextProvider>
    );
}

export default App;
