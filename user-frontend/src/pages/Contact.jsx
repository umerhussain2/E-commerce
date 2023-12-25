import { Button, TextField } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
// icons
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import StoreIcon from "@mui/icons-material/Store";
// css
import "./css/Contact.css";
import { deepOrange } from "@mui/material/colors";

const Contact = () => {
  return (
    <>
      <Container fluid className="py-5 contact">
        <Row>
          <Col xs={12}>
            <div className="d-flex justify-content-center align-items-center p-3 rounded map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14475.61440501945!2d67.1153213!3d24.9012696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33922488f3725%3A0x3bfde63eb356ebc0!2sMillennium%20Mall!5e0!3m2!1sen!2s!4v1703326754100!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>

          <Col xs={12} sm={12} md={6}>
            <div className="d-flex flex-column gap-3 py-5">
              <h3 className="mb-0 heading">Contact Us</h3>

              <form className="d-flex flex-column justify-content-between align-items-start gap-3 w-100">
                <TextField
                  type="text"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />

                <TextField
                  type="email"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />

                <TextField
                  type="number"
                  id="outlined-basic"
                  label="Number"
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />

                <TextField
                  type="text"
                  id="outlined-basic"
                  label="Leave a Comment"
                  multiline
                  rows={4}
                  sx={{
                    width: "100%",
                  }}
                />

                <Button variant="contained" sx={{width: "100%"}}>Submit</Button>
              </form>
            </div>
          </Col>

          <Col xs={12} sm={12} md={6}>
            <div className="d-flex flex-column gap-3 py-5">
              <h3 className="mb-0 heading">Get in touch with us</h3>

              <div className="d-flex flex-column align-items-start gap-4 w-100">
                <div className="d-flex justify-content-start align-items-center gap-2">
                  <HomeIcon sx={{color : deepOrange[500]}} />
                  <address className="mb-0 c-text">
                    Hno:277 , Near XYZ Building
                  </address>
                </div>

                <div className="d-flex justify-content-start align-items-center gap-2">
                  <CallIcon sx={{color : deepOrange[500]}} />
                  <a href="tel:+92-3120299823" className="c-text">
                    +92-3120299823
                  </a>
                </div>

                <div className="d-flex justify-content-start align-items-center gap-2">
                  <MailIcon sx={{color : deepOrange[500]}} />
                  <a
                    href="mailto:umerhussain240898@gmail.com"
                    className="c-text"
                  >
                    umerhussain240898@gmail.com
                  </a>
                </div>

                <div className="d-flex justify-content-start align-items-center gap-2">
                  <StoreIcon sx={{color : deepOrange[500]}} />

                  <p className="mb-0 c-text">Monday - Friday 10 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
