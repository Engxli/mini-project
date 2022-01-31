import React, { useState } from "react";
import books from "../Data/books";
import memberStore from "../Stores/memberStore";
import bookStore from "../Stores/bookStore";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { observer } from "mobx-react";

const ViewBook = ({ book }) => {
  const [query, setQuery] = useState("");

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const members = memberStore.members.filter((member) =>
    book.borrowedBy.find((id) => id == member.id)
  );

  const handleBorrow = (memberId) => {
    if (memberId != -1) {
      memberStore.borrowBook(+memberId, +book.id);
    }
  };

  const handleReturn = (event) => {
    memberStore.returnBook(book.id);
  };

  return (
    <div className="details">
      <h1>Book Details</h1>

      <div className="super-master">
        <div className="member-info-master">
          <div className="member-info">
            <h3>Title:</h3>
            <h3>{book.title}</h3>
          </div>

          <div className="member-info">
            <h3>Author:</h3>
            <h3>{book.author}</h3>
          </div>

          <div className="member-info">
            <h3>Genres:</h3>
            <h3>{book.genre.join(", ")}</h3>
          </div>

          <div className="member-info">
            <h3>{book.available ? "Available" : "Not Available"}</h3>
            {!book.available && <Button onClick={handleReturn}>Return</Button>}
          </div>

          {/* <h1>History of Borrowers</h1>
          <h2>
            {members.map((member) => (
              <div>
                {member.firstName} {member.lastName}
              </div>
            ))}
          </h2> */}
        </div>

        <div className="member-info-master-2">
          <h2>
            {book.available ? (
              <div>
                <h2>Who can Borrow</h2>
                <InputGroup onChange={handleQuery} size="sm" className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Search
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>

                {memberStore
                  .getMembersAllowed()
                  .filter((member) =>
                    (member.firstName + " " + member.lastName)
                      .toLowerCase()
                      .includes(query.toLowerCase())
                  )
                  .map((member) => (
                    <div className="borrowed-record">
                      <p>
                        {member.firstName} {member.lastName}
                      </p>
                      <Button onClick={() => handleBorrow(member.id)}>
                        borrow
                      </Button>
                    </div>
                  ))}
              </div>
            ) : (
              <div>
                book is borrowed by{" "}
                {bookStore.bookHeldBy(book.id).firstName +
                  " " +
                  bookStore.bookHeldBy(book.id).lastName}
              </div>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default observer(ViewBook);
