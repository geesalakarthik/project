import React from "react";
import Layout from "./../component/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/Homestyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>FOOD</h1>
          <h1>RESTURANRT</h1>
          <p>BEST FOOD IN INDIA</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
