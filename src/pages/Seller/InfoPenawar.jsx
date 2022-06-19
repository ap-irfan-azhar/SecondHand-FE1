import React from 'react'
import { NavbarTitle } from '../../components/Navbar/NavbarTitle';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import CardName from '../../components/Card/CardName';

const InfoPenawar = () => {
  return (
    <div className="mb-5">
        <NavbarTitle/>
        <div className="container">
            
            
            <div className="row">
                <div className="col-12 col-md-6 mx-auto position-relative">
                    <div className="position-absolute" style={{ top: '30px', left: '-40px'}}>
                        <AiOutlineArrowLeft className="d-none d-lg-block" size={20}/>
                    </div>
                    <CardName />
                    <h6 className="my-4 fw-bold">Daftar Produkmu yang Ditawar</h6>

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
                                    <p className="card-text mb-5">Ditawar Rp 200.000</p>
                                </div>   
                            </div>

                            <div className="position-absolute bottom-0 w-100 mb-2">
                                <div className="float-none float-sm-end d-flex">
                                    <button type="button" class="btn btn-sm btn-outline-primary me-2 px-4 flex-grow-1 round">Tolak</button>
                                    <button type="button" class="btn btn-sm btn-primary flex-grow-1 px-4 round">Terima</button>
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

export default InfoPenawar