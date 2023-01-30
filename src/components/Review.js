import React from "react";

const Review = ({ singleReview }) => {
  const { Restaurant, Category, Review, Author } = singleReview;
  console.log(singleReview);
  return (
    <div className="movie">
      <div className="title">
        <h2>{Restaurant}</h2>
      </div>
      {/* <div className="details">
        <h4 className="rating">{mpaa_rating || "Unrated"}</h4>
        <h4 className="genre">{critics_pick}</h4>
        <h4 className="direct">{publication_date}</h4>
      </div> */}
      <p className="info">{Review}</p>
      <h4 className="byline">
        <span>by</span> {Category}
      </h4>

      <h4 className="headline">{Author}</h4>
    </div>
  );
};

export default Review;
