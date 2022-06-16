import React,{ useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiUser,BiSearch } from 'react-icons/bi';


export default function NavbarFull() {

  let [noti, setNoti] = useState(false);

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
    right : 10px;
    top : 5px;
  `;

  const display = () => {
    if(!noti){
      setNoti(true);
    }else{
      setNoti(false);
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="d-flex">
            <span className="navbar-brand mb-0 h1 order-2">Navbar</span>
            <div className="navbar-toggler order-1 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <AiOutlineUnorderedList size={20}/>
            </div>

          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex col-10 col-sm-8 col-md-6 col-lg-4">
              <div className="form-group mb-0 d-flex clearfix position-relative" style={{width : `100%`}}>
                <Input placeholder="Cari disini .."/>
                <BtnSearch>
                  <BiSearch size={20} />
                </BtnSearch>
              </div>
            </form>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row">
              <li className="nav-item">
                <a className="nav-link"><AiOutlineUnorderedList size={20}/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={display}>
                  <IoMdNotificationsOutline size={20}/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><BiUser size={20}/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={`card float-end shadow-sm ${noti ? 'd-block' : 'd-none'} `} id="notifikasi" style={{width: `420px`, right:`5rem`, borderRadius:`15px`}}>
        <div className="card-body">
          <div className="container border-bottom d-flex">
            <div className="col-md-2">
              <img src="https://via.placeholder.com/150" className="img-fluid rounded" alt="..."/>
            </div>
            <div className="col-md-10 ps-4">
              <div className="card-body p-0">
                <p className="text-muted fs-6 mb-0" style={{fontSize:10}}>
                  <small>Penawaran produk</small>
                  <small className="float-end">20 Apr, 14:04</small>
                </p>
                <p className="card-text mb-0">Jam Tangan Casio</p>
                <p className="card-text mb-0">Rp 250.000</p>
                <p className="card-text mb-3">Ditawar Rp 200.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to="/login">
        <button className="btn btn-primary" type="submit">
          Button
        </button>
      </Link>
    </>
  );
}