import React from 'react'

const Carouselhome = () => {
  return (
    <div className="container">
            <div className="row">
                <div className="col-12 col-md-9 mx-auto justify-content-center">
                    <div className="row">
                        <div className="col-12 col-sm-11 mb-3 mx-auto">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <div className="">
                                  <img src="halo.png" alt="" />
                                    <div className="row py-2 m-3 custom-user-testi">
                                      <div className="col-5 mt-4 pt-2 ml-5">
                                        <h2 className="text-awal">Bulan Ramadhan Banyak diskon!</h2>
                                        <div>
                                          <p>diskon hingga</p>
                                        </div>
                                        <div>
                                          <h2 className="custom-diskon">60%</h2>
                                        </div>
                                      </div>

                                      <div className="col-4 ">
                                        
                                        <img src="/images/gambar1.png" alt="" />
                                      </div>
                                    </div>
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="">
                                  <img src="halo.png" alt="" />
                                    <div className="row py-2 m-3 custom-user-testi">
                                      <div className="col-5 mt-4 pt-2 ml-5">
                                        <h2 className="text-awal">Bulan Ramadhan Banyak diskon!</h2>
                                        <div>
                                          <p>diskon hingga</p>
                                        </div>
                                        <div>
                                          <h2 className="custom-diskon">40%</h2>
                                        </div>
                                      </div>

                                      <div className="col-4">
                                        
                                        <img className="img-carousel" src="/images/gambar1.png" alt="" />
                                      </div>
                                    </div>
                                </div>
                              </div>
                              
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="sr-only">Next</span>
                            </a>
                          </div>
                        </div>
                        
                    </div>

                </div>
                

            </div>
        </div>
    
    
  )
}

export default Carouselhome