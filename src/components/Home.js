import React, { useEffect } from "react";
import Navbar from "./Navbar";
import vector from "../image/image_food.png";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = queryString.parse(location.search);
    console.log(query);
    if (query.token) {
      window.localStorage.setItem("token", query.token);
      // history.pushState("/");
    }
  });

  return (
    <>
      <Navbar />
      <div className="main_container">
        <div className="action-text">
          <h1 className="heading">
            Find reviews with <br />
            <span className="heading-span">ResReview</span>
          </h1>
          <p>Your authentic source of restaurant reviews</p>
          <div className="main-buttons">
            <button className="btn-main" onClick={() => navigate("/reviews")}>
              all reviews
            </button>
            <button className="btn-main" onClick={() => navigate("/form")}>
              add review
            </button>
          </div>
        </div>
        <div className="action-photo">
          <img
            src={vector}
            alt=""
            // style={{ width: "1500px", height: "100%" }}
            className="food_image"
          />
        </div>
      </div>{" "}
      {/* <iframe
        src="https://cedirates-widget.vercel.app/"
        style={{
          border: "none",
          overflow: "hidden",
          width: "258px",
          height: "310px",
        }}
        title="price-card"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <div className="overlay"></div>
    </>
  );
}

export default Home;
