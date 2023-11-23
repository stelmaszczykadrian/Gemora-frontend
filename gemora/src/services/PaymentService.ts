import {payUconfig} from "../env";
import {createOrder} from "../api/OrderApi";

export async function initiatePayment(totalValue: number) {
    try {
        const paymentData = {
            description: payUconfig.description,
            totalAmount: totalValue * 100
        };

        return await createOrder(paymentData);
    } catch (error) {
        console.error("Error initiating PayU payment:", error);
        throw new Error("Payment initiation failed");
    }
}