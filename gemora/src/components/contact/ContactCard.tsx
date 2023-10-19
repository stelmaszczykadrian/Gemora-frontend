import React from 'react';

interface ContactCardProps {
    iconClassName: string; // Define the type for iconClassName
    title: string;
    link: string;
    buttonText: string;
}

function ContactCard({ iconClassName, title, link, buttonText }: ContactCardProps) {
    return (
        <div className="contact-card">
            <i className={iconClassName}></i>
            <h3 className="contact-card-title">{title}</h3>
            <a href={link} className="contact-card-button">
                {buttonText} <i className="bx bx-right-arrow-alt contact-card-button-icon"></i>
            </a>
        </div>
    );
}

export default ContactCard;
