// NAVIGATE
import { useNavigate } from "react-router-dom";
// IMAGE
import watch from "../images/products/watch.jpg";
// COLOR
import { red } from "@mui/material/colors";
// ICONS
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// TABLE
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
// CSS
import "./css/Cart.css";
import { useState } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const handleNavigate = (n) => {
    navigate(n);
  };

  const [quan, setQuan] = useState(1);

  const Products = [
    {
      product: {
        image: watch,
        title: "Title",
        desc: "DESC",
        price: 100,
        quantity: quan,
      },
    },
  ];
  return (
    <>
      <div className="container-fluid py-2 cart">
        <TableContainer component={Paper} sx={{ margin: "50px auto" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{}}>
                <TableCell
                  align="left"
                  sx={{ color: "black", fontSize: "16px", fontWeight: "600" }}
                >
                  Product
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "black", fontSize: "16px", fontWeight: "600" }}
                >
                  Price
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "black", fontSize: "16px", fontWeight: "600" }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ color: "black", fontSize: "16px", fontWeight: "600" }}
                >
                  Total
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  sx={{ padding: "10px 10px" }}
                  component="th"
                  scope="row"
                >
                  <div className="product-cell">
                    <img src={watch} alt="watch" className="pro-img" />

                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <p className="pro-title">Title</p>
                      <p className="pro-desc">Description</p>
                      <p className="pro-size">Size</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center gap-4">
                    <TextField
                      sx={{ width: "80px" }}
                      id="outlined-number"
                      value={quan}
                      onChange={(e) => {
                        setQuan(e.target.value);
                      }}
                      label="Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <IconButton sx={{ color: red[500] }}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">{100 * quan}</p>
                  </div>
                </TableCell>
              </TableRow>

              {/* DYNAMICLY */}

              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  sx={{ padding: "10px 10px" }}
                  component="th"
                  scope="row"
                >
                  <div className="product-cell">
                    <img src={watch} alt="watch" className="pro-img" />

                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <p className="pro-title">Title</p>
                      <p className="pro-desc">Description</p>
                      <p className="pro-size">Size</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center gap-4">
                    <TextField
                      sx={{ width: "80px" }}
                      id="outlined-number"
                      label="Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <IconButton sx={{ color: red[500] }}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  sx={{ padding: "10px 10px" }}
                  component="th"
                  scope="row"
                >
                  <div className="product-cell">
                    <img src={watch} alt="watch" className="pro-img" />

                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <p className="pro-title">Title</p>
                      <p className="pro-desc">Description</p>
                      <p className="pro-size">Size</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center gap-4">
                    <TextField
                      sx={{ width: "80px" }}
                      id="outlined-number"
                      label="Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <IconButton sx={{ color: red[500] }}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  sx={{ padding: "10px 10px" }}
                  component="th"
                  scope="row"
                >
                  <div className="product-cell">
                    <img src={watch} alt="watch" className="pro-img" />

                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <p className="pro-title">Title</p>
                      <p className="pro-desc">Description</p>
                      <p className="pro-size">Size</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center gap-4">
                    <TextField
                      sx={{ width: "80px" }}
                      id="outlined-number"
                      label="Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <IconButton sx={{ color: red[500] }}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  sx={{ padding: "10px 10px" }}
                  component="th"
                  scope="row"
                >
                  <div className="product-cell">
                    <img src={watch} alt="watch" className="pro-img" />

                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <p className="pro-title">Title</p>
                      <p className="pro-desc">Description</p>
                      <p className="pro-size">Size</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center gap-4">
                    <TextField
                      sx={{ width: "80px" }}
                      id="outlined-number"
                      label="Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <IconButton sx={{ color: red[500] }}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  sx={{ padding: "10px 10px" }}
                  component="th"
                  scope="row"
                >
                  <div className="product-cell">
                    <img src={watch} alt="watch" className="pro-img" />

                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <p className="pro-title">Title</p>
                      <p className="pro-desc">Description</p>
                      <p className="pro-size">Size</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center gap-4">
                    <TextField
                      sx={{ width: "80px" }}
                      id="outlined-number"
                      label="Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <IconButton sx={{ color: red[500] }}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  sx={{ padding: "10px 10px" }}
                  component="th"
                  scope="row"
                >
                  <div className="product-cell">
                    <img src={watch} alt="watch" className="pro-img" />

                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <p className="pro-title">Title</p>
                      <p className="pro-desc">Description</p>
                      <p className="pro-size">Size</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center gap-4">
                    <TextField
                      sx={{ width: "80px" }}
                      id="outlined-number"
                      label="Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <IconButton sx={{ color: red[500] }}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  sx={{ padding: "10px 10px" }}
                  component="th"
                  scope="row"
                >
                  <div className="product-cell">
                    <img src={watch} alt="watch" className="pro-img" />

                    <div className="d-flex flex-column justify-content-between align-items-start">
                      <p className="pro-title">Title</p>
                      <p className="pro-desc">Description</p>
                      <p className="pro-size">Size</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center gap-4">
                    <TextField
                      sx={{ width: "80px" }}
                      id="outlined-number"
                      label="Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <IconButton sx={{ color: red[500] }}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>

                <TableCell sx={{ padding: "10px 10px" }}>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0">$100</p>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-0  justify-content-between align-items-start align-items-sm-center mb-5">
          <Button
            onClick={() => handleNavigate("/")}
            variant="text"
            startIcon={<ArrowBackIcon />}
          >
            Continue Shopping
          </Button>

          <Button
            sx={{ color: "red", marginBottom: 0 }}
            variant="outlined"
            endIcon={<DeleteIcon sx={{ marginBottom: "3px" }} />}
          >
            Clear Cart
          </Button>
        </div>

        <div className="d-flex flex-column align-items-end">
          <h4 className="mb-3">SubTotal = $100</h4>
          <p className="mb-3">Taxes and shipping calculated at check out</p>
          <Button
            onClick={() => handleNavigate("/checkout")}
            variant="contained"
            endIcon={<ArrowForwardIcon />}
          >
            Check Out
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
