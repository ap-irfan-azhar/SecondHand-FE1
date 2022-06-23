import React,{ useState} from 'react'
import { NavbarTitle } from '../../components/Navbar/NavbarTitle';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import CardName from '../../components/Card/CardName';
import Modal from 'react-bootstrap/Modal';

const InfoPenawar = () => {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <>
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
                                    <button onClick={handleShow2} type="button" className="btn btn-sm btn-outline-primary me-2 px-4 flex-grow-1 round">Tolak</button>
                                    <button onClick={handleShow1} type="button" className="btn btn-sm btn-primary flex-grow-1 px-4 round">Terima</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>

    {/* Modal tawar */}
    <Modal 
        show={show} onHide={handleClose1}
        contentClassName="shadow round"
        centered
        closeButton
    >    
            <Modal.Body className="p-4">
                <p className="fw-bold mb-0">Yeay kamu berhasil mendapat harga yang sesuai</p>
                <p className="text-muted">Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>

                <div className="card bg-grey border-0 round p-3">
                    <p className="text-center">Product Match</p>

                    <div className="d-flex align-items-center ps-3">
                        <div className="flex-shrink-0">
                            <img src="https://via.placeholder.com/50" className="rounded" alt="..."/>
                        </div>

                        <div className="flex-grow-1 ms-3">
                            <h6 className="card-title fw-bold mb-0">Nama Penjual</h6>
                            <p className="card-text text-muted">
                                <small>
                                Kota
                                </small>
                            </p>
                        </div>
                    </div>

                    <div className="d-flex ps-3 mt-3">
                        <div className="flex-shrink-0">
                            <img src="https://via.placeholder.com/50" className="rounded" alt="..."/>
                        </div>

                        <div className="flex-grow-1 ms-3">
                            <h6 className="card-title mb-0">Jam tangan</h6>
                            <p className="card-text mb-0 text-decoration-line-through">
                                <small>
                                Rp. 250.000
                                </small>
                            </p>
                            <p className="card-text">
                                <small>
                                Ditawar Rp. 200.000
                                </small>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="d-flex mt-3">
                    <button type="button" className="btn btn-primary w-100 round">
                        <span className="px-5">Hubungi via Whatsapp</span>
                        
                        <FaWhatsapp />
                    </button>
                </div>
            </Modal.Body>
        
    </Modal>

    {/* Modal status */}
    <Modal 
        show={show2} onHide={handleClose2}
        contentClassName="shadow round"
        centered
        closeButton
    >    
            <Modal.Body className="p-4">
                <p className="fw-bold">Perbarui status penjualan produkmu</p>
                
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                    <label className="form-check-label" for="exampleRadios1">
                        Berhasil terjual
                    </label>
                </div>
                <p className="text-muted ms-4">Kamu telah sepakat menjual produk ini kepada pembeli</p>
                
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label className="form-check-label" for="exampleRadios2">
                        Batalkan transaksi
                    </label>
                </div>
                <p className="text-muted ms-4">Kamu membatalkan transaksi produk ini dengan pembeli</p>

                <div className="d-flex mt-3">
                    <button type="button" className="btn btn-primary w-100 round">
                        Kirim
                    </button>
                </div>
            </Modal.Body>
        
    </Modal>


    </>
  )
}

export default InfoPenawar