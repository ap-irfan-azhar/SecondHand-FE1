import React,{ useState,useEffect} from 'react'
import { useParams } from 'react-router';
import NavbarFull from '../../components/Navbar/NavbarFull';
import CarouselItem from '../../components/Carousel/CarouselItem';
import CardName from '../../components/Card/CardName';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const ProdukDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [produk, getProduk] = useState({});
    const [hargaTawar, setHargaTawar] = useState(0);
    const [showNavbar, setShowNavbar] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const config = {     
    //     headers: { 'content-type': 'multipart/form-data' }
    // }

    const tawar = async () =>{

        let date = new Date().toISOString();
        date = date.replace('T', " ");
        date = date.replace('Z', " ");

        let data = {
            "productId": produk.id,
            "buyersId": 1,
            "sellersId": produk.sellerId,
            "buyersPrice": hargaTawar,
            "statusOffers": true
        }

        console.log(data);

        try {
            let register = await axios.post(
              'https://secondhandbebin-stag.herokuapp.com/offer/tawar', 
              data
            );
  
            let result = await register;

            console.log(result.data);

            setShowNavbar(true);
            setShow(false);
            
  
        }catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    const getsProduk = async () =>{
        axios.get('https://secondhandbebin-stag.herokuapp.com/product/' + id)
        .then((response) =>{
            const data = response;
            getProduk(data.data);
        })
        .catch((err) =>{
            console.log(err);
        })

    }

    useEffect(() => {
        getsProduk();
        console.log('halo')
    },[]);

  return (
    <>
    <div className="mb-5">
        <NavbarFull/>

        
        <div className="container">
            <div>
                <Alert variant="success" show={showNavbar} onClose={() => setShowNavbar(false)} dismissible>
                Harga tawarmu berhasil dikirim ke penjual
                </Alert>
            </div>
            <div className="row">
                <div className="col-12 col-md-10 mx-auto">
                    <div className="row">
                        <div className="col-12 col-sm-8 mb-3">
                            <CarouselItem data={produk.photoUrl}/>

                            <div className="card mt-4 round">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Deskripsi</h5>
                                    <p className="card-text">{produk.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 d-flex flex-sm-column flex-column-reverse">

                            <div className="card shadow round">
                                <div className="card-body">
                                    <h5 className="card-title mb-3">{produk.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{produk.status}</h6>
                                    <p className="card-text">Rp {produk.price}</p>

                                    <div className="d-grid gap-2">
                                        <button onClick={handleShow} className="btn btn-primary round" type="button">
                                            <small>
                                            Saya tertarik dan ingin nego
                                            </small>
                                            
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <CardName />

                        </div>
                    </div>

                </div>
                

            </div>
        </div>
    </div>

    {/* Modal tawar */}
    <Modal 
        show={show} onHide={handleClose}
        contentClassName="shadow round"
        centered
        closeButton
    >    
            <Modal.Body className="p-5">
                <p className="fw-bold">Masukkan Harga Tawarmu</p>
                <p className="text-muted">Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.</p>

                <div className="card bg-grey border-0 round p-3">
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <img src="https://via.placeholder.com/50" className="rounded" alt="..."/>
                        </div>

                        <div className="flex-grow-1 ms-3">
                            <h6 className="card-title mb-0">Jam tangan</h6>
                            <p className="card-text">
                                <small>
                                Rp 250.000
                                </small>
                            </p>
                        </div>
                    </div>
                </div>

                <form>
                    <div className="my-3">
                        <label for="exampleInputEmail1" className="form-label">Harga Tawar</label>
                        <input type="text" value={hargaTawar} onChange={(e) => setHargaTawar(e.target.value)}  className="form-control round" placeholder="Rp 0,00" />
                    </div>
                </form>

                <div className="d-flex mt-3">
                    <button type="button" onClick={tawar} className="btn btn-primary w-100 round">
                        <span className="px-5">Kirim</span>
                    </button>
                </div>
            </Modal.Body>
        
    </Modal>

    </>
  )
}

export default ProdukDetail