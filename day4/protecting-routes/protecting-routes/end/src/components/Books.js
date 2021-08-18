import React from "react";
import { useParams } from "react-router-dom";
import Catalog from "./Catalog";
import BookDetails from "./BookDetails";

const Books = () => {
  const { id } = useParams();
  return (
    <div className="books-page">
      {!id && <Catalog />}
      {id && <BookDetails isbn={id} />}
    </div>
  );
};

export default Books;
