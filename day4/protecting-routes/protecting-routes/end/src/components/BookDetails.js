import React, { useState, useEffect } from "react";
import { getDetails } from "../booksService";

const BookDetails = ({ isbn }) => {
  const [details, setDetails] = useState();
  useEffect(() => {
    getDetails(isbn)
      .then(data => setDetails(data))
      .catch(() => console.log("ERROR"));
  }, [isbn]);
  return details ? (
    <div className="book-details">
      <img className="bd-thumb" src={details.thumb} alt={details.title} />
      <div className="bd-title">{details.title}</div>
      <div className="bd-authors">{details.authors.join(", ")}</div>
      <div className="bd-isbn">ISBN: {details.isbn}</div>
      <div className="bd-pg-count">Pages: {details.pageCount}</div>
      <div className="bd-short-desc">
        {details.shortDescription || details.longDescription}
      </div>
    </div>
  ) : (
    <h4>No Book Found</h4>
  );
};

export default BookDetails;
