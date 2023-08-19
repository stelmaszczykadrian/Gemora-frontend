import React from 'react';
import {Formik, Form, Field, ErrorMessage, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {BaseUrl} from "../../constants/constants";

interface FormValues {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

const Register = () => {
    const initialValues: FormValues = {
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

    const handleSubmit = (
        values: FormValues,
        {setSubmitting}: FormikHelpers<FormValues>
    ) => {
        console.log(values); //async await zamiast then i catcha
        axios
            .post(`${BaseUrl}/api/v1/auth/register`, values)
            .then((response) => {
                console.log('Response from backend:', response.data);
                navigate('/');
                setSubmitting(false);
            })
            .catch((error) => {
                console.error('Error sending data to backend:', error);
                setSubmitting(false);
            });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card card-container">
                        <div className="d-flex justify-content-center">
                            <img
                                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                                alt="profile-img"
                                className="profile-img-card"
                            />
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="firstname">First name</label>
                                    <Field name="firstname" type="text" className="form-control"/>
                                    <ErrorMessage
                                        name="firstname"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">Last name</label>
                                    <Field name="lastname" type="text" className="form-control"/>
                                    <ErrorMessage
                                        name="lastname"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field name="email" type="email" className="form-control"/>
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        name="password"
                                        type="password"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                </div>
                                <div className="form-group text-center mt-4">
                                    <button type="submit" className="btn btn-primary">
                                        Sign Up
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;