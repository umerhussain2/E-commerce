import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./css/Login.css";

const ResetPassword = () => {
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
              <h3 className="title">Reset Password</h3>
              <p className="reset-text">Enter Your New Password</p>

              <input
                type="password"
                className="inp"
                name="user-new-password"
                placeholder="Enter New Password"
              />

              <input
                type="password"
                className="inp"
                name="user-new-password-match"
                placeholder="Confirm Password"
              />

              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-3">
                <Button
                  onClick={() => handleNavigate("/login")}
                  variant="contained"
                  sx={{ fontSize: "14px" }}
                >
                  Reset
                </Button>

                <Button
                  onClick={() => handleNavigate("/")}
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

export default ResetPassword;
