
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert
import 'sweetalert2/dist/sweetalert2.css'; // Import SweetAlert styles
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async ({ email, password }) => {
    try {
      const response = await axios.post('https://cleanease-be.onrender.com/api/users/login', { email, password });
      console.log(response.data); // Log the response data for debugging
  
      // Store user information in local storage
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      
  
      // Show success message using SweetAlert
      await Swal.fire({
        icon: 'success',
        title: 'Login successful',
        showConfirmButton: false,
        timer: 2000, // Display the success message for 2 seconds
        timerProgressBar: true // Show timer progress bar
      });
  
      // Navigate to home page after displaying the success message
      navigate('/home');
      window.location.reload(); // Refresh the page
    } catch (error) {
      console.error('Login error:', error);
  
      if (error.response && error.response.status === 400) {
        // Show error message using SweetAlert
        await Swal.fire({
          icon: 'error',
          title: 'Invalid email or password',
        });
      } else {
        // Show error message using SweetAlert
        await Swal.fire({
          icon: 'error',
          title: 'Unexpected server response',
        });
      }
    }
  };
  
  
  return (
    <section className="vh-10 d-flex justify-content-center align-items-center" style={{ backgroundImage:
     `url(https://cdn.dribbble.com/userupload/10455062/file/original-3a22add8e67b37968d34b4ce95f3d5a3.png?resize=400x300&vertical=center)`,
     
     backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <ToastContainer />
       <div className="container h-100">
        <div className="row justify-content-center">
        <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <Formik
                      initialValues={{
                        email: '',
                        password: '',
                      }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {formik => (
                        <Form className="mx-1 mx-md-4" onSubmit={formik.handleSubmit}>
                          <div className="mb-4">
                            <Field type="email" id="email" name="email" className="form-control" placeholder="Your Email" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                          </div>
                          <div className="mb-4">
                            <Field type="password" id="password" name="password" className="form-control" placeholder="Password" />
                            <ErrorMessage name="password" component="div" className="text-danger" />
                          </div>
                          <div className="form-check mb-4">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label className="form-check-label" htmlFor="form2Example3c">
                              Remember me
                            </label>
                          </div>
                          <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-lg">Sign in</button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src=
                    "https://c8.alamy.com/comp/GX1GWK/safety-concept-login-on-digital-background-GX1GWK.jpg"
                      className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;





