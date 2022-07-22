import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import { login } from "../../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch(); //Dia akan memantik action untuk mengakses global store dan atau api endpoint

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
  // try {
     
  //     let register = fetch(`https://secondhandbebin-stag.herokuapp.com/api/user/login?username_or_email=${email}&password=${password}`, {
  //       method: "POST",
  //       mode: 'cors', 
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //     });

  //     let result = await register;
  //     console.log(result);

  //     if(result){
  //       navigate('/login');
  //     }

  // }catch (error) {
  //     if (error.response) {
  //         console.log(error.response.data);
  //     }
  // }
    

    if(email === 'user'){
      localStorage.setItem('role','user');
      localStorage.setItem('id_user',1);
      console.log("user");
      navigate('/');
      <Navigate to="/produk" />;
    }else{
      localStorage.setItem('role','admin');
      localStorage.setItem('id_admin',1);
      console.log("admin");
      navigate('/seller/daftar-jual');
      <Navigate to="/seller/daftar-jual" />;
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/buyer" />;
  }

  return (
    <>
      <Form
        onSubmit={handleLogin}
        ref={form}
        className="bg-white d-flex flex-column justify-content-center w-fluid p-5"
      >
        <h3 className="mb-4 fw-bold">Masuk </h3>

        <div className="mb-4">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Contoh: johndee@gmail.com"
            value={email}
            onChange={onChangeEmail}
            validation={[required]}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            className="form-control"
            name="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={onChangePassword}
            validations={[required]}
          />
        </div>

        <button className="btn btn-primary btn-block mb-3" onClick={handleLogin} disabled={loading}>
          {loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
          <span>Login</span>
        </button>

        {message && (
          <div className="mb-4">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
        <div className="mt-3">
          <h6>
            Belum punya akun? <Link to="/register" className="text-decoration-none">Daftar di sini</Link>
          </h6>
        </div>
      </Form>
    </>
  );
};

export default Login;