import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";
import * as Yup from "yup";
import {toast} from "react-toastify";
import './ContactBox.css';

export interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

export default function ContactBox() {
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

    const handleSubmit = async (
        values: ContactFormValues,
        {setSubmitting}: FormikHelpers<ContactFormValues>
    ) => {
        try {

        } catch (error) {
            console.error('Error sending data to backend:', error);
            toast.error('Something goes wrong.');
        } finally {
            setSubmitting(false);
        }
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
                                onSubmit={handleSubmit}
                            >
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <Field name="name" type="text" className="form-control contact-form-field" placeholder="Write your name"/>
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
                                            // type="textarea"
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}