// images
import { Col, Container, Row } from "react-bootstrap";
import watch from "../images/products/watch.jpg";
// Css
import "./css/Checkout.css";
import { Button, MenuItem, TextField } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Checkout = () => {
  const states = [
    { name: "Balochistan" },
    { name: "Khyber Pakhtunkhwa" },
    { name: "Sindh" },
    { name: "Punjab" },
    { name: "Islamabad" },
    { name: "Azad Kashmir" },
    { name: "Gilgit-Baltistan" },
    { name: "Bahawalpur" },
    { name: "Hunza" },
    { name: "Las Bela" },
    { name: "Chitral" },
  ];
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={7} className="right-wrapper">
            <div className="d-flex flex-column align-items-start">
              <div className="d-flex flex-wrap justify-content-start mb-3">
                <h2 className="main-heading mb-0">Checkout</h2>
              </div>

              <div className="d-flex flex-wrap justify-content-start mb-5">
                Cart / Information / Shipping / Payment
              </div>

              <div className="d-flex flex-wrap justify-content-start mb-2">
                <h3 className="sub-heading mb-0">Contact Information</h3>
              </div>

              <div className="d-flex flex-column align-items-start justify-content-between mb-4">
                <p className="my-text mb-0">Name : Umer Hussain</p>
                <p className="my-text mb-0">Email : umerhussain123@gmail.com</p>
              </div>

              <div className="d-flex flex-wrap justify-content-start mb-3">
                <h3 className="sub-heading mb-0">Shipping Address</h3>
              </div>

              <form className="w-100">
                <div className="d-flex flex-column w-100">
                  <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                    <TextField
                      type="text"
                      id="outlined-basic"
                      label="Full Name"
                      variant="outlined"
                      sx={{
                        width: "100%",
                      }}
                    />
                    <TextField
                      type="number"
                      id="outlined-basic"
                      label="Mobile Number"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                  </div>

                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <TextField
                      type="text"
                      id="outlined-basic"
                      label="Address"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                  </div>

                  <div className="d-flex justify-content-center align-items-center gap-2 mb-5">
                    <TextField
                      type="text"
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />

                    <TextField
                      sx={{ width: "100%" }}
                      id="outlined-select-sate"
                      select
                      label="State / Region"
                    >
                      {states.map((state) => (
                        <MenuItem key={state.name} value={state.name}>
                          {state.name}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      type="text"
                      id="outlined-basic"
                      label="Zip Code"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <Button variant="text" startIcon={<ArrowBackIcon />}>
                      Return to Cart
                    </Button>
                    <Button variant="contained" endIcon={<ArrowForwardIcon />}>
                      Continue to Shipping
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </Col>

          <Col xs={12} md={5} className="left-wrapper">
            <div className="d-flex flex-column align-items-start">
              <div className="product-view shadow">
                <div className="d-flex justify-content-between align-items-center w-100 bdrBottom py-2">
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <img
                      src={watch}
                      className="img-fluid rounded-3"
                      width="95"
                      height="95"
                      alt=""
                    />

                    <div className="d-flex flex-column align-items-start">
                      <h3 className="product-title">Title</h3>
                      <p className="product-size">Size</p>
                      <p className="mb-0 product-desc">Description</p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <h6 className="mb-0 product-quan-and-price-tot">$1000</h6>
                  </div>
                </div>

                {/* Dymanicly */}
                <div className="d-flex justify-content-between align-items-center w-100  bdrBottom py-2">
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <img
                      src={watch}
                      className="img-fluid rounded-3"
                      width="95"
                      height="95"
                      alt=""
                    />

                    <div className="d-flex flex-column align-items-start">
                      <h3 className="product-title">Title</h3>
                      <p className="product-size">Size</p>
                      <p className="mb-0 product-desc">Description</p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <h6 className="mb-0 product-quan-and-price-tot">$1000</h6>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center w-100 bdrBottom py-2">
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <img
                      src={watch}
                      className="img-fluid rounded-3"
                      width="95"
                      height="95"
                      alt=""
                    />

                    <div className="d-flex flex-column align-items-start">
                      <h3 className="product-title">Title</h3>
                      <p className="product-size">Size</p>
                      <p className="mb-0 product-desc">Description</p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <h6 className="mb-0 product-quan-and-price-tot">$1000</h6>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center w-100 bdrBottom py-3">
                <p className="mb-0 subtotal">Subtotal</p>
                <h6 className="mb-0 subtotal">$ 1000</h6>
              </div>

              <div className="d-flex justify-content-between align-items-center w-100 bdrBottom py-3">
                <p className="mb-0 shipping">Shipping</p>
                <h6 className="mb-0 shipping">$ 19.65</h6>
              </div>

              <div className="d-flex justify-content-between align-items-center w-100 bdrBottom py-3">
                <p className="mb-0 total">Total</p>
                <h6 className="mb-0 total">$ 1000</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
