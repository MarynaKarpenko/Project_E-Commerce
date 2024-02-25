import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="product_image" />
          <img src={product.image} alt="product_image" />
          <img src={product.image} alt="product_image" />
          <img src={product.image} alt="product_image" />
        </div>
        <div className="product-display-img">
          <img
            src={product.image}
            alt="product_image"
            className="product-display-main-img"
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="star_dull_icon" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            ${product.old_price}
          </div>
          <div className="product-display-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-prices-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          nostrum blanditiis magni ratione facilis fugit ullam odit nisi, ipsum
          aut laborum unde fuga natus sit maxime harum sapiente aspernatur. Qui!
        </div>
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-sizes">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="product-display-right-category">
          <span>Category: </span>Women, T-shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags: </span>Modern
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
