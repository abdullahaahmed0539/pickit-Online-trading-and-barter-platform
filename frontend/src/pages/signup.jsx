import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import validator from "validator";

import  OpenedEye from "../Components/EyeClosed";
import  ClosedEye  from "../Components/EyeOpened";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const toggleEyeButton = elementToChange => {
    if (elementToChange === 'password'){
        (passwordType === "password") ? setPasswordType("text"): setPasswordType("password");
    }else{
        (confirmPasswordType === "password") ? setConfirmPasswordType("text"): setConfirmPasswordType("password");
    }
  };

  const emailValidator = (email) => {
    return validator.isEmail(email);
  };

  const passwordFormatValidator = (password) => {
    const criteria = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 2,
      minSymbols: 0,
    };
    if (validator.isStrongPassword(password, criteria)) {
      return true;
    } else {
      return false;
    }
  };


  const submitForm = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
      email: email,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/users/signup",
        data
      );
      if (response.status === 201 && response.data) {
        //Saving the username & token in localstorage
        window.location = "/login";
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        alert("Invalid user or password");
      }
    }
  };

  return (
    <div className="container-fluid ">
      <div className="row ">
        <div className="col-md-7" style={{ background: "#92CDE6" }}>
          <img
            src="https://businessmodelnavigator.com/img/navigator-pattern-img-2/5.png"
            className="img-fluid rounded-start "
            alt="..."
            style={{ height: "93vh" }}
          />
        </div>
        <div className="col-md-5 mt-5">
          <div className="container">
            <h1>Welcome to PickIt.</h1>
            <p>
              A place where you can buy or exchange whatever you want. Who said
              barter system was past?
              <strong> Login now to find the best products online!</strong>
            </p>

            <div className="card">
              <div className="card-body container">
                <form onSubmit={submitForm}>
                  <div className="row">
                    <div className="form-group ">
                      <label className="form-label">
                        <strong>Username</strong>
                      </label>
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Enter your username here"
                        autoFocus
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mt-3">
                      <label className="form-label">
                        <strong>Email</strong>
                      </label>
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        className="form-control"
                        placeholder="Enter your email here"
                      />
                    </div>
                    {email!=='' && !emailValidator(email) && (
                      <div className="" style={{ color: "red" }}>
                        Please provide a valid email.
                      </div>
                    )}
                  </div>

                  <div className="row">
                    <div className="form-group mt-3">
                      <label className="form-label">
                        <strong>Password</strong>
                      </label>

                      {passwordType === "password" && <OpenedEye toggleEye = {() => toggleEyeButton('password')}/> }
                      {passwordType === "text" && <ClosedEye toggleEye = {() => toggleEyeButton('password')}/>}

                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type={passwordType}
                        className="form-control "
                        placeholder="Enter your password here"
                      />
                    </div>
                    {password!=='' && !passwordFormatValidator(password) && (
                      <div className="" style={{ color: "red" }}>
                        Password should be minimum 8 characters with 1 uppercase, 1 lowercase and 2 digits.
                      </div>
                    )}
                  </div>

                  <div className="row">
                    <div className="form-group mt-3">
                      <label className="form-label">
                        <strong>Confirm Password</strong>
                      </label>

                      {confirmPasswordType === "password" && <OpenedEye toggleEye = {() => toggleEyeButton('confirmPassword')} /> }
                      {confirmPasswordType === "text" && <ClosedEye toggleEye = {() => toggleEyeButton('confirmPassword')}/>}

                      <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type={confirmPasswordType}
                        className="form-control "
                        placeholder="Enter your password here"
                      />
                    </div>
                    {confirmPassword!=='' && confirmPassword!==password && (
                      <div className="" style={{ color: "red" }}>
                        Passwords do not match.
                      </div>
                    )}
                  </div>


                  <div className="row mt-4">
                    <div className="col-md-3">
                      <button
                        type="submit"
                        className="btn btn-primary submitbutton  "
                        disabled={
                          username === "" ||
                          !passwordFormatValidator(password) ||
                          !emailValidator(email) ||
                          confirmPassword !== password
                            ? true
                            : false
                        }
                      >
                        Sign up
                      </button>
                    </div>

                    <p className="mt-5">
                      Already have an account.{" "}
                      <Link to="/login">Go to login.</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;