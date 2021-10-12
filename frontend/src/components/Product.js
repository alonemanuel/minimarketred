import React from "react";
import QuantityLeft from "./QuantityLeft";
export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <a href={`/products/${product._id}`}>
        <img className="small" src={product.imageFilename} alt={product.name} />
      </a>
      <div className="card-body">
        <a href={`/products/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <div className="price">{`${product.price} NIS`}</div>
        <h3 className="creator">{product.creator}</h3>
        <p className="description">{product.description}</p>
        <p className="quantityLeft">{product.quantityLeft > 0 ? product.quantityLeft : "SOLD OUT"}</p>
      </div>
    </div>
  );
}
