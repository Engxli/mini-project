import React, { useState } from "react";
import members from "../Data/members";
import bookStore from "../Stores/bookStore";
import memberStore from "../Stores/memberStore";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { observer } from "mobx-react";

const ViewMember = ({ member }) => {
  const [bookId, setBookId] = useState(-1);
  const [query, setQuery] = useState("");

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleBorrow = (bookId) => {
    if (bookId != -1) {
      memberStore.borrowBook(member.id, bookId);
    }
    //setBookId(-1);
  };

  const books = bookStore.books
    .filter((book) =>
      member.currentlyBorrowedBooks.find((id) => id === book.id)
    )
    .map((book) => (
      <div className="borrowed-record">
        {book.title}
        <Button onClick={() => memberStore.returnBook(book.id)}>return</Button>
      </div>
    ));
  return (
    <div className="details">
      <h1>Member Details</h1>
      <div className="super-master">
        <div className="member-info-master">
          <div className="member-info">
            <h3>Name:</h3>
            <h3>
              {member.firstName} {member.lastName}
            </h3>
          </div>
          <div className="member-info">
            <h3>Membership:</h3>
            <h3>{member.membership}</h3>
          </div>

          <div className="held-books">
            {books.length > 0 && <h2>Currently held books</h2>}
            <p>{books}</p>
          </div>
        </div>
        {memberStore.isAllowedtoBurrow(member.id) &&
        bookStore.availableBooks().length > 0 ? (
          <div className="member-info-master-2">
            <h2>Books you may borrow</h2>
            <InputGroup onChange={handleQuery} size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">
                Search
              </InputGroup.Text>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            {bookStore
              .availableBooks()
              .filter(
                (book) =>
                  book.title.toLowerCase().includes(query.toLowerCase()) ||
                  book.genre.some((genre) =>
                    genre.toLowerCase().includes(query.toLowerCase())
                  )
              )
              .map((book) => (
                <div className="borrowed-record">
                  <p>{book.title} </p>
                  <Button onClick={() => handleBorrow(book.id)}>borrow</Button>
                </div>
              ))}{" "}
          </div>
        ) : (
          <h2>
            Either there are no books available or you have reached your
            borrowing limits
          </h2>
        )}
      </div>
    </div>
  );
};

export default observer(ViewMember);
