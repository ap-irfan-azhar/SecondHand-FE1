import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiUser,BiSearch } from 'react-icons/bi';


export default function Navbar() {
  const Input = styled.input`
    background-color : #EEEEEE;
    width: 100%;
    padding: .375rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-clip: padding-box;
    border: 1px solid #EEEEEE;
    appearance: none;
    border-radius: 1rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  `;

  const BtnSearch = styled.div`
    position : absolute;
    right : 5px;
    top : 5px;
  `;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Navbar</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex">
              <div className="form-group mb-0 d-flex clearfix position-relative">
                <Input placeholder="Cari disini .."/>
                <BtnSearch>
                  <BiSearch size={20} />
                </BtnSearch>
              </div>
            </form>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link"><AiOutlineUnorderedList/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><IoMdNotificationsOutline/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><BiUser/></a>
              </li>
            </ul>

            

          </div>
        </div>
      </nav>
      <Link to="/login">
        <button className="btn btn-primary" type="submit">
          Button
        </button>
      </Link>
    </>
  );
}
