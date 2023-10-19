import React from 'react';
import {Formik, Form, Field, ErrorMessage, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import './RegisterBox.css';
import {registerUser} from "../../api/AuthApi";
import {toast} from "react-toastify";

export interface RegisterFormValues {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

const RegisterBox = () => {
    const initialValues: RegisterFormValues = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    };

    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required('First name is required.'),
        lastname: Yup.string().required('Last name is required.'),
        email: Yup.string().email('Invalid email').required('Email is required.'),
        password: Yup.string().required('Password is required.'),
    });

    const handleSubmit = async (
        values: RegisterFormValues,
        {setSubmitting}: FormikHelpers<RegisterFormValues>
    ) => {
        try {
            const response = await registerUser(values);
            console.log('Response from backend:', response);
            toast.success("Customer account created.")
            navigate('/login');
        } catch (error) {
            console.error('Error sending data to backend:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 register-container">
                    <div className="register-card-container">
                        <div className="form-container">
                            <div className="register-top-section">
                                <h1 className="register-section-title">New Customer</h1>
                                <p className="register-divider"></p>
                                <p className="register-txt">Create an account to check our items and place orders.</p>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="firstname">First name</label>
                                        <Field name="firstname" type="text" className="form-control register-form-field"
                                               placeholder="Write your name"/>
                                        <ErrorMessage
                                            name="firstname"
                                            component="div"
                                            className="alert alert-danger register-form-field"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Last name</label>
                                        <Field name="lastname" type="text" className="form-control register-form-field"
                                               placeholder="Write your last name"/>
                                        <ErrorMessage
                                            name="lastname"
                                            component="div"
                                            className="alert alert-danger register-form-field"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field name="email" type="email" className="form-control register-form-field"
                                               placeholder="Write your email"/>
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="alert alert-danger register-form-field"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field
                                            name="password"
                                            type="password"
                                            className="form-control register-form-field"
                                            placeholder="Write your password"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="alert alert-danger register-form-field"
                                        />
                                    </div>
                                    <div className="form-group text-center mt-4">
                                        <button type="submit" className="register-button">
                                            CREATE CUSTOMER ACCOUNT
                                        </button>
                                    </div>
                                    <div className="register-alreadyhaveaccount">
                                        Already have an account?
                                        <a href="/login" className="log-in">Sign in here</a>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterBox;