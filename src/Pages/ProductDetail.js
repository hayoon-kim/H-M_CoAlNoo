import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  });
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <h3 className="">{product?.title}</h3>
          <h5 className="">{product?.price}</h5>
          <p>Conscious choice</p>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>S</Dropdown.Item>
              <Dropdown.Item>M</Dropdown.Item>
              <Dropdown.Item>L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button>Add</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
