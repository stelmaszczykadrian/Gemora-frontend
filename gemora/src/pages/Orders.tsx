import React from "react";
import PageHeader from "../components/ui/pageheader/PageHeader";
import OrdersCard from "../components/orders/OrdersCard";

const ordersPageName = "ALL ORDERS";
const ordersPageTitle = "";

const Orders = () => {
    return <>
        <PageHeader pageName={ordersPageName} pageTitle={ordersPageTitle} />
        <OrdersCard/>
    </>;
};

export default Orders;