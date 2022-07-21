import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from 'react-router-dom';

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

  const handleLogin = (e) => {
    e.preventDefault();
    

    //form.current.validateAll();

    // if (checkBtn.current.context._errors.length === 0) {
    //   //Task 5. Memantik action login, untuk melakukan proses autentikasi, lalu kita cari action login()
    //   dispatch(login(email, password))
    //     .then(() => {
    //       //Proses 6. Jika berhasil akan masuk ke halaman /profile
    //       props.history.push("/buyer");
    //       window.location.reload();
    //     })
    //     //Proses 7. Jika gagal dia return false
    //     .catch(() => {
    //       setLoading(false);
    //     });
    // } else {
    //   setLoading(false);
    // }

    

    if(email === 'user'){
      localStorage.setItem('role','user');
      console.log("user");
      navigate('/produk');
      <Navigate to="/produk" />;
    }else{
      localStorage.setItem('role','admin');
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