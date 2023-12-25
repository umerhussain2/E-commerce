import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./css/Login.css";

const ForgotPassword = () => {
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
              <h3 className="title">Forgot Password</h3>
              <p className="reset-text">
                We will send you an email to reset your password
              </p>

              <input
                type="email"
                className="inp"
                name="user-email"
                placeholder="Enter your email"
              />

              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-3">
                <Button
                  onClick={() => handleNavigate("/resetpassword")}
                  variant="contained"
                  sx={{ fontSize: "14px" }}
                >
                  Submit
                </Button>

                <Button
                  onClick={() => handleNavigate("/login")}
                  variant="outlined"
                  sx={{ fontSize: "14px" }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
