import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = (n) => {
    navigate(n);
  };

  return (
    <>
      <div className="container-fluid header">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <IconButton
              sx={{ color: deepOrange[100] }}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>

            <div
              className="offcanvas offcanvas-start menu"
              data-bs-scroll="true"
              tabIndex={-1}
              id="offcanvasWithBothOptions"
            >
              <div className="offcanvas-header">
                <div className="d-flex justify-content-end align-items-center ms-auto">
                  <IconButton
                    data-bs-dismiss="offcanvas"
                    sx={{ color: deepOrange.A700 }}
                  >
                    <CloseIcon sx={{ color: deepOrange.A400 }} />
                  </IconButton>
                </div>
              </div>

              <div className="offcanvas-body menu-body p-0">
                <div className="d-flex flex-column align-items-start">
                  <NavLink to="/" className="links">
                    Home
                  </NavLink>
                  <NavLink to="/ourstore" className="links">
                    Our Store
                  </NavLink>
                  <NavLink className="links" to="/contact">
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-1">
            <IconButton
              onClick={() => handleNavigate("/notifications")}
              sx={{ color: deepOrange[100] }}
            >
              <NotificationsIcon sx={{ color: "white" }} />
            </IconButton>

            <IconButton
              onClick={() => handleNavigate("/login")}
              sx={{ color: deepOrange[100] }}
            >
              <AccountCircleIcon sx={{ color: "white" }} />
            </IconButton>

            <IconButton
              onClick={() => handleNavigate("/cart")}
              sx={{ color: deepOrange[100] }}
            >
              <ShoppingBagIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
