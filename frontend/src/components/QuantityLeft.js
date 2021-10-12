import React from "react";

export default function QuantityLeft(props) {
  const { quantityLeft } = props;
  return (
    <div>
      <p > {quantityLeft > 0 ? 5 : "SOLD OUT"}</p>

      <p>{quantityLeft.quantityLeft}</p>
    </div>
  );
}
