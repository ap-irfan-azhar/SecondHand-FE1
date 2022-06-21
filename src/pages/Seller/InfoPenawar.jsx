import React,{ useState} from 'react'
import { NavbarTitle } from '../../components/Navbar/NavbarTitle';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import CardName from '../../components/Card/CardName';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog'
import Button from 'react-bootstrap/Button';

const InfoPenawar = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                                    <button type="button" class="btn btn-sm btn-outline-primary me-2 px-4 flex-grow-1 round">Tolak</button>
                                    <button onClick={handleShow} type="button" class="btn btn-sm btn-primary flex-grow-1 px-4 round">Terima</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>

    <Modal 
        show={show} onHide={handleClose}
        contentClassName="shadow round"
        centered
        closeButton
    >
        
            <Modal.Body>
                <p className="fw-bold mb-0">Yeay kamu berhasil mendapat harga yang sesuai</p>
                <p className="text-muted">Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>

                <div className="card bg-light border-0 round p-3">
                    <p className="text-center">Product Match</p>
                </div>
            </Modal.Body>
        
    </Modal>

    </>
  )
}

export default InfoPenawar