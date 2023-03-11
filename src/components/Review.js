import React from "react";
import ReactStars from "react-rating-stars-component";

const Review = ({ singleReview }) => {
  const { Restaurant, Category, Review, Author, Star } = singleReview;
  // console.log(singleReview);
  return (
    <div className="movie">
      <div className="title">
        <h2>{Restaurant}</h2>
      </div>
      <p className="info">{Review}</p>
      <h4 className="byline">{Category}</h4>
      <ReactStars
        count={5}
        // onChange={ratingChanged}
        edit={false}
        value={Star}
        size={24}
        activeColor="#ffd700"
      />
      <h4 className="headline">{Author}</h4>
    </div>
  );
};

export default Review;
