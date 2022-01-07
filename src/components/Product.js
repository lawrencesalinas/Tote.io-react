import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
const linkStyle = {
    textDecoration: 'none'
  }

//bootsrap margin and padding added
function Product(props) {
  // console.log(props)
  return (
    // margin and padding, used links  instead of hrefs so we dont render a page
    // instead render a component
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${props.product._id}`}>
        {/* render product name and image */}
        <Card.Img src={props.product.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${props.product._id}`} style={linkStyle}>
          <Card.Title as="div">
            <strong>{props.product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
           
            {props.product.rating} from {props.product.numReviews}
            {/* render product proprs rating and number of reviews */}
            {/* props sent to Rating component  */}
            {/* render Rating component here */}
            <Rating
              value={props.product.rating}
              text={`${props.product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">{props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
