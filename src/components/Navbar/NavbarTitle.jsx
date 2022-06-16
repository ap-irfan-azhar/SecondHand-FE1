import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const NavbarTitle = (props) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            <div className="container">
                <AiOutlineArrowLeft className="d-block d-lg-none" size={20}/>
                <a className="navbar-brand d-none d-lg-block" href="#">Navbar</a>
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
