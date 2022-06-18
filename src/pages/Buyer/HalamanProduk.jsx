import React from 'react'
import NavbarFull from '../../components/Navbar/NavbarFull';
import CarouselItem from '../../components/Carousel/CarouselItem';

const HalamanProduk = () => {
  return (
    <div className="mb-5">
        <NavbarFull/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-10 mx-auto">
                    <div className="row">
                        <div className="col-12 col-sm-8 mb-3">
                            <CarouselItem/>

                            <div className="card mt-4 round">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 d-flex flex-sm-column flex-column-reverse">

                            <div className="card shadow round">
                                <div className="card-body">
                                    <h5 className="card-title mb-3">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to</p>

                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary round" type="button">Terbitakan</button>
                                        <button className="btn btn-outline-primary round" type="button">Edit</button>
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow round my-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-3">
                                        <img src="https://via.placeholder.com/150" className="img-fluid rounded" alt="..."/>
                                        </div>
                                        <div className="col-8">
                                            <h6 className="card-title">Card title</h6>
                                            <p className="card-text text-muted">
                                                <small>
                                                Kota
                                                </small>
                                            </p>
                                        </div>
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

export default HalamanProduk