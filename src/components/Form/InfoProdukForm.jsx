import React, {useEffect,useState,useCallback} from 'react'
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function InfoProdukForm() {

  const navigate = useNavigate();
  const [nama,setNama] = useState('');
  const [status,setStatus] = useState('available');
  const [harga,setHarga] = useState('');
  const [kategori,setKategori] = useState('');
  const [desc,setDesc] = useState('');
  const [files, setFiles] = useState("");

  const onDrop = useCallback(acceptedFiles => {
      setFiles(acceptedFiles[0]);
  }, []);

  const {getRootProps, getInputProps} = useDropzone({
      onDrop,
  });

  const sendFile = async (e) => {
    e.preventDefault();

        const formData = new FormData();

	      formData.append('file', files);
        formData.append('name', nama);
        formData.append('categoriesId', kategori);
        formData.append('price', harga);
        formData.append('description', desc);
        formData.append('status', status);

        console.log(files);

        
        const config = {     
          headers: { 'content-type': 'multipart/form-data' }
        }

        try {
          let register = await axios.post(
            'https://secondhandbebin-stag.herokuapp.com/product/register', 
            formData,
            config
          );

          let result = await register;
          
          navigate('/seller/daftar-jual');

      }catch (error) {
          if (error.response) {
              console.log(error.response.data);
          }
      }

  }


  

  return (
    <>
    <form onSubmit={sendFile}>
      <div className="row mb-3">
        <label className="form-label">Nama Produk</label>
        <input
          type="text"
          className="form-control rounded-3"
          placeholder="Nama Produk"
          value={nama} onChange={(e) => setNama(e.target.value)} 
        />
      </div>
      
      <div className="row mb-3">
        <label className="form-label">Harga Produk</label>
        <input
          type="text"
          className="form-control rounded-3"
          placeholder="Rp 0,00"
          value={harga} onChange={(e) => setHarga(e.target.value)} 
        />
      </div>
      <div className="row mb-3">
        <label className="form-label">Kategori</label>
        <select className="form-select rounded-3" value={kategori} onChange={(e) => setKategori(e.target.value)}>
          <option value="" disabled selected>
            Pilih Kategori
          </option>
          <option value="0">Hobi</option>
          <option value="1">Kendaraan</option>
          <option value="2">Baju</option>
          <option value="3">Elektronik</option>
          <option value="4">Kesehatan</option>
        </select>
      </div>
      <div className="row mb-3">
        <label className="form-label">Deskripsi</label>
        <input
          type="text"
          className="form-control rounded-3"
          style={{ paddingBottom: "50px" }}
          placeholder="Contoh: Jalan Ikan Hiu 33"
          value={desc} onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="row mb-3">
        <label className="form-label">Foto Produk</label>
        <div className="col-3">
        <section className="container border border-1 pt-2" style={{height : `100px`}}>
          <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p>Add file</p>
          </div>
        </section>
        </div>
        <img src="images/uploadgambar.png" alt="" />
      </div>


      <div className="row mt-5">
        <div className="p-0 pe-1">
          <button
            className="btn btn-outline-primary btn-action "
            type="button"
            id="preview"
          >
            Preview
          </button>
          <button
            className="btn btn-primary btn-action"
            type="submit"
            id="terbitkan"
          >
            Terbitkan
          </button>
        </div>
      </div>
    </form>
    </>
  );
}
