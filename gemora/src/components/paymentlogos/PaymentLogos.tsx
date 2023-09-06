import React from 'react';
import './PaymentLogos.css'
import visa from '../../assets/payment/logo-visa.jpg';
import masterCard from '../../assets/payment/logo-mastercard.svg';
import certum from '../../assets/payment/certum_pl_ev.svg';
import payU from '../../assets/payment/payu-logo.svg';
import blik from '../../assets/payment/logo-blik.svg';

function PaymentLogos() {
    return (
        <div className="product-details-logo-container">
            <img className="product-details-logo-image" src={visa} alt="Visa Logo" />
            <img className="product-details-logo-image" src={masterCard} alt="Master Card Logo" />
            <img className="product-details-logo-image" src={certum} alt="Certum Logo" />
            <img className="product-details-logo-image" src={payU} alt="PayU Logo" />
            <img className="product-details-logo-image" src={blik} alt="Blik Logo" />
        </div>
    );
}

export default PaymentLogos;