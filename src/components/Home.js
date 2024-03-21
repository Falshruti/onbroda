import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import productData from "./CategoriesTab/Productimages.json"; // Import product data
import "./tabstyle.css";
import Dropdown from "react-bootstrap/Dropdown";
import { SocialIcon } from "react-social-icons";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product with the corresponding ID
    const foundProduct = productData.images.find((p) => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBack = async () => {
    navigate("/");
  };

  return (
    <>
      <header className="App-header">
        <div>
          <h1>
            On<span>broda</span>
          </h1>
        </div>
        <div id="sidebar-menu">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="btn-warning">
              <FontAwesomeIcon icon={faBars} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item id="name">Ashly Smith</Dropdown.Item>
              <Dropdown.Item id="email"> {user.email}</Dropdown.Item>
              <Dropdown.Item id="button-content" className="btn">
                Request Content
              </Dropdown.Item>
              <Dropdown.Item id="connect-us">Connect us with :</Dropdown.Item>
              <Dropdown.Item id="icon">
                <SocialIcon url="https://instagram.com" />
                <SocialIcon url="https://linkedin.com" id="linkedin" />
                <SocialIcon url="https://twitter.com" />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <h2 className="login-name">A</h2> */}
          <div className="d-grid gap-2">
            <Button onClick={handleLogout} className="login-name btn-secondary" style={{paddingLeft: "12px", paddingTop:"3px" }}>
            {user.email.charAt(0).toUpperCase()}
            </Button>
          </div>
        </div>
      </header>
      <div className="p-4 box mt-3 home">
        <Container>
          <Row>
            <Col>
              <button className="home-back btn" onClick={handleBack}>
                <FontAwesomeIcon icon={faArrowLeft} /> Onboarding Details
              </button>{" "}
              <br />
            </Col>
          </Row>
          <Row className="product-details">
            <Col>
              {product && (
                <>
                  <p className="logo"><img src={`http://localhost:3000/${product.logo}`} alt={`Product ${product.id}`} /><h3>{product.name}</h3></p>
                  <p className="rating">{product.rating}</p>
                  {/* <p>Category: {product.category}</p> */}
                  <img src={`http://localhost:3000/${product.imageSrc}`} alt={`Product ${product.id}`} />
                </>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
