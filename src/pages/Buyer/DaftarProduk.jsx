import React, {useEffect,useState} from 'react'
import CardName from '../../components/Card/CardName'
import { AiOutlineArrowRight,AiOutlineHeart,AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineCube } from 'react-icons/hi';
import { FiDollarSign } from 'react-icons/fi';
import NavbarFull from '../../components/Navbar/NavbarFull';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useSelector} from 'react-redux'
import allActions from '../../actions';
import NavbarUserFull from '../../components/Navbar/User/NavbarUserFull';

const DaftarProduk = () => {

    const [produk, getProduk] = useState([]);

    

    const dataProdukGlobal = useSelector(state => state.produk);

    const getsProduk = async () =>{
        axios.get('https://secondhandbebin-stag.herokuapp.com/product/')
        .then((response) =>{
            const data = response;
            getProduk(data.data);
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    const searchProduk = async (cari) =>{
        console.log(cari);
        if(cari === 'null' || cari === ''){
            getsProduk();
        }else{

            axios.get('https://secondhandbebin-stag.herokuapp.com/product/findByNameLike2/?',{ params: { name: cari } })
            .then((response) =>{
                const data = response;
                console.log(data.data);
                getProduk(data.data);
            })
            .catch((err) =>{
                console.log(err);
            })
        }
    }

    useEffect(() => {
        getsProduk();
        
    },[dataProdukGlobal]);


  return (
    <div className="mb-5">
        <NavbarUserFull cari={searchProduk}/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-10 mx-auto position-relative">
                    <h6 className="fw-bold font-20 mt-5">Daftar Jual Saya</h6>
                    <CardName/>

                    <div className="row">

                        <div className="d-block d-sm-none mb-3">
                            <button type="button" className="btn btn-success round">
                                <HiOutlineCube/>
                                <small>Success</small>
                                
                            </button>

                            <button type="button" className="btn btn-success round mx-2">
                                <AiOutlineHeart/>
                                <small>Disukai</small>
                                
                            </button>

                            <button type="button" className="btn btn-success round">
                                <FiDollarSign/>
                                <small>Terjual</small>
                                
                            </button>
                        </div>

                        <div className="col-12 col-md-3 d-none d-sm-block">

                            <div className="card shadow round">
                                <div className="card-body">
                                    <h6 className="fw-bold font-16">Kategori</h6>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-1">
                                            <div>
                                                <HiOutlineCube className="me-2"/>Semua Produk

                                            </div>
                                            <div>
                                                <AiOutlineArrowRight className="float-end"/>
                                            </div>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center px-1">
                                            <div>
                                                <AiOutlineHeart className="me-2"/>Diminati

                                            </div>
                                            <div>
                                                <AiOutlineArrowRight className="float-end"/>
                                            </div>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center px-1">
                                            <div>
                                                <FiDollarSign className="me-2"/>Terjual

                                            </div>
                                            <div>
                                                <AiOutlineArrowRight className="float-end"/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-md-9 d-flex flex-wrap px-0 ps-3">

                            <div className="card card-child card-sm-child m-1 justify-content-center">
                                <div className="text-center">
                                    <AiOutlinePlus/>
                                    <p>Tambah Produk</p>
                                </div>

                            </div>
                            {
                                
                            }

                            { produk.map((e,key)=>{ 
                                return (
                                <div key={key} className="card card-child card-sm-child m-1">
                                    <img src={e.photoUrl} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text mb-0">
                                            <Link to={`/produk/detail/${e.id}`} className="text-decoration-none text-dark">
                                            {e.name}
                                            </Link>
                                        </p>
                                        <p className="card-text text-muted mb-1"><small>{e.status}</small></p>
                                        <p className="card-text mb-0">Rp. {e.price}</p>
                                    </div>
                                </div>
                                )
                                
                            }) }
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DaftarProduk