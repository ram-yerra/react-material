import React, { useState, useEffect } from "react";
import Book from "./Book";
import { getTitles } from "../booksService";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getTitles().then(data => setBooks(data));
  }, []);
  return (
    <div className="catalog">
      {books &&
        books.map(book => (
          <Link key={book.isbn} to={`/books/${book.isbn}`}>
            <Book thumb={book.thumb} title={book.title} />
          </Link>
        ))}
    </div>
  );
};

export default Catalog;
