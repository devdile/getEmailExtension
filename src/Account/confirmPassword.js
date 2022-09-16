import React from "react";
import Modal from "react-modal";
import { Auth } from "aws-amplify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import loginMail from "../Assets/images/login-mail-icon.svg";
import searchImage from "../Assets/images/search-select.svg";
import logo from "../Assets/images/logo.png";
import googleImg from "../Assets/images/google.svg";
import { useNavigate } from "react-router-dom";
import { SignUpModel } from "../models";
import extensionImg from "../Assets/images/xmark.svg";
import {DataStore} from "@aws-amplify/datastore";

import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const customStyles = {
  content: {
    height: "430px",
    width: "30vw",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ConfirmPassword(props) {
  let navigate = useNavigate();
  const { username, openModel, closeModal, formData } = props;
  const confirmEmail = Yup.object().shape({
    otp: Yup.string().required("OTP is required"),
  });

  const confirmSignUp = async (values) => {
    try {
      await Auth.confirmSignUp(username, values.otp).then((user) => {
        DataStore.save(
          new SignUpModel({
            firstname: formData.firstname,
            lastname: formData.lastname,
            emailaddress: formData.emailaddress,
            password: formData.password,
            istermsandconditionaccept: formData.istermsandconditionaccept,
          })
        );
        navigate("/");
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <Modal
          isOpen={openModel}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={false}
        >
          <div className="text-end" onClick={closeModal}>
            <img src={extensionImg} className="ps-3" />
          </div>

          <div>
            <img className="mx-auto" src={logo} alt="Logo" />
            <h2 className="text-dark fw_600 mt-40">Confirm your account</h2>
            <Formik
              initialValues={{ otp: "" }}
              validationSchema={confirmEmail}
              onSubmit={confirmSignUp}
            >
              <Form className="login-form mt-40">
                <Field
                  type="otp"
                  name="otp"
                  className="form-control"
                  placeholder="Enter OTP"
                />
                <ErrorMessage
                  className="input-feedback"
                  name="otp"
                  component="div"
                />
                <button
                  type="submit"
                  className="btn primary_bg custom-btn w-100 btn_md mt-40"
                >
                  Confirm account
                </button>
                <div className="text-center forget-pass">
                  Didn't receive a code?{" "}
                  <a
                    href="#"
                    className="forget-pass text-decoration-none mt-3 d-inline-block"
                  >
                    Resend code
                  </a>
                </div>
              </Form>
            </Formik>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ConfirmPassword;
