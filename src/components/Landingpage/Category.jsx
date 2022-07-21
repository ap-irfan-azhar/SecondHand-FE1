import React,{useState,useEffect} from 'react'
import Carouselhome from '../Carousel/Carouselhome';
import Categories from './Categories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';

library.add(faMagnifyingGlass)
const Category = () => {

    const [data,setData]=useState(Categories);
    const [produk, getProduk] = useState([]);

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

    const filterResult=(catItem)=>{
        const result=Categories.filter((curData)=>{
            return curData.category===catItem;
        });
        setData(result);
    }

    useEffect(() => {
        getsProduk();
        
    },[]);

  return (
    <>
    <div className="container-fluid mx-2">
        <div className="col-12 col-md-10 mx-auto">
            <div className="row">
                <div className="row mt-5 mx-auto">
                <h1 className="text-category">Telusuri Kategori</h1>
                    <div className="cat-menu col-lg-9" style={{marginBottom : `40px`}}>
                        <button  className="btn-1"  onClick={()=>setData(Categories)}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />&nbsp; Semua</button> &nbsp;
                        <button className="btn-1"  onClick={()=>filterResult('Hobi')}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />&nbsp; Hobi</button> &nbsp;
                        <button className="btn-1"  onClick={()=>filterResult('Kendaraan')}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />&nbsp; Kendaraan</button> &nbsp;
                        <button className="btn-1"  onClick={()=>filterResult('Baju')}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />&nbsp; Baju</button> &nbsp;
                        <button className="btn-1"  onClick={()=>filterResult('Elektronik')}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />&nbsp; Elektronik</button> &nbsp;
                        <button className="btn-1"  onClick={()=>filterResult('Kesehatan')}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />&nbsp; Kesehatan</button>
                        
                        
                    </div>
                    <div className="card-menu col-lg-12"  >
                        <div className="row">
                            {produk.map((e,values)=>{
                                return(
                                    <>
                                    <div className="col-lg-2 mb-3 mt-3 .ml-4" key={values} >
                                <div class="card p-3 w-100">
                                    <img src={e.photoUrl} class="card-img w-fluid" alt="..."/>
                                    <div class="card-body">
                                        <h1 class="card-title">{e.name}</h1>
                                        <p class="card-jenis">{e.status}</p>
                                        <h6 class="card-price">{e.price}</h6>
                                    </div>
                                </div>
                            </div>
                                    </>
                                )
                            })}
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
    </>
    
  )
}

export default Category