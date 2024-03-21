import "./App.css";
import React from "react";
import TabComponent from "./components/CategoriesTab/TabComponent";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components//ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          <h2 className="login-name">A</h2>
        </div>
      </header> */}
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home/:productId"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<TabComponent />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
