import { Button, Rating } from "@mui/material";
import watch from "../images/products/watch.jpg";
import "./css/ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <Link to="/ourstore">
        <div className="productCard shadow rounded">
          <img src={watch} alt="watch" className="img-fluid" />

          <div className="cardBody">
            <h3 className="productTitle">
              Kids Headphones Bulk 10 Pack Multi Colored for Students
            </h3>

            <div>
              <Rating
                name="half-rating"
                size="small"
                defaultValue={2.5}
                precision={0.5}
              />
            </div>
            <p className="productPrice">$ 100.00</p>
            <Button variant="contained" className="p-button">
              Add To Cart
            </Button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
