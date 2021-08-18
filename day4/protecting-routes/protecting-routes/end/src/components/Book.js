import React from "react";

const Book = ({ thumb, title }) => (
  <div className="book-item">
    <img className="book-thumb" src={thumb} alt={title} />
  </div>
);

export default Book;
