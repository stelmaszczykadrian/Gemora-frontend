import React from 'react';
import './PaymentLogos.css'
import visaLogo from '../../../assets/payment/logo-visa.jpg';
import masterCardLogo from '../../../assets/payment/logo-mastercard.svg';
import certumLogo from '../../../assets/payment/certum_pl_ev.svg';
import payULogo from '../../../assets/payment/payu-logo.svg';
import blikLogo from '../../../assets/payment/logo-blik.svg';


const paymentLogos = [
    { src: visaLogo, alt: "Visa Logo" },
    { src: masterCardLogo, alt: "Master Card Logo" },
    { src: certumLogo, alt: "Certum Logo" },
    { src: payULogo, alt: "PayU Logo" },
    { src: blikLogo, alt: "Blik Logo" },
];

function PaymentLogos() {
    return (
        <div className="product-details-logo-container">
            {paymentLogos.map((logo, index) => (
                <img key={index} className="product-details-logo-image" src={logo.src} alt={logo.alt} />
            ))}
        </div>
    );
}

export default PaymentLogos;