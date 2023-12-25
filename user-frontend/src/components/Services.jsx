import { FaShippingFast, FaGift, FaCreditCard } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { LuBadgePercent } from "react-icons/lu";
import "./css/Services.css";

const Services = () => {
  return (
    <div className="container-fluid services-container">
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
        <div className="service-wrapper shadow">
          <FaShippingFast className="service-icon" />
          <div className="d-flex flex-column justify-content-between align-items-center">
            <h3 className="service-title">Free Shipping</h3>
            <p className="service-text">From all oders over $100</p>
          </div>
        </div>

        <div className="service-wrapper shadow">
          <FaGift className="service-icon" />
          <div className="d-flex flex-column justify-content-between align-items-center">
            <h3 className="service-title">Daily Surprise Offers</h3>
            <p className="service-text">Save up to 25% off</p>
          </div>
        </div>

        <div className="service-wrapper shadow">
          <BiSupport className="service-icon" />
          <div className="d-flex flex-column justify-content-between align-items-center">
            <h3 className="service-title">Support 24/7</h3>
            <p className="service-text">Shop with an expert</p>
          </div>
        </div>

        <div className="service-wrapper shadow">
          <LuBadgePercent className="service-icon" />
          <div className="d-flex flex-column justify-content-between align-items-center">
            <h3 className="service-title">Affordable Prices</h3>
            <p className="service-text">Get Factory direct price</p>
          </div>
        </div>

        <div className="service-wrapper shadow">
          <FaCreditCard className="service-icon" />
          <div className="d-flex flex-column justify-content-between align-items-center">
            <h3 className="service-title">Secure Payments</h3>
            <p className="service-text">100% Protected Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
