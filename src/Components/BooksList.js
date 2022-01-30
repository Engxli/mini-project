import { Button, InputGroup, FormControl } from "react-bootstrap";
import React, { useState } from "react";
import bookStore from "../Stores/bookStore";
import BookItem from "./BookItem";
import { observer } from "mobx-react";

const BooksList = ({ handleClick }) => {
  const [query, setQuery] = useState("");

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const books = bookStore.books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.some((genre) =>
          genre.toLowerCase().includes(query.toLowerCase())
        )
    )
    .map((book) => (
      <div className="item" onClick={() => handleClick(book, "viewBook")}>
        <BookItem book={book} />
      </div>
    ));
  return (
    <div className="frame">
      <div className="header">
        <h1>Header</h1>
        <div className="control">
          <Button variant="primary" onClick={() => handleClick({}, "addBook")}>
            Add
          </Button>
          <Button variant="primary">Info</Button>
          <InputGroup onChange={handleQuery} size="sm" className="mb-3">
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

export default observer(BooksList);
