import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate ,Link} from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";

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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch(); //Dia akan memantik action untuk mengakses global store dan atau api endpoint

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      //Task 5. Memantik action login, untuk melakukan proses autentikasi, lalu kita cari action login()
      dispatch(login(username, password))
        .then(() => {
          //Proses 6. Jika berhasil akan masuk ke halaman /profile
          props.history.push("/buyer");
          window.location.reload();
        })
        //Proses 7. Jika gagal dia return false
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
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
        className="bg-white d-flex flex-column justify-content-center w-100 p-5"
      >
        <h3 className="mb-3">Masuk</h3>

        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={onChangeUsername}
            validation={[required]}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChangePassword}
            validations={[required]}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-primary btn-block" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Login</span>
          </button>
        </div>

        {message && (
          <div className="mb-3">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
        <h6>Belum punya akun?</h6>
        <Link to={"/register"} className="nav-link">
          Register
        </Link>
      </Form>
    </>
  );
};

export default Login;
