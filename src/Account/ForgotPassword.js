import React from 'react';
import logo from "../Assets/images/logo.png";

 function ForgotPassword() {
  return (

    <section className="login-form forgot_pass_sec">
		<div className="login-right d-flex align-items-center">
			<div>
				<div className="forfot-pass text-center">
					<img className="mx-auto" src={logo} alt="Logo" />
					<h2 className="text-dark fw_600 mt-40">Forgot Password?</h2>
					<h6 className="mt-5 text-dark px-2">Enter your email and we'll send you your recovery details.</h6>
					<form className="login-form mt-40">
						  <input type="email" className="form-control" placeholder="Email Address" id="email"/>
						  <button type="submit" className="btn primary_bg custom-btn w-100 btn_md mt-40">Send Email</button>
					</form>
				</div>
				<div className="text-center margin_top">
					<p>GetEmail is the best tool to find people's emails © 2014-2022 v.O</p>
				</div>
			</div>
		</div>
	</section>
    
  )
}

export default ForgotPassword;
