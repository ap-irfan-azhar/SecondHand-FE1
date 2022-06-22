import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import NavbarFull from '../../components/Navbar/NavbarFull';

const Notifikasi = () => {
  return (
    <div>
        <div className="mb-5">
        <NavbarFull/>
        <div className="container">   
            <div className="row">
                <div className="col-12 col-md-6 mx-auto position-relative">
                    <div className="position-absolute" style={{ top: '30px', left: '-40px'}}>
                        <Link to="/seller/daftar-jual">
                            <AiOutlineArrowLeft className="d-none d-lg-block" size={20}/>
                        </Link>
                    </div>

                    <h6 className="my-4 fw-bold">Notifikasi</h6>

                    <div className="card border-0 border-bottom">
                        <div className="container px-2 d-flex">
                            <div className="">
                                <div>
                                    <img src="https://via.placeholder.com/50" className="img-fluid rounded" alt="..."/>
                                </div>
                            </div>
                            <div className="w-100 ms-3">
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
            </div>
        </div>
    </div>
    </div>
  )
}

export default Notifikasi