import React, { useState } from 'react';
import logo from "../Assets/images/logo.png";
import user from "../Assets/images/user.png";
import loginMail from "../Assets/images/login-mail-icon.svg";
import searchImage from "../Assets/images/search-select.svg";
import googleImg from "../Assets/images/google.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SIGN_UP_USER } from "../GraphQl/mutations";
import { useNavigate } from "react-router-dom";
import { Amplify, API, graphqlOperation,Auth } from 'aws-amplify';
import awsExports from "../aws-exports";
import {SignUpModel}  from "../models"
import {DataStore} from "@aws-amplify/datastore";
Amplify.configure(awsExports);
function SignUp() {
	let navigate = useNavigate();
    const signUpSchema = Yup.object().shape({
		firstname: Yup.string().required("First name is required"),
		lastname: Yup.string().required("Last name is required"),
		emailaddress: Yup.string().email("Invalid email").required("Email is required"),
		password: Yup.string()
			.min(4, "Too Short!")
			.max(50, "Too Long!")
			.required("Password is required"),
		istermsandconditionaccept: Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),

	});

	const signUpUser = async (values)=> {
		try {
	
	     const todo = { ...values }
         const newUser= await DataStore.save(
            new SignUpModel({firstname: todo.firstname, 
                lastname: todo.lastname,
                emailaddress: todo.emailaddress, 
                password: todo.password,
                istermsandconditionaccept:todo.istermsandconditionaccept})
          )
     
		  if(newUser){
			navigate("/");
		  }
		  } catch (err) {
			console.log('error creating:', err)
		  }
		
		}

	return (
		<section className="login-form sign-up">
			<div className="row gx-0">
				<div className="col-md-5">
					<div className="login-right d-flex align-items-center">
						<div>
							<div>
								<img className="mx-auto" src={logo} alt="Logo" />
								<h2 className="text-dark fw_600 mt-40">Create Your Free Account </h2>
								<div className="user-imgbx text-center">
									<img src={user} />
								</div>
								<Formik initialValues={{ firstname: "", lastname: "", emailaddress: "", password: "", istermsandconditionaccept: false }} validationSchema={signUpSchema} onSubmit={signUpUser}>
									<Form className="login-form mt-4">
										<div className="row g-2">
											<div className="col-md-6">
												<Field type="text" name="firstname" className="form-control" placeholder="First Name" />
												<ErrorMessage className="input-feedback" name="firstname" component="div" />

											</div>
											<div className="col-md-6">
												<Field type="text" name="lastname" className="form-control" placeholder="Last Name" />
												<ErrorMessage className="input-feedback" name="lastname" component="div" />

											</div>
										</div>
										<Field type="email" name="emailaddress" className="form-control" placeholder="Email Address" />
										<ErrorMessage className="input-feedback" name="emailaddress" component="div" />
										<Field type="password" name="password" className="form-control mb-0" placeholder="Password" />
										<ErrorMessage className="input-feedback" name="password" component="div" />
										<div className="form-check">
											<Field name="istermsandconditionaccept" type="checkbox" className="form-check-input" />
											<ErrorMessage className="input-feedback" name="istermsandconditionaccept" component="div" />

											<label className="form-check-label" for="exampleCheck1">I agree to getemail.io <span className="green_clr">User Agreement, Privacy Policy, and GDPR Addendum.</span></label>
										</div>

										<button type="submit" className="btn primary_bg custom-btn w-100 btn_md mt-40">Register</button>
									</Form>
								</Formik>
							</div>
							<div className="text-center login-google mt-0">
								<h5 className="mb-md-0 lh_normal">Register with</h5>
								<a href="#!" className="btn primary_bg custom-btn w-100 btn_md mt-40 border-btn d-flex align-items-center justify-content-center"><img src={googleImg} className="me-2" /> Google</a>
							</div>
						</div>
					</div>
				</div>
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
								<h5 className="mb-0 lh_normal">Already have an Account?</h5>
								<a href="/" className="font_16 fw_600 text-light text-decoration-none">Login</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}

export default SignUp;
