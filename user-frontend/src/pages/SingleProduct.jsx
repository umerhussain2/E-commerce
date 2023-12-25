import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// Rating
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
// image
import Pic from "../images/products/watch-01.jpg";
import Visa from "../images/card/visa.png";
import MasterCard from "../images/card/master-card.png";

// icons
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import ExtensionIcon from "@mui/icons-material/Extension";
import StraightenIcon from "@mui/icons-material/Straighten";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LinkIcon from "@mui/icons-material/Link";

// css
import "./css/SingleProduct.css";
import { deepOrange } from "@mui/material/colors";

const SingleProduct = () => {
  const [value, setValue] = useState(2);

  return (
    <>
      <Container fluid className="bg py-5">
        <Row className="bg-2 mx-auto py-3 rounded shadow mb-5">
          <Col xs={12} sm={5} md={5}>
            <div className="d-flex justify-content-start align-items-center">
              <img src={Pic} className="img-fluid product-img" alt="watch" />
            </div>
          </Col>

          <Col xs={12} sm={7} md={7}>
            <div className="d-flex flex-column justify-content-between align-items-start gap-3">
              <div className="d-flex flex-wrap">
                <h3 className="mb-0 product-title">
                  Kids Headphones Bulk 10 Pack Multi Colored for Students
                </h3>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />

                <p className="mb-0 product-reviews-total">(2 reviews)</p>
              </div>

              <div className="d-flex flex-wrap">
                <p className="mb-0 product-price">$ 100.00</p>
              </div>

              <div className="d-flex flex-column w-100">
                <p className="mb-0 user-review">Write a review</p>
                <textarea
                  className="review-filed"
                  placeholder="Write a review"
                ></textarea>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <p className="mb-0 text-bold">Type :</p>
                <p className="mb-0 text-lignt">Handset</p>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <p className="mb-0 text-bold">Brand :</p>
                <p className="mb-0 text-lignt">Havels</p>
              </div>

              <div className="d-flex flex-column">
                <p className="mb-0 text-bold">Categories :</p>
                <div className="d-flex flex-wrap justify-content-start align-items-center gap-1">
                  <span className="mb-0 text-lignt px-1 py-1">airpods,</span>
                  <span className="mb-0 text-lignt px-1 py-1">camera's,</span>
                  <span className="mb-0 text-lignt px-1 py-1">
                    computers & laptops,
                  </span>
                  <span className="mb-0 text-lignt px-1 py-1">headphones,</span>
                  <span className="mb-0 text-lignt px-1 py-1">
                    mini speakers,
                  </span>
                  <span className="mb-0 text-lignt px-1 py-1">
                    portable speakers,
                  </span>
                  <span className="mb-0 text-lignt px-1 py-1">
                    smart phones,
                  </span>
                  <span className="mb-0 text-lignt px-1 py-1">smart TV,</span>
                  <span className="mb-0 text-lignt px-1 py-1">
                    smart watches,
                  </span>
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <p className="mb-0 text-bold">Tags :</p>
                <div className="d-flex flex-wrap justify-content-start align-items-center gap-1">
                  <span className="mb-0 text-lignt px-1 py-1">Headphone</span>
                  <span className="mb-0 text-lignt px-1 py-1">Laptop</span>
                  <span className="mb-0 text-lignt px-1 py-1">Mobile</span>
                  <span className="mb-0 text-lignt px-1 py-1">Speaker</span>
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <p className="mb-0 text-bold">SKU :</p>
                <p className="mb-0 text-lignt">SKU027</p>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <p className="mb-0 text-bold">Availability :</p>
                <p className="mb-0 text-lignt">525 in Stock</p>
              </div>

              <div className="d-flex flex-column">
                <p className="mb-0 text-bold">Size :</p>
                <div className="d-flex flex-wrap align-items-center gap-3">
                  <span className="mb-0 text-lignt px-1 py-1">S</span>
                  <span className="mb-0 text-lignt px-1 py-1">M</span>
                  <span className="mb-0 text-lignt px-1 py-1">L</span>
                  <span className="mb-0 text-lignt px-1 py-1">XL</span>
                </div>
              </div>

              <div className="d-flex justify-content-start align-items-center gap-3">
                <p className="mb-0">Quantity :</p>
                <TextField
                  type="number"
                  size="small"
                  sx={{ width: "90px", marginBotton: "0px" }}
                />
              </div>

              <div className="d-flex justify-content-start align-items-center gap-3">
                <Button variant="contained">Add to cart</Button>
                <Button variant="outlined">Buy it now</Button>
              </div>

              <div className="d-flex justify-content-start align-items-center">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreRoundedIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="d-flex justify-content-start align-items-center gap-3">
                      <LocalShippingRoundedIcon
                        sx={{ color: deepOrange[500] }}
                      />
                      <p className="mb-0 text-bold">Shipping & Returns</p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ex tempore repudiandae incidunt doloribus ullam fugiat
                      laudantium debitis, vero vitae temporibus ipsa tenetur
                      deleniti, esse a enim? Maiores molestias esse quia!
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="d-flex justify-content-start align-items-center">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreRoundedIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="d-flex justify-content-start align-items-center gap-3">
                      <ExtensionIcon sx={{ color: deepOrange[500] }} />
                      <p className="mb-0 text-bold">Materials</p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ex tempore repudiandae incidunt doloribus ullam fugiat
                      laudantium debitis, vero vitae temporibus ipsa tenetur
                      deleniti, esse a enim? Maiores molestias esse quia!
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="d-flex justify-content-start align-items-center">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreRoundedIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="d-flex justify-content-start align-items-center gap-3">
                      <StraightenIcon sx={{ color: deepOrange[500] }} />
                      <p className="mb-0 text-bold">Dimensions</p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ex tempore repudiandae incidunt doloribus ullam fugiat
                      laudantium debitis, vero vitae temporibus ipsa tenetur
                      deleniti, esse a enim? Maiores molestias esse quia!
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="d-flex justify-content-start align-items-center">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreRoundedIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="d-flex justify-content-start align-items-center gap-3">
                      <FavoriteIcon sx={{ color: deepOrange[500] }} />
                      <p className="mb-0 text-bold">Care Instructions</p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ex tempore repudiandae incidunt doloribus ullam fugiat
                      laudantium debitis, vero vitae temporibus ipsa tenetur
                      deleniti, esse a enim? Maiores molestias esse quia!
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center gap-2 w-100">
                <h6 className="mb-0 text-bold">Payment methods</h6>

                <div className="d-flex justify-content-center align-items-center">
                  <img src={Visa} alt="" />
                  <img src={MasterCard} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col xs={12}>
            <div className="d-flex flex-column align-items-start gap-2">
              <h3 className="product-title mb-0">Description</h3>
              <div className="d-flex flex-wrap justify-content-start bg-2 p-2 rounded shadow">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  aut quo quasi, sed itaque, ratione ipsum assumenda rerum
                  accusamus rem corporis perferendis esse temporibus repellat
                  saepe nostrum nam commodi tenetur?Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Cum aut quo quasi, sed itaque,
                  ratione ipsum assumenda rerum accusamus rem corporis
                  perferendis esse temporibus repellat saepe nostrum nam commodi
                  tenetur?
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div className="d-flex flex-column align-items-start gap-2">
              <h3 className="product-title mb-0">Reviews</h3>

              <div className="reviews-container shadow">
                <div className="reviews-head">
                  <h3 className="mb-0 text-bold">Customers Reviews</h3>
                </div>

                <div className="reviews-body">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <p className="mb-0 text-bold">Good</p>
                  <p className="mb-0 text-bold">User Name <span className="text-lignt">on</span> Date</p>
                  <p className="mb-0 text-lignt">User Comment</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleProduct;
