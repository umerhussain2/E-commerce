import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./css/Login.css";

const Login = () => {
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
              <h3 className="title">Login</h3>

              <input
                type="text"
                className="inp"
                name="user-email"
                placeholder="Enter Email"
              />

              <input
                type="password"
                className="inp"
                name="user-password"
                placeholder="Enter Password"
              />

              <p
                onClick={() => handleNavigate("/forgotpassword")}
                className="forgot-password me-auto"
              >
                Forgot Password?
              </p>

              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-3">
                <Button
                  onClick={() => handleNavigate("/")}
                  variant="contained"
                  sx={{ fontSize: "14px" }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => handleNavigate("/signup")}
                  variant="outlined"
                  sx={{ fontSize: "14px" }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
