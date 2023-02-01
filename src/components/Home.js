import React from "react";
import Navbar from "./Navbar";
import vector from "../image/image_food.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="main_container">
        <div className="action-text">
          {" "}
          <h1 className="heading">
            Find reviews with <br />
            <span className="heading-span">ResReview</span>
          </h1>
          <p>Your authentic source of restaurant reviews</p>
          <button className="btn-main" onClick={() => navigate("/reviews")}>
            all reviews
          </button>
          <button className="btn-main" onClick={() => navigate("/form")}>
            add review
          </button>
        </div>
        <div className="action-photo">
          <img
            src={vector}
            alt=""
            // style={{ width: "1500px", height: "100%" }}
            className="food_image"
          />
        </div>
      </main>
    </>
  );
}

export default Home;
