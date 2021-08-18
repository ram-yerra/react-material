import React, { useState, useEffect } from "react";
import { getSecret } from "../booksService";

const Secret = () => {
  const [secret, setSecret] = useState();
  useEffect(() => {
    getSecret().then(data => setSecret(data));
  }, []);
  return secret ? (
    <div className="secret">
      <h3>Secret Book of the Week</h3>
      <div className="book-details">
        <img className="bd-thumb" src={secret.thumb} alt={secret.title} />
        <div className="bd-title">{secret.title}</div>
        <div className="bd-authors">{secret.authors.join(", ")}</div>
        <div className="bd-isbn">ISBN: {secret.isbn}</div>
        <div className="bd-pg-count">Pages: {secret.pageCount}</div>

        <div className="bd-short-desc">
          {secret.shortDescription || secret.longDescription}
        </div>
      </div>
    </div>
  ) : null;
};

export default Secret;
