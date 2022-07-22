import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import {Link} from  'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

// proses 7 menuju ke folder actions/auth.js
import { register } from "../../actions/auth";



const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  // trigger action untuk mengakses redux global store atau api nya

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  // #Task 4. menemukan fungsi handleregister yang berupa proses autentikasi
  const handleRegister = async (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      // #Task 5. trigger action register untuk melakukan autentikasi, lalu mencari di actions/auth.js untuk mencari fungsi/action register()
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
      //#Proses 6 if successful then return true dan apabila gagal maka akan catch false
    }

    const formData = {
        'username' : username,
        'email' : email,
        'password' : password
    }

    try {
        let register = await axios.post(
          'https://secondhandbebin-stag.herokuapp.com/api/user/register', 
          formData,
        );

        let result = await register;
        console.log(result);

        if(result){
          navigate('/login');
        }

    }catch (error) {
        if (error.response) {
            console.log(error.response.data);
        }
    }

  };

  return (
    <>
      <Alert variant="success" show={showNavbar} onClose={() => setShowNavbar(false)} dismissible>
          Error
      </Alert>
      <Form
        onSubmit={handleRegister}
        ref={form}
        className="bg-white d-flex flex-column justify-content-center w-100 p-5"
      >
        <h3 className="mb-3 fw-bold">Registrasi</h3>
        {!successful && (
          <div>
            <div className="form-group mb-3">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                placeholder="Nama Lengkap"
                value={username}
                onChange={onChangeUsername}
                validations={[required, vusername]}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                placeholder="Contoh: johndee@gmail.com"
                value={email}
                onChange={onChangeEmail}
                validations={[required, validEmail]}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={onChangePassword}
                validations={[required, vpassword]}
              />
            </div>
            {/* Task 2, button Sign up */}
            <div className="form-group mb-3 w-fluid">
              <button className="btn btn-primary btn-block">Sign Up</button>
            </div>
          </div>
        )}
        {/* Proses 10. if variable message true then mengeluarkan output message */}
        {message && (
          <div className="form-group">
            <div
              className={
                successful ? "alert alert-success" : "alert alert-danger"
              }
              role="alert"
            >
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
        <div className="mt-3">
            <h6>
              Sudah punya akun? <Link to="/login" className="text-decoration-none"> di sini</Link>
            </h6>
          </div>
      </Form>
    </>
  );
};

export default Register;