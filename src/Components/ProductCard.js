import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product_card" onClick={showDetail}>
      <img src={item?.img} alt="" />
      <div className="">Consious choice</div>
      <div className="">{item?.title}</div>
      <div className="">{item?.price}</div>
      <div className="">{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
