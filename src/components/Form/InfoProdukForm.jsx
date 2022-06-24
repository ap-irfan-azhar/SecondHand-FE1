export default function InfoProdukForm() {
  return (
    <>
    <form>
      <div className="row mb-3">
        <label className="form-label">Nama Produk</label>
        <input
          type="text"
          className="form-control rounded-3"
          placeholder="Nama Produk"
        />
      </div>
      <div className="row mb-3">
        <label className="form-label">Harga Produk</label>
        <input
          type="text"
          className="form-control rounded-3"
          placeholder="Rp 0,00"
        />
      </div>
      <div className="row mb-3">
        <label className="form-label">Kategori</label>
        <select className="form-select rounded-3">
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
        />
      </div>
      <div className="row mb-3">
        <label className="form-label">Foto Produk</label>
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
            type="button"
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
