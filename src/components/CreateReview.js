import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import Modal from "./Modal";
import Navbar from "./Navbar";

export const CreateReview = () => {
  const [reviewState, setReviewState] = useState({});
  const [Restaurant, setRestaurant] = useState("");
  const [Category, setCategory] = useState("");
  const [Review, setReview] = useState("");
  const [Author, setAuthor] = useState("");
  const [Star, setStar] = useState("");
  const [showModal, setShowModal] = useState(false);

  console.log(Star);
  const token = localStorage.getItem("token");

  const createReview = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { data },
      } = await axios.post(
        "http://localhost:3000/api/v1/review",
        {
          Restaurant,
          Category,
          Review,
          Author,
          Star,
        },
        { headers: { authorization: `Bearer ${token}` } }
      );

      setRestaurant("");
      setCategory("");
      setReview("");
      setAuthor("");
      setStar("");

      setReviewState(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteReview = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/review/${reviewState._id}`,
        { headers: { authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="title">Enter your review</h1>
        <div className="form_container">
          <form className="form book-form" onSubmit={createReview}>
            <label htmlFor="name" className="form-label">
              Restaurant
            </label>
            <input
              type="text"
              name="title"
              className="form-input username-input"
              value={Restaurant}
              onChange={(e) => setRestaurant(e.target.value)}
            />

            <label htmlFor="description" className="form-label">
              Review
            </label>
            <textarea
              type="text"
              name="description"
              className="form-textarea username-input"
              value={Review}
              onChange={(e) => setReview(e.target.value)}
            />
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              type="text"
              name="author"
              className="form-input username-input"
              value={Author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <label htmlFor="author" className="form-label extra">
              On a scale of 1-5 rate your experience
            </label>
            <fieldset value={Star} onChange={(e) => setStar(e.target.value)}>
              <div className="field">
                <input
                  type="radio"
                  id="number-one"
                  className="field-input"
                  value="1"
                  name="rating"
                />
                <label htmlFor="number one" className="field-label">
                  1
                </label>
              </div>
              <div className="field">
                <input
                  type="radio"
                  id="number-two"
                  className="field-input"
                  value="2"
                  name="rating"
                />
                <label htmlFor="number two" className="field-label">
                  2
                </label>
              </div>
              <div className="field">
                <input
                  type="radio"
                  id="number-three"
                  className="field-input"
                  value="3"
                  name="rating"
                />
                <label htmlFor="number three" className="field-label">
                  3
                </label>
              </div>
              <div className="field">
                <input
                  type="radio"
                  id="number-four"
                  className="field-input"
                  value="4"
                  name="rating"
                />
                <label htmlFor="number four" className="field-label">
                  4
                </label>
              </div>
              <div className="field">
                <input
                  type="radio"
                  id="number-five"
                  className="field-input"
                  value="5"
                  name="rating"
                />
                <label htmlFor="number five" className="field-label">
                  5
                </label>
              </div>
            </fieldset>

            <label htmlFor="author" className="form-label extra">
              Select the category of restaurant
            </label>
            <select
              name="category"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="cafe">Cafe</option>
              <option value="fast food">Fast food</option>
              <option value="casual restaurant">Casual Restaurant</option>
              <option value="pizzerias">Pizzerias</option>
            </select>

            <button className="btn btn-block" type="submit">
              Submit
            </button>
            <div className="form_alert"></div>
          </form>
        </div>
        <section className="output_container">
          <div className="output">
            <div className="book">
              <p className="name">
                <span>Restaurant :</span> {reviewState.Restaurant}
              </p>
              <p className="number">
                <span>Category : </span>
                {reviewState.Category}
              </p>
              <p className="address">
                <span>Review :</span> {reviewState.Review}
              </p>
              <p className="address">
                <span>Author :</span> {reviewState.Author}
              </p>
              <p className="address">
                <span>Star :</span> {reviewState.Star}
              </p>
              <div className="book_icons">
                <button type="button" className="delete-btn">
                  <FaTrash className="icons" onClick={deleteReview} />
                </button>
                <button type="button" className="edit-btn">
                  <FaEdit
                    className="icons"
                    onClick={() =>
                      setShowModal(showModal === false ? true : false)
                    }
                  />
                </button>
              </div>
            </div>
            <section
              className="modal"
              style={{ display: showModal ? "block" : "none" }}
            >
              <Modal setShowModal={setShowModal} />
            </section>
          </div>
        </section>
      </div>
    </>
  );
};
