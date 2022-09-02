import React from 'react';
import { Auth } from 'aws-amplify'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import loginMail from "../Assets/images/login-mail-icon.svg";
import searchImage from "../Assets/images/search-select.svg";
import logo from "../Assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import {DataStore} from "@aws-amplify/datastore";
import {SignUpModel}  from "../models"

import { Amplify, API, graphqlOperation } from 'aws-amplify'
import awsExports from "../aws-exports";
Amplify.configure(awsExports);
function SignIn() {

    let navigate = useNavigate();
    const loginSchema = Yup.object().shape({
        password: Yup.string()
            .min(4, "Too Short!")
            .max(50, "Too Long!")
            .required("Password is required"),
        emailaddress: Yup.string().email("Invalid email").required("Email is required")
    });

    const LoggedIn = async (values) => {
  
        const loginUserModal = await DataStore.query(SignUpModel);
        const isUserExist=loginUserModal.filter(x=>x.emailaddress==values.emailaddress && x.password==values.password);
        debugger;
       if (isUserExist) {
            navigate("/dashboard");
      }
        
    }

    return (
        <section className="login-form">
            <div className="row gx-0">
                <div className="col-md-7">
                    <div className="login-left d-flex align-items-center">
                        <div>
                            <div>
                                <h1 className="fw_600 mb-4">GetEmail is the best tool to find people's emails</h1>
                                <p className="text_secondary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                <div className="text-center login_malicon">
                                    <img src={loginMail} alt="login-mail-icon" />
                                </div>
                                <div className="text-center search_select">
                                    <img className="mx-auto" src={searchImage} alt="Search Select Send" />
                                </div>
                            </div>
                            <div className="reg-account d-sm-flex align-content-center justify-content-between">
                                <h5 className="mb-0 lh_normal">Don’t have an Account? </h5>
                                <a href="/signup" className="font_16 fw_600 text-light text-decoration-none">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="login-right d-flex align-items-center">
                        <div>
                            <div>
                                <img className="mx-auto" src={logo} alt="Logo" />
                                <h2 className="text-dark fw_600 mt-40">Welcome Back</h2>
                                <Formik initialValues={{ emailaddress: "", password: "" }} validationSchema={loginSchema} onSubmit={LoggedIn}>
                                    <Form className="login-form mt-40">
                                        <Field type="email" name="emailaddress" className="form-control" placeholder="Email Address" />
                                        <ErrorMessage className="input-feedback" name="emailaddress" component="div" />
                                        <Field type="password" name="password" className="form-control mb-0" placeholder="Password" />
                                        <ErrorMessage className="input-feedback" name="password" component="div" />

                                        <button type="submit" className="btn primary_bg custom-btn w-100 btn_md mt-40">Login</button>
                                        <div className="text-end"><a href="/forgotpassword" className="forget-pass text-decoration-none mt-3 d-inline-block">Forgot Password?</a></div>
                                    </Form>
                                </Formik>

                            </div>
                            <div className="text-center login-google">
                                {/* <GoogleLogin
                  clientId="131223797034-m164o2jrpno9f72sgttj3kpdgseq3eg3.apps.googleusercontent.com"
                  isSignedIn={true} /> */}
                                <button onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>
                                     Login in with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SignIn;
