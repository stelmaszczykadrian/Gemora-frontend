import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import {ReactElement, JSXElementConstructor, ReactNode, ReactPortal} from "react";
import TopBar from "./topbar/TopBar";
import Header from "./header/Header";

function Layout(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {

    return (
        <div>
            <TopBar/>
            <Header/>
            <Navbar/>
            <main>{props.children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;
