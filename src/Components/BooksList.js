import React from "react";
import bookStore from "../Stores/bookStore";
import BookItem from "./BookItem";

const BooksList = () => {
  const books = bookStore.books.map((book) => <BookItem book={book} />);
  return <div>{books}</div>;
};

export default BooksList;
