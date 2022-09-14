import React ,{useState}from 'react';
import logo from "../Assets/images/logo-1.png";
import prospects from "../Assets/images/prospects.svg";
import search from "../Assets/images/search.svg";
import shield from "../Assets/images/shield.svg";
import upload from "../Assets/images/upload-CSV.svg";
import addChrome from "../Assets/images/chrome-ex.svg";
import helpImg from "../Assets/images/help.svg";
import userimg from "../Assets/images/userimg.svg";
import arrow from "../Assets/images/arrow-up.svg";
import { Amplify, API, Storage } from 'aws-amplify'

 function Help() {
	
	const uploadImage = async (event) => {
     const result= await Storage.put(event.target.files[0].name
		,event.target.files[0],{
		contentType:event.target.files[0].type

	 });
		console.log(result);
	 }
  return(
<>
<header className="header-sec">
	<nav className="navbar navbar-expand-lg navbar-light nav_menu py-3">
	  <div className="container max-w">
			<a className="navbar-brand" href="#"><img className="mx-auto" src={logo} alt="Logo"/></a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  <span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
					  <a className="nav-link active d-flex align-items-center" aria-current="page" href="#"><img src={prospects}/>Prospects</a>
					</li>
					<li className="nav-item">
					  <a className="nav-link d-flex align-items-center" href="#"><img src={search}/>Search</a>
					</li>
					<li className="nav-item">
					  <a className="nav-link d-flex align-items-center" href="#"><img src={shield}/>Verify</a>
					</li>
					<li className="nav-item">
					  <a className="nav-link d-flex align-items-center" href="#"><img src={upload}/>Upload CSV</a>
					</li>
					<li className="nav-item">
					  <a className="nav-link d-flex align-items-center" href="#"><img src={addChrome}/>Add Chrome Extension</a>
					</li>
					<li className="nav-item">
					  <a className="nav-link d-flex align-items-center" href="#"><img src={helpImg}/>Help</a>
					</li>
					
				  </ul>
			  </div>
			   
			  <div className="dropdown">
				  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						<div className="userimg_bx d-flex justify-content-center align-items-center">
							<img src={userimg} alt="user"/>
						  </div>
				  </a>
				  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><hr className="dropdown-divider"/></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				  </ul>
			</div>
		</div>
	</nav>
  </header>
  <h2 className="text-center head-ing pt-5">Send us a bug report or any other notification</h2>
  <section className="help-form-sec">
		<div className="help-form">
			<form className="">
				<div className="mb-4">
					 <label for="floatingTextarea2" className="mb-3">Enter your problem description</label>
					 <textarea className="form-control" placeholder="Please describe the problem in details" rows="4" id="floatingTextarea2"></textarea>
				</div>
				<div className="mb-4">
				  <label  className="mb-3 form-label">Attach printscreen (several files can be selected)</label>
				  <div className="position-relative upload-custom d-flex justify-content-center align-items-center">
					<label for="formFileLg" className="form-label"><img src={arrow} className="me-3"/>Click or Drag and Drop files here to upload.</label>
					<input className="form-control form-control-lg" accept="image/*" onChange={(e)=>uploadImage(e)} type="file"/>
				  </div>
				</div>
				<div className="text-center pt-3">
				<a href="#/" className="d-inline-flex justify-content-center align-items-center btn btn_lg primary_bg custom-btn">Send Report</a>
				</div>
			</form>
		</div>
  </section>
</>

  );
}

export default Help;
