import Navbar from "./header/navbar/Navbar";
import Footer from "./footer/Footer";
import React, {ReactElement, ReactNode, ReactPortal} from "react";
import TopBar from "./header/topbar/TopBar";
import Header from "./header/header/Header";
import Newsletter from "./ui/newsletter/Newsletter";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout(props: { children: string | number | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | null | undefined; }) {

    return (
        <div>
            <TopBar/>
            <Header/>
            <Navbar/>
            <main>{props.children}</main>
            <ToastContainer/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Layout;
