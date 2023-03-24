import axios from "axios";
import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ reviewState, setShowModal, setReviewState, fetchData }) => {
  const [Restaurant, setRestaurant] = useState(reviewState.Restaurant);
  const [Category, setCategory] = useState(reviewState.Category);
  const [Review, setReview] = useState(reviewState.Review);
  const [Author, setAuthor] = useState(reviewState.Author);
  const [Star, setStar] = useState(reviewState.Star);

  async function editBook() {
    try {
      const {
        data: { data },
      } = await axios.patch(
        `http://localhost:3000/api/v1/review/${reviewState._id}`,
        {
          Restaurant,
          Category,
          Review,
          Author,
          Star,
        }
      );
      fetchData();
      setReviewState(data);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="form_container">
      <form className="form book-form modal_form" onSubmit={editBook}>
        <h3 className="modal_heading">Edit Book</h3>
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
          <option value="cafe">Category</option>
          <option value="cafe">Cafe</option>
          <option value="fast food">Fast food</option>
          <option value="casual restaurant">Casual Restaurant</option>
          <option value="pizzerias">Pizzerias</option>
        </select>
        <button className="closeBtn" onClick={() => setShowModal(false)}>
          <IoMdCloseCircle className="modal_icon" />
        </button>
        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Modal;
