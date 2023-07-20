import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import * as Yup from "yup";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

interface FormValues {
    email: string;
    password: string;
}

const Login = () => {
    const navigate = useNavigate();

    const initialValues: FormValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required.'),
        password: Yup.string().required('Password is required.')
    });

    const handleSubmit = (
        values: FormValues,
        { setSubmitting }: FormikHelpers<FormValues>
    ) => {
        console.log(values);
        axios.post('http://localhost:8080/api/v1/auth/authenticate', values)
            .then(response => {
                // Handle the response from the backend if needed
                console.log('Response from backend:', response.data);

                if (response.data.access_token) {
                    localStorage.setItem("token", JSON.stringify(response.data));
                }
                navigate('/');
                setSubmitting(false);
                return response.data;

            })
            .catch(error => {
                console.error('Error sending data to backend:', error);
                setSubmitting(false);
            });
    };

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className="form-control" />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="alert alert-danger"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className="form-control" />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="alert alert-danger"
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">
                                <span>Login</span>
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Login;