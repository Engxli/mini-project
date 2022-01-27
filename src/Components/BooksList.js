import { Button, InputGroup, FormControl } from "react-bootstrap";
import React from "react";
import bookStore from "../Stores/bookStore";
import BookItem from "./BookItem";

const BooksList = () => {
  const books = bookStore.books.map((book) => (
    <div className="item">
      <BookItem book={book} />
    </div>
  ));
  return (
    <div className="frame">
      <div className="header">
        <h1>Header</h1>
        <div className="control">
          <Button variant="primary">Add</Button>
          <Button variant="primary">Info</Button>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </div>
      </div>
      <div className="itemlistheader">
        <h2>id</h2> <h2>Title</h2>
      </div>
      <div className="itemlist">{books}</div>
    </div>
  );
};

export default BooksList;