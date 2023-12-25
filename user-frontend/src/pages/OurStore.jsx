import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Col, Container, Modal, Row } from "react-bootstrap";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Button, IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import "./css/OurStore.css";

const OurStore = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Container fluid className="ourstore py-3">
        {/* Modal */}
        {openModal && (
          <Modal centered show={openModal}>
            <Modal.Header>
              <div className="d-flex justify-content-between align-items-center w-100">
                <h3 className="mb-0">Filter</h3>
                <IconButton
                  onClick={handleModal}
                  sx={{ color: deepOrange[500] }}
                >
                  <CloseRoundedIcon />
                </IconButton>
              </div>
            </Modal.Header>

            <Modal.Body className="px-2 py-3">
              <div className="sidebar">
                <div className="sidebar-inner-container">
                  <h5 className="mb-3 sidebar-heading">Shop By Categories</h5>
                  <p className="mb-1 sidebar-text">Watch</p>
                  <p className="mb-1 sidebar-text">TV</p>
                  <p className="mb-1 sidebar-text">Camera</p>
                  <p className="mb-1 sidebar-text">Laptop</p>
                </div>

                <div className="sidebar-inner-container">
                  <h5 className="mb-3 sidebar-heading">Filter By</h5>

                  <h6 className="mb-2 sidebar-sub-heading">Availablity</h6>
                  <div className="d-flex flex-column align-items-start gap-2 mb-3">
                    <div className="d-flex justify-content-center align-items-center gap-1">
                      <input type="checkbox" className="chk-box" id="instock" />
                      <label htmlFor="instock" className="sidebar-text">
                        In Stock (1)
                      </label>
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-1">
                      <input type="checkbox" id="outofstock" />
                      <label htmlFor="outofstock" className="sidebar-text">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>

                  <h6 className="mb-2 sidebar-sub-heading">Price</h6>
                  <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 mb-3">
                    <input
                      type="text"
                      className="inp-price-filter"
                      placeholder="From"
                    />
                    <input
                      type="text"
                      className="inp-price-filter"
                      placeholder="To"
                    />
                  </div>

                  <h6 className="mb-2 sidebar-sub-heading">Colors</h6>
                  <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 mb-3">
                    <div className="color-box"></div>
                    <div className="color-box"></div>
                    <div className="color-box"></div>
                    <div className="color-box"></div>
                  </div>

                  <h6 className="mb-2 sidebar-sub-heading">Size</h6>
                  <div className="d-flex flex-column align-items-start gap-2">
                    <div className="d-flex justify-content-center align-items-center gap-1">
                      <input type="checkbox" id="small" />
                      <label htmlFor="small" className="sidebar-text">
                        Small (3)
                      </label>
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-1">
                      <input type="checkbox" id="medium" />
                      <label htmlFor="medium" className="sidebar-text">
                        Medium (5)
                      </label>
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-1">
                      <input type="checkbox" id="large" />
                      <label htmlFor="large" className="sidebar-text">
                        Large (2)
                      </label>
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-1">
                      <input type="checkbox" id="xl" />
                      <label htmlFor="xl" className="sidebar-text">
                        XL (1)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="sidebar-inner-container">
                  <h5 className="mb-3 sidebar-heading">Product Tag</h5>
                  <div className="d-flex flex-wrap justify-content-start align-items-center gap-1">
                    <p className="proguct-tags">Headphone</p>
                    <p className="proguct-tags">Laptop</p>
                    <p className="proguct-tags">Mobile</p>
                    <p className="proguct-tags">Speaker</p>
                    <p className="proguct-tags">Tablet</p>
                  </div>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="contained">Done</Button>
            </Modal.Footer>
          </Modal>
        )}

        <Row>
          <Col>
            <div className="d-flex flex-column align-items-center gap-3 flex-sm-row justify-content-between shadow top-bar">
              <div className="d-flex justify-content-between align-items-center gap-2">
                <label htmlFor="sort">Sort by :</label>
                <select id="sort">
                  <option value="Featured">Featured</option>
                  <option value="Best-Selling">Best Selling</option>
                  <option value="a-z">Alphabeticall, A - Z</option>
                  <option value="z-a">Alphabeticall, Z - A</option>
                  <option value="low-high">Price, low to high</option>
                  <option value="high-low">Price, high to low</option>
                  <option value="new-old">Date, new to old</option>
                  <option value="old-new">Date, old to new</option>
                </select>
              </div>

              <div className="d-flex justify-content-end align-items-center gap-4">
                <Button
                  variant="contained"
                  className="d-flex d-md-none"
                  endIcon={<FilterAltIcon />}
                  onClick={handleModal}
                >
                  Filter
                </Button>
                <p className="mb-0">(10) Products</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="d-none d-md-block" xs={5} sm={4} md={3}>
            <div className="sidebar">
              <div className="sidebar-inner-container shadow">
                <h5 className="mb-3 sidebar-heading">Shop By Categories</h5>
                <p className="mb-1 sidebar-text">Watch</p>
                <p className="mb-1 sidebar-text">TV</p>
                <p className="mb-1 sidebar-text">Camera</p>
                <p className="mb-1 sidebar-text">Laptop</p>
              </div>

              <div className="sidebar-inner-container shadow">
                <h5 className="mb-3 sidebar-heading">Filter By</h5>

                <h6 className="mb-2 sidebar-sub-heading">Availablity</h6>
                <div className="d-flex flex-column align-items-start gap-2 mb-3">
                  <div className="d-flex justify-content-center align-items-center gap-1">
                    <input type="checkbox" className="chk-box" id="instock" />
                    <label htmlFor="instock" className="sidebar-text">
                      In Stock (1)
                    </label>
                  </div>

                  <div className="d-flex justify-content-center align-items-center gap-1">
                    <input type="checkbox" id="outofstock" />
                    <label htmlFor="outofstock" className="sidebar-text">
                      Out of Stock (0)
                    </label>
                  </div>
                </div>

                <h6 className="mb-2 sidebar-sub-heading">Price</h6>
                <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 mb-3">
                  <input
                    type="text"
                    className="inp-price-filter"
                    placeholder="From"
                  />
                  <input
                    type="text"
                    className="inp-price-filter"
                    placeholder="To"
                  />
                </div>

                <h6 className="mb-2 sidebar-sub-heading">Colors</h6>
                <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 mb-3">
                  <div className="color-box"></div>
                  <div className="color-box"></div>
                  <div className="color-box"></div>
                  <div className="color-box"></div>
                </div>

                <h6 className="mb-2 sidebar-sub-heading">Size</h6>
                <div className="d-flex flex-column align-items-start gap-2">
                  <div className="d-flex justify-content-center align-items-center gap-1">
                    <input type="checkbox" id="small" />
                    <label htmlFor="small" className="sidebar-text">
                      Small (3)
                    </label>
                  </div>

                  <div className="d-flex justify-content-center align-items-center gap-1">
                    <input type="checkbox" id="medium" />
                    <label htmlFor="medium" className="sidebar-text">
                      Medium (5)
                    </label>
                  </div>

                  <div className="d-flex justify-content-center align-items-center gap-1">
                    <input type="checkbox" id="large" />
                    <label htmlFor="large" className="sidebar-text">
                      Large (2)
                    </label>
                  </div>

                  <div className="d-flex justify-content-center align-items-center gap-1">
                    <input type="checkbox" id="xl" />
                    <label htmlFor="xl" className="sidebar-text">
                      XL (1)
                    </label>
                  </div>
                </div>
              </div>

              <div className="sidebar-inner-container shadow">
                <h5 className="mb-3 sidebar-heading">Product Tag</h5>
                <div className="d-flex flex-wrap justify-content-start align-items-center gap-1">
                  <p className="proguct-tags">Headphone</p>
                  <p className="proguct-tags">Laptop</p>
                  <p className="proguct-tags">Mobile</p>
                  <p className="proguct-tags">Speaker</p>
                  <p className="proguct-tags">Tablet</p>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={12} md={9}>
            <div className="row justify-content-start">
              <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <ProductCard />
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <ProductCard />
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <ProductCard />
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <ProductCard />
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <ProductCard />
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <ProductCard />
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <ProductCard />
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <ProductCard />
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <ProductCard />
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
                <div className="d-flex justify-content-center align-items-center">
                  <ProductCard />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OurStore;
