import React from 'react'

const CardName = () => {
  return (
    <div className="card shadow round my-4">
        <div className="card-body">
            <div className="row ps-3">
                <div className="d-contents">
                <img src="https://via.placeholder.com/50" className="rounded" alt="..."/>
                </div>
                <div className="col-8">
                    <h6 className="card-title">Nama Penjual</h6>
                    <p className="card-text text-muted">
                        <small>
                        Kota
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardName