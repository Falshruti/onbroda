import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Login from "../Login";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signup from "../Signup";
import {
  UserAuthContextProvider,
  useUserAuth,
} from "../../context/UserAuthContext";
import SearchBar from "../SearchBar/SearchBar";
import "../tabstyle.css";
import productImages from "./Productimages.json"; // Import the JSON file
import AdSense from "./AdSense"; // Path to the AdSense component
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";

const TabComponent = () => {
  const { user } = useUserAuth();
  const [val, setVal] = useState("one");
  const [show, setShow] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();

  const handleTab = (e, newVal) => {
    setVal(newVal);
  };

  //   const handleShow = (productId) => {
  //     setSelectedProductId(productId);
  //     setShow(true);
  //   };

  const handleShow = (productId) => {
    if (user) {
      navigate(`/home/${productId}`);
    } else {
      setSelectedProductId(productId);
      setShow(true);
    }
  };

  const renderProducts = () => {
    // Logic to fetch and render product images based on the selected tab value
    if (val === "one") {
      return (
        <>
          {/* Render all product images */}
          <div className="product-images">
            {productImages.images.map((product, index) => (
              // <div key={index}>
              // <h3>{product.name}</h3>
              // <p>ID: {product.id}</p>
              // <p>Category: {product.category}</p>
              <img
                src={product.imageSrc}
                alt={`Product ${product.id}`}
                type="button"
                key={index}
                style={{ marginLeft: "10px" }}
                onClick={() => handleShow(product.id)}
              />
              // </div>
            ))}
          </div>
          <div>
            {/* Place the AdSense component wherever you want the ad to appear */}
            <AdSense />
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Container>
              <Row>
                <Col>
                  <UserAuthContextProvider>
                    <Routes>
                      <Route
                        path="/"
                        element={<Login productId={selectedProductId} />}
                      />
                      <Route path="/signup" element={<Signup />} />
                    </Routes>
                  </UserAuthContextProvider>
                </Col>
              </Row>
            </Container>
          </Modal>
        </>
      );
    } else {
      // Render specific product images based on the selected tab value
      return <></>;
    }
  };

  return (
    <center>
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
              <Dropdown.Item id="email">ashlysmith@gmail.com</Dropdown.Item>
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
          <h2 className="login-name">AB</h2>
        </div>
      </header>
      <div className="search">
        <SearchBar />
      </div>
      <div
        style={{
          color: "#e5dada",
          lineHeight: "0.2",
          marginTop: "22px",
          fontSize: "12px",
        }}
      >
        <p>Discover the ease of onbording for user satisfaction with a </p>
        <p>seamless experience that makea a lasting impression!</p>
      </div>
      <div
        style={{
          color: "#EAAB4E",
          marginTop: "25px",
          fontSize: "12px",
          fontWeight: "bold",
          borderBottom: "1px solid #2B3139",
        }}
      >
        <p>100+ ONBODING SCREEN</p>
      </div>
      <div>
        <Box sx={{ maxWidth: 500 }}>
          <Tabs
            value={val}
            onChange={handleTab}
            textColor="primary"
            indicatorColor="secondary"
            variant="scrollable"
          >
            <Tab value="one" label="All" />
            <Tab value="two" label="Health & Fitness" />
            <Tab value="three" label="Shopping" />
            <Tab value="four" label="Events" />
            <Tab value="five" label="Task Management" />
            <Tab value="six" label="Games & Comic " />
            <Tab value="seven" label="Self Help & Meditation" />
            <Tab value="eight" label="Food Delivery" />
            <Tab value="nine" label="Informative" />
            <Tab value="ten" label="Auto vehicle" />
            <Tab value="eleven" label="Chat & Communication" />
            <Tab value="twl" label="Design" />
            <Tab value="thrteen" label="Photos" />
            <Tab value="fourteen" label="OTT" />
            <Tab value="fiveteen" label="Education & Learning" />
            <Tab value="fourteen" label="Business" />
            <Tab value="fifteen" label="Online workspace" />
            <Tab value="sixteen" label="Tools" />
            <Tab value="seventeen" label="Travel" />
          </Tabs>
        </Box>
        <div style={{ height: 500 }}>{renderProducts()}</div>
      </div>
    </center>
  );
};
export default TabComponent;
