import React from 'react';
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import './LoginBox.css';
import {toast} from "react-toastify";
import {authenticateUser} from "../../api/AuthApi";

export interface LoginFormValues {
    email: string;
    password: string;
}

const LoginBox = () => {
    const navigate = useNavigate();

    const initialValues: LoginFormValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required.'),
        password: Yup.string().required('Password is required.'),
    });

    const handleSubmit = async (
        values: LoginFormValues,
        {setSubmitting}: FormikHelpers<LoginFormValues>
    ) => {
        try {
            const response = await authenticateUser(values);
            console.log('Response from backend:', response);
            localStorage.setItem('token', JSON.stringify(response));
            navigate('/');
            toast.success('You are logged in.');
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
                <div className="col-12 col-md-8 col-lg-6 login-container">
                    <div className="login-card-container">
                        <div className="login-form-container">
                            <div className="login-top-section">
                                <h1 className="login-section-title">Sign In</h1>
                                <p className="login-divider"></p>
                                <p className="login-txt">Log in to be part of the community.</p>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field name="email" type="text" className="form-control login-form-field"/>
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="alert alert-danger login-form-field"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field
                                            name="password"
                                            type="password"
                                            className="form-control login-form-field"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="alert alert-danger login-form-field"
                                        />
                                    </div>
                                    <div className="login-forgot-link">
                                        <a href="#">Forgot your password?</a>
                                    </div>
                                    <div className="form-group text-center mt-4">
                                        <button type="submit" className="login-button">
                                            SIGN IN
                                        </button>
                                    </div>
                                    <div className="login-signup-section">
                                        <a href="/register" className="login-signup">Sign up</a>
                                        and join to our community!
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

export default LoginBox;