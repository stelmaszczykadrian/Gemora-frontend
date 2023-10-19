import {ErrorMessage, Field, Form, Formik, FormikProps} from "formik";
import * as Yup from 'yup';
import ContactCard from "./ContactCard";
import './ContactBox.css';
import React from "react";

interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

export default function ContactBox(){
    const data = [
        {
            iconClassName: 'bx bxl-linkedin contact-card-icon',
            title: 'LinkedIn',
            link: 'https://linkedin.com/in/stelmaszczykadrian',
            buttonText: 'LinkedIn profile',
        },
        {
            iconClassName: 'bx bxl-github contact-card-icon',
            title: 'GitHub',
            link: 'https://github.com/stelmaszczykadrian',
            buttonText: 'GitHub profile',
        },
        {
            iconClassName: 'bx bx-mail-send contact-card-icon',
            title: 'Email',
            link: 'mailto:stelmaszczykadrian@gmail.com',
            buttonText: 'Write me',
        },
    ];

    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required.')
            .min(3, "Name too short.")
            .max(20, "Name too long."),
        email: Yup.string().email('Invalid email').required('Email is required.'),
        message: Yup.string()
            .required('Message is required.')
            .max(500, 'Max 500 characters.'),
    });

    const sendEmail = (e: React.MouseEvent, formik: FormikProps<ContactFormValues>) => {
        console.log('test');
    };

    return(
        <div className="contact-section">
            {/*<h2 className="contact-section-title">*/}
            {/*    Contact Us!*/}
            {/*</h2>*/}
            <div className="container">
                <div className="register-top-section">
                    <h1 className="register-section-title">Contact Us</h1>
                    <p className="register-divider"></p>
                    <p className="register-txt">We are happy to help you with any questions you may have. Please do not hesitate to call or contact us via the enquiry form below. Alternatively if you would like to visit our showroom please click below to arrange an appointment.</p>
                </div>
            </div>
            <div className="contact-info-container contact-container contact-grid">
                <div className="contact-content">
                    <div className="contact-info">
                        {data.map(({ iconClassName, title, link, buttonText }, index) => (
                            <ContactCard
                                key={index}
                                iconClassName={iconClassName}
                                title={title}
                                link={link}
                                buttonText={buttonText}
                            />
                        ))}
                    </div>
                </div>
                <div className="contact-content">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            // Handle your form submission here, e.g., send an email
                            console.log('Form values:', values);

                            // Reset the form after successful submission
                            resetForm();
                        }}
                    >
                        <Form>
                            <div className="contact-form">
                                <div className="contact-form-div">
                                    <label className="contact-form-tag" htmlFor="name">Name</label>
                                    <Field name="name" type="text" className="contact-form-input" placeholder="Insert your name"/>
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="error-message"
                                    />
                                </div>
                            </div>
                            <div className="contact-form">
                                <div className="contact-form-div">
                                    <label className="contact-form-tag" htmlFor="email">Email</label>
                                    <Field name="email" type="email" className="contact-form-input" placeholder="Insert your email"/>
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="error-message"
                                    />
                                </div>
                            </div>
                            <div className="contact-form">
                                <div className="contact-form-div">
                                    <label className="contact-form-tag" htmlFor="message">Message</label>
                                    <Field
                                        as="textarea"
                                        name="message"
                                        type="message"
                                        className="contact-form-input custom-textarea"
                                        placeholder="Write your message"
                                    />
                                    <ErrorMessage
                                        name="message"
                                        component="div"
                                        className="error-message"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="contact-button button-flex contact-button-send">
                                {"Send message"}
                                <i className={"uil uil-message contact-button-send-icon"}></i>
                            </button>
                        </Form>
                    </Formik>
                </div>

            </div>
        </div>
    );
}