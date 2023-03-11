import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Review from "./Review";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const token = localStorage.getItem("token");
  const accessToken = localStorage.getItem("accessToken");

  const fetchData = async () => {
    try {
      const {
        data: { data },
      } = await axios.get("http://localhost:3000/api/v1/review", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setReviews(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (reviews.length === 0) {
    return (
      <div className="loading_container">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="m-title">
          <div className="underline"></div>
        </div>
        <article className="menu">
          {reviews.map((singleReview, index) => {
            return <Review singleReview={singleReview} key={index} />;
          })}
        </article>
      </main>
    </>
  );
};

export default Reviews;
