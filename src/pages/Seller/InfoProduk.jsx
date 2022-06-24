import {NavbarTitle}  from "../../components/Navbar/NavbarTitle";
import InfoProdukForm from "../../components/Form/InfoProdukForm";

export default function InfoProduk() {
  return (
    <>
      <NavbarTitle />
      <div className="container mt-5">
        <div className="d-flex flex-column flex-lg-row">
          <div className="col-lg-1 col-sm-12 mb-1">
            <img src="images/icons/fi_arrow-left.svg" alt="" />
          </div>
          <div className="col-lg-11 col-sm-12">
            <InfoProdukForm />
          </div>
        </div>
      </div>
    </>
  );
}
