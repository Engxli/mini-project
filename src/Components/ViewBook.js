import React, { useState } from "react";
import books from "../Data/books";
import memberStore from "../Stores/memberStore";
import bookStore from "../Stores/bookStore";
import { Form, Button } from "react-bootstrap";
import { observer } from "mobx-react";

const ViewBook = ({ book }) => {
  const [memberId, setMemberId] = useState(-1);
  const members = memberStore.members.filter((member) =>
    book.borrowedBy.find((id) => id == member.id)
  );

  const handleBorrow = (event) => {
    if (memberId != -1) {
      memberStore.borrowBook(+memberId, +book.id);
    }
    setMemberId(-1);
  };

  const handleReturn = (event) => {
    memberStore.returnBook(book.id);
  };

  return (
    <div>
      <h1>{book.title}</h1>
      <h1>{book.author}</h1>
      <h1>{book.genre.join(", ")}</h1>

      <h1>{book.available ? "Available" : "Not Available"}</h1>
      {book.available ? (
        <Button onClick={handleBorrow}>Borrow</Button>
      ) : (
        <Button onClick={handleReturn}>Return</Button>
      )}

      <h2>
        {book.available && (
          <div>
            <h1>Who can Borrow</h1>
            <Form.Group>
              <Form.Select
                onChange={(event) => setMemberId(event.target.value)}
                aria-label="Default select example"
              >
                <option value="-1">Select Borrower</option>

                {memberStore.getMembersAllowed().map((member) => (
                  <option value={member.id}>
                    {member.firstName} {member.lastName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
        )}
      </h2>

      <h1>History of Borrowers</h1>
      <h2>
        {members.map((member) => (
          <div>
            {member.firstName} {member.lastName}
          </div>
        ))}
      </h2>
    </div>
  );
};

export default observer(ViewBook);
