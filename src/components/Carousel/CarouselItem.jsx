import React from 'react'

const CarouselItem = () => {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner round">
                <div className="carousel-item active">
                <img src="https://via.placeholder.com/600x400.png?text=Produk" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://via.placeholder.com/600x400.png?text=Produk" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://via.placeholder.com/600x400.png?text=Produk" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    </div>
  )
}

export default CarouselItem