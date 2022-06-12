import React from "react";
import "./product.css";
import Rating from "./Rating";

function Product({ products }) {
	return (
		<section className="products">
			{products.map((product) => (
        <div key={product.id} className="product">
          <div className="product__img">
            <img src={product.img} alt="#" />
          </div>
          <div className="product__wrapper">
            <Rating />
            <div className="product__price">{product.price} $</div>
            <div className="product__name">{product.name.length <= 60 ? product.name : product.name.slice(0, 60) + "..."}</div>
          </div>
          <button className="product__button">Buy</button>
        </div>
			))}
		</section>
	);
}

export default Product;
