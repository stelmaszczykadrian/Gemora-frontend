import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import React, {useRef, useState} from "react";
import * as Yup from "yup";
import {toast} from "react-toastify";
import './ContactBox.css';
import {GoogleReCaptcha, GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {emailJsConfig, recaptchaConfig} from "../../env";
import emailjs from '@emailjs/browser';

export interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

export default function ContactBox() {
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);

    const initialValues: ContactFormValues = {
        name: '',
        email: '',
        message: ""
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required.'),
        email: Yup.string().email('Invalid email').required('Email is required.'),
        message: Yup.string().required('Message is required'),
    });

    const sendEmail = (values: ContactFormValues, formik: FormikHelpers<ContactFormValues>) => {
        if (!formRef.current) {
            toast.error("Form reference is missing.");
            return;
        }

        emailjs.sendForm(
            emailJsConfig.SERVICE_ID,
            emailJsConfig.TEMPLATE_ID,
            formRef.current,
            emailJsConfig.PUBLIC_KEY
        ).then(
            (result) => {
                toast.success("Thanks for the message. I'll answer soon.");
                formik.resetForm();
            },
            (error) => {
                toast.error("Something went wrong.");
            }
        );
    };

    const handleRecaptchaChange = (value: string | null) => {
        setIsVerified(false)
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 contact-container">
                    <div className="contact-card-container">
                        <div className="contact-form-container">
                            <div className="contact-top-section">
                                <h1 className="contact-section-title">Contact Us</h1>
                                <p className="contact-divider"></p>
                                <p className="contact-txt">If you have any questions or concerns, please contact us.</p>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={(values, formik) => sendEmail(values, formik)}
                            >
                                <Form ref={formRef}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <Field name="name" type="text" className="form-control contact-form-field"
                                               placeholder="Write your name"/>
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="alert alert-danger contact-form-field"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail</label>
                                        <Field
                                            name="email"
                                            type="email"
                                            className="form-control contact-form-field"
                                            placeholder="Write your e-mail"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="alert alert-danger contact-form-field"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <Field
                                            name="message"
                                            as="textarea"
                                            className="form-control contact-form-field contact-text-area"
                                            placeholder="Write your message"
                                        />
                                        <ErrorMessage
                                            name="message"
                                            component="div"
                                            className="alert alert-danger contact-form-field"
                                        />
                                    </div>
                                    <div className="form-group text-center mt-4">
                                        <button type="submit" className="contact-button">
                                            Send message
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                            <GoogleReCaptchaProvider reCaptchaKey={recaptchaConfig.REACT_APP_SITE_KEY}>
                                <GoogleReCaptcha onVerify={handleRecaptchaChange}/>
                            </GoogleReCaptchaProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}