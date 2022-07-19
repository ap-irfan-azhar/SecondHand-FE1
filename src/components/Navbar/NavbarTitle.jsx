import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const NavbarTitle = (props) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            <div className="container">
                <AiOutlineArrowLeft className="d-block d-lg-none" size={20}/>
                <span className="navbar-brand d-none d-lg-block">
                  <Link to="/seller/daftar-jual" className="text-decoration-none text-dark">
                    Admin
                  </Link>
                </span>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}

                {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
                  <div className="mx-auto fs-6 text-center">
                    {props.data}
                  </div>
                {/* </div> */}
            </div>
        </nav>
    </div>
  )
}
