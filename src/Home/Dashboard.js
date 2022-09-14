import React, { useEffect, useState } from 'react';
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
import setting_icon from "../Assets/images/setting-icon.svg";
import { DataStore } from "@aws-amplify/datastore";
import { SignUpModel } from "../models";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import columns from "../Common/tableColumn"

function Dashboard() {

	const [userData, setUserData] = useState([]);
	const [newList,setNewList]=useState([]);
	const [findEmail, setFindEmail] = useState([]);
	const [selectedColumns, setSelectedColumns] = useState(columns)

	const findEmailSchema = Yup.object().shape({
        firstname: Yup.string(),
		lastname: Yup.string(),
		website: Yup.string(),
    });
	
	useEffect(() => {
		getUserData();
	}, [])

	const getUserData = async () => {
		const users = await DataStore.query(SignUpModel);
		setUserData(users);
		setNewList(users);
	}

	const findEmails = async (values) => {
		
		let isEmail 
		if(values.firstname != '' && values.lastname != '' && values.website == '')
			isEmail = userData.filter(x => x.firstname === values.firstname && x.lastname === values.lastname);
		else if(values.firstname != '' && values.lastname == '')
			isEmail = userData.filter(x => x.firstname === values.firstname);
		else if(values.firstname == '' && values.lastname != '')
			isEmail = userData.filter(x => x.lastname === values.lastname);
		else
			isEmail = userData.filter(x => x.firstname === values.firstname || x.lastname === values.lastname || x.website === values.website);

		setFindEmail(isEmail)
    }

	const keyupHandle = (event) => {
		
		if(event.target.value){
			let lowerCased = event.target.value.toLowerCase();
			const userFilterList = newList.filter(item => 
				Object.keys(item)
				  .some((key) => {
				  if(typeof item[key] == 'string'){
					return item[key].toString().includes(lowerCased)
				  }
				  return null
				})
			 );
			setUserData(userFilterList);
		}
		else {
			setUserData(newList);
		}
	}

	const selectedColumn = index => e => {
		let array = [...selectedColumns];
		if(array[index].text == e.target.value){
			array[index].check = !array[index].check
		};
		setSelectedColumns(array);		
	}
	

	return (
		<>
			{/* <ToastContainer/> */}
			<header className="header-sec">
				<section className="top_sec text-center py-2">
					<p className="mb-0">Click here to install our New <a href="#/" className="green_clr"><b>Chrome Extension</b></a> for Gmail for free!<a href="#/"><img src={extensionImg} className="ps-3" /></a></p>
				</section>
				<nav className="navbar navbar-expand-lg navbar-light nav_menu py-3">
					<div className="container max-w">
						<a className="navbar-brand order-lg-0 order-2" href="#"><img className="mx-auto" src={logo1} alt="Logo" /></a>
						<button className="navbar-toggler order-lg-0 order-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link active d-flex align-items-center" aria-current="page" href="#"><img src={prospect} />Prospects</a>
								</li>
								<li className="nav-item">
									<a className="nav-link d-flex align-items-center" href="#"><img src={search} />Search</a>
								</li>
								<li className="nav-item">
									<a className="nav-link d-flex align-items-center" href="#"><img src={shield} />Verify</a>
								</li>
								<li className="nav-item">
									<a className="nav-link d-flex align-items-center" href="#"><img src={upload} />Upload CSV</a>
								</li>
								<li className="nav-item">
									<a className="nav-link d-flex align-items-center" href="#"><img src={addChrome} />Add Chrome Extension</a>
								</li>
								<li className="nav-item">
									<a className="nav-link d-flex align-items-center" href="/help"><img src={helpImg} />Help</a>
								</li>

							</ul>
						</div>

						<div className="dropdown order-lg-0 order-3">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								<div className="userimg_bx d-flex justify-content-center align-items-center">
									<img src={userimg} alt="user" />
								</div>
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a className="dropdown-item" href="/">LogOut</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
			<section className="form_sec">
				<Formik initialValues={{ firstname: "", lastname: "", website:""}} validationSchema={findEmailSchema} onSubmit={findEmails}>
					<Form className="d-md-flex justify-content-between align-items-center text-center">
					<div className="d-flex align-items-center position-relative">
						<span>
							<img src={us_er} />
						</span>
						<div className="px-3">
							<Field type="text" name="firstname" className="form-control-plaintext" placeholder="First name" />
						</div>
					</div>
					<div className="d-flex align-items-center position-relative">
						<span>
							<img src={us_er} />
						</span>
						<div className="px-3">
							<Field type="text" name="lastname" className="form-control-plaintext" placeholder="Last name" />
						</div>
					</div>
					<div className="d-flex align-items-center position-relative">
						<span>
							<img src={internet_glob} />
						</span>
						<div className="px-3">
							<Field type="text" name="website" className="form-control-plaintext" placeholder="Website name" />	
						</div>
					</div>
					<button type="submit" className="d-inline-flex justify-content-center align-items-center btn btn_lg primary_bg custom-btn">Find Email</button>
					</Form>
				</Formik>
			</section>
			
			<div className='container max-w custom_table'>
				{
					findEmail.length !=0 ?
						<BootstrapTable
							bootstrap4
							keyField="id"
							data={findEmail}
							columns={columns}
							pagination={paginationFactory({ sizePerPage: 5 })}
						/>
						: null
				}
			</div>

			<div className='Search-form my-4'>
				<div className='container max-w text-end'>
					<div className='d-flex align-items-center'>
						<form className='overflow-hidden w-100 position-relative'>
							<input type='text' placeholder='Enter search query here' onChange={(e) => keyupHandle(e)} className='w-100 border-0 outline-none shadow-none h-100' />
							<button type='submit'><img src={search} /></button>
						</form>
						
						<div className="dropdown">
							<img className='ms-3' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" src={setting_icon} />
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								<li className='m-2'>
								{columns ? columns.map((item, index)=>{
									return(
									<div className="form-check" key={index}>
										<label className="form-check-label" for={`flexCheckDefault${index}`}>
										<input className="form-check-input" type="checkbox" checked={item.check} value={item.text} id={`flexCheckDefault${index}`} onChange={selectedColumn(index)}/>
										{item.text}</label>
									</div>
									)
								}): null}
								</li>
							</ul>
						</div>	
					</div>
				</div>
			</div>
			<div className='container max-w custom_table'>
				{
					userData.length !=0 ?
						<BootstrapTable
							bootstrap4
							keyField="id"
							data={userData}
							columns={selectedColumns.filter(x=> x.check == true)}
							pagination={paginationFactory({ sizePerPage: 5 })}
						/>
						: "No data to show"
				}
			</div>
		</>
	);
}

export default Dashboard;
