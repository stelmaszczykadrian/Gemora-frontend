import {payUconfig} from "../env";
import {createOrder} from "../api/OrderApi";

export async function initiatePayment(totalValue: number) {
    try {
        const paymentData = {
            customerIp: payUconfig.customerIp,
            merchantPosId: payUconfig.merchantPosId,
            currencyCode: payUconfig.currencyCode,
            description: payUconfig.description,
            totalAmount: totalValue * 100
        };

        const order = await createOrder(paymentData);
        return order;
    } catch (error) {
        console.error("Error initiating PayU payment:", error);
        throw new Error("Payment initiation failed");
    }
}