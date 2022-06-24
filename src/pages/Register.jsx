import RegisterForm from "../components/Form/RegisterForm";

export default function Register() {
  return (
    <div className="d-flex flex-column flex-lg-row">
      <div className="w-50">
        <img src="images/imglogin.png" alt="" />
      </div>
        <RegisterForm />
    </div>
  );
}
