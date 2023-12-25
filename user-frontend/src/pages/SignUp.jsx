import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./css/Login.css";

const SignUp = () => {
  const navigate = useNavigate();
  const handleNavigate = (n) => {
    navigate(n);
  };
  return (
    <div className="container-fluid py-5 login-bg">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-center">
            <div className="login-form">
              <h3 className="title">Sign Up</h3>

              <input
                type="text"
                className="inp"
                name="first-name"
                placeholder="First Name"
              />

              <input
                type="text"
                className="inp"
                name="last-name"
                placeholder="Last Name"
              />

              <input
                type="email"
                className="inp"
                name="user-email"
                placeholder="Email"
              />

              <input
                type="password"
                className="inp"
                name="password"
                placeholder="Password"
              />

              <Button
                onClick={() => handleNavigate("/")}
                variant="contained"
                sx={{ fontSize: "14px", marginTop: "10px" }}
              >
                Cerate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
