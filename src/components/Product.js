import React from "react";

function Product(props) {
  return (
    <div className="product">
      <h4>{props.name}</h4>
      <img src={props.image} alt="product" />
      <h3>{props.category}</h3>
      <h2>{parseInt(props.price)}AZN</h2>
      <h5>{props.olan[0] && props.olan[0].count+' '+'Dene Aldiz'}</h5>
      <button onClick={props.onBuy} disabled={props.money-props.total<props.price}>Al</button>
    </div>
  );
}

export default Product;
