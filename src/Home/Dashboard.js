import React,{useEffect,useState} from 'react';
import extensionImg from "../Assets/images/xmark.svg";
import logo1 from "../Assets/images/logo-1.png";
import prospect from "../Assets/images/prospects.svg";
import search from "../Assets/images/search.svg";
import shield from "../Assets/images/shield.svg";
import upload from "../Assets/images/upload-CSV.svg";
import addChrome from "../Assets/images/chrome-ex.svg";
import helpImg from "../Assets/images/help.svg";
import userimg from "../Assets/images/userimg.svg";
import us_er from "../Assets/images/us_er.svg";
import internet_glob from "../Assets/images/internet_glob.svg";
import {DataStore} from "@aws-amplify/datastore";
import {SignUpModel}  from "../models";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
 function Dashboard() {
   
	const [userData,setUserData]=useState([]);
	useEffect(()=>{
		debugger
		getUserData();
	},[])

	const getUserData = async () => {
    const users = await DataStore.query(SignUpModel);
	console.log(users)
	setUserData(users);
   
    }
	const columns = [
		
		{
		  dataField: "firstname",
		  text: "First Name",
		  sort: true
		},
			
		{
			dataField: "firstname",
			text: "Last Name",
			sort: true
		  },
		{
		  dataField: "istermsandcondtionaccepted",
		  text: "Status"
		},
		{
			dataField: "emailaddress",
			text: "Email"
		  },
		  {
			dataField:"createdAt",
			text:"Date"
		  }
	  ];
  return (
    <>
{/* <ToastContainer/> */}
<header className="header-sec">
	<section className="top_sec text-center py-2">
		<p className="mb-0">Click here to install our New <a href="#/" className="green_clr"><b>Chrome Extension</b></a> for Gmail for free!<a href="#/"><img src={extensionImg} className="ps-3"/></a></p>
	</section>
	<nav className="navbar navbar-expand-lg navbar-light nav_menu py-3">
	  <div className="container max-w">
			<a className="navbar-brand order-lg-0 order-2" href="#"><img className="mx-auto" src={logo1} alt="Logo"/></a>
			<button className="navbar-toggler order-lg-0 order-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  <span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
					  <a className="nav-link active d-flex align-items-center" aria-current="page" href="#"><img src={prospect}/>Prospects</a>
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
					  <a className="nav-link d-flex align-items-center" href="/help"><img src={helpImg}/>Help</a>
					</li>
					
				  </ul>
			  </div>
			   
			  <div className="dropdown order-lg-0 order-3">
				  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						<div className="userimg_bx d-flex justify-content-center align-items-center">
							<img src={userimg} alt="user"/>
						  </div>
				  </a>
				  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
					<li><a className="dropdown-item" href="/">LogOut</a></li>
				  </ul>
			</div>
		</div>
	</nav>
  </header>
  <section>
		<div className="form_sec">
			<form className="d-md-flex justify-content-between align-items-center text-center">
				  <div className="d-flex align-items-center position-relative">
					<span>
						<img src={us_er}/>
					</span>
					<div className="px-3">
					  <input type="text" className="form-control-plaintext"  placeholder="First name"/>
					</div>
				  </div>
				   <div className="d-flex align-items-center position-relative">
					<span>
						<img src={us_er}/>
					</span>
					<div className="px-3">
					  <input type="text" className="form-control-plaintext" placeholder="Last name"/>
					</div>
				  </div>
				   <div className="d-flex align-items-center position-relative">
					<span>
						<img src={internet_glob}/>
					</span>
					<div className="px-3">
					  <input type="text" className="form-control-plaintext"  placeholder="Website name"/>
					</div>
				  </div>
				  <a href="#/" className="d-inline-flex justify-content-center align-items-center btn btn_lg primary_bg custom-btn">Find Email</a>
			</form>
		</div>
  </section>
  {
	userData ? 
	<BootstrapTable
        bootstrap4
        keyField="id"
        data={userData}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 5 })}
      />
	:""
  }
  
	</>
  );
}

export default Dashboard;
