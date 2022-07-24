import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCamera } from "@fortawesome/free-solid-svg-icons";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from "react-router-dom";
import { Axios } from "axios";

export default function InfoProfile() {
  const isMobile = useMediaQuery({minWidth: 600})

  const [name, setName] = useState("");
  const [kota, setKota] = useState([]);
  const [alamat, setAlamat] = useState("");
  const [handphone, setHandphone] = useState("");
  const navigate = useNavigate();

  const onChangeName = (element) => {
    const name = element.target.value;
    setName(name);
  };

  const onChangeKota = (element) => {
    const kota = element.target.value;
    setKota(kota);
  };

  const onChangeAlamat = (element) => {
    const alamat = element.target.value;
    setAlamat(alamat);
  };

  const onChangeHandhphone = (element) => {
    const handphone = element.target.value;
    setHandphone(handphone);
  };

  const onPostData = async (element) => {
    element.preventDefault();
    const AddUpdateProfile = { name, kota, alamat, handphone };
    await Axios.post("", AddUpdateProfile)
      .then((res) => {
        if (res.status === 201) {
          console.log("Dara Berhasil Ditambahkan!", res.data);
          navigate.push({
            pathname: "/"
          });
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-5 py-4">
      <div className="w-75 mx-auto">
        <div className="custom-responsive-display">
            <Link to="/">
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="custom-font-3 position-absolute"
                />
            </Link>
        </div>
        <span>
          <div className="mx-auto text-center py-4 custom-bg-photo-profile">
            <FontAwesomeIcon icon={faCamera} className="custom-font-4" />
          </div>
        </span>
      </div>

      <div className={isMobile ? 'w-50 mx-auto' : 'w-100 mx-auto px-3'}>
        <Form onSubmit={onPostData}>
          <div className="form-group mb-3">
            <label
              htmlFor="name"
              className="text-dark font-weight-bold mb-1 custom-font-2"
            >
              Nama*
            </label>
            <Input
              type="text"
              className="form-control p-2 px-4 pl-4 custom-font-1 custom-border-auth"
              id="name"
              name="name"
              placeholder="Nama"
              onChange={onChangeName}
            />
          </div>

          <div className="form-group mb-3">
            <label
              htmlFor="kota"
              className="text-dark font-weight-bold mb-1 custom-font-2"
            >
              Kota*
            </label>
            <div className="row">
              <div className="col-md-12">
                <select
                  className="form-select text-muted w-100 px-4 py-2 border custom-border-auth"
                  aria-label="Default select example"
                >
                  <option defaultValue={{ value: null }}>Pilih Kota</option>
                  <option value="Jember" onChange={onChangeKota}>Jember</option>
                  <option value="Jakarta" onChange={onChangeKota}>Jakarta</option>
                  <option value="Surabaya" onChange={onChangeKota}>Surabaya</option>
                  <option value="Malang" onChange={onChangeKota}>Malang</option>
                  <option value="Bali" onChange={onChangeKota}>Bali</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label
              htmlFor="alamat"
              className="text-dark font-weight-bold mb-1 custom-font-2"
            >
              Alamat*
            </label>
            <Input
              type="text"
              className="form-control p-2 px-4 pt-4 pl-4 pb-5 custom-border-auth custom-font-1"
              id="alamat"
              name="alamat"
              placeholder="Contoh: Jalan Ketintang 1000"
              onChange={onChangeAlamat}
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="handphone"
              className="text-dark font-weight-bold mb-1 custom-font-2"
            >
              No Handphone*
            </label>
            <Input
              type="text"
              className="form-control p-2 px-4 pl-4 custom-font-1 custom-border-auth"
              id="handphone"
              name="handphone"
              placeholder="Contoh: +628123456789"
              onChange={onChangeHandhphone}
            />
          </div>

          <button className="mt-3 form-group font-weight-bold text-white border-light py-2 w-100 custom-border-auth custom-button-auth custom-font-1">
            Simpan
          </button>
        </Form>
      </div>
    </div>
  );
}