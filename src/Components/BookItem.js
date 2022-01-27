import React from "react";

const BookItem = ({ book }) => {
  return (
    <div className="record">
      <h2>{book.id}</h2>
      <h2> {book.title}</h2>
    </div>
  );
};

export default BookItem;
