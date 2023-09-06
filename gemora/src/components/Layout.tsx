import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import React, {ReactElement, JSXElementConstructor, ReactNode, ReactPortal} from "react";
import TopBar from "./topbar/TopBar";
import Header from "./header/Header";
import Newsletter from "./newsletter/Newsletter";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {

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
