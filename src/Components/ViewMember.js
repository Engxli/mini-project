import React, { useState } from "react";
import members from "../Data/members";
import bookStore from "../Stores/bookStore";
import memberStore from "../Stores/memberStore";
import { Form, Button } from "react-bootstrap";
import { observer } from "mobx-react";

const ViewMember = ({ member }) => {
  const [bookId, setBookId] = useState(-1);

  const handleBorrow = (event) => {
    if (bookId != -1) {
      memberStore.borrowBook(member.id, bookId);
    }
    setBookId(-1);
  };

  const books = bookStore.books
    .filter((book) =>
      member.currentlyBorrowedBooks.find((id) => id === book.id)
    )
    .map((book) => (
      <div>
        {book.title}{" "}
        <Button onClick={() => memberStore.returnBook(book.id)}>return</Button>
      </div>
    ));
  return (
    <div>
      <h1>{member.firstName}</h1>
      <h1>{member.lastName}</h1>
      <h1>{member.membership}</h1>
      {books.length > 0 && <h1>Currently held books</h1>}
      <h2>{books}</h2>
      {memberStore.isAllowedtoBurrow(member.id) &&
        bookStore.availableBooks().length > 0 && (
          <Form.Group>
            <h1>Books you may borrow</h1>
            <Form.Select
              onChange={(event) => setBookId(event.target.value)}
              aria-label="Default select example"
            >
              <option value="-1">select book</option>
              {bookStore.availableBooks().map((book) => (
                <option value={book.id}>{book.title}</option>
              ))}
            </Form.Select>
            <Button onClick={handleBorrow}>Borrow</Button>
          </Form.Group>
        )}
    </div>
  );
};

export default observer(ViewMember);
