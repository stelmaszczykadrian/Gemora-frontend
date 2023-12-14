import React, {useContext} from "react";
import PageHeader from "../components/ui/pageheader/PageHeader";
import OrdersCard from "../components/orders/OrdersCard";
import UserContext from "../context/UserContext";

const ordersPageName = "ALL ORDERS";
const ordersPageTitle = "";

const AdminOrders = () => {
    const {currentUser} = useContext(UserContext);

    const userId = currentUser?.id || -1;

    return <>
        <PageHeader pageName={ordersPageName} pageTitle={ordersPageTitle}/>
        <OrdersCard userId={userId} userType="ADMIN"/>
    </>;
};

export default AdminOrders;