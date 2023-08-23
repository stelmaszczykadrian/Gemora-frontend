import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import {ReactElement, JSXElementConstructor, ReactNode, ReactPortal} from "react";
import TopBar from "./topbar/TopBar";
import Header from "./header/Header";
import Newsletter from "./newsletter/Newsletter";

function Layout(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {

    return (
        <div>
            <TopBar/>
            <Header/>
            <Navbar/>
            <main>{props.children}</main>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Layout;
