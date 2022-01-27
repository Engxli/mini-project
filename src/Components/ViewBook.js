import React from "react";
import books from "../Data/books";
import memberStore from "../Stores/memberStore";

const ViewBook = ({ book }) => {
  const members = memberStore.members
    .filter((member) => book.borrowedBy.find((id) => id === member.id))
    .map((member) => `${member.firstName} ${member.lastName}`);
  return (
    <div>
      <h1>{book.title}</h1>
      <h1>{book.author}</h1>
      <h1>{book.genre.join(", ")}</h1>
      <h1>{book.available ? "Available" : "Not Available"}</h1>
      <h1>{members}</h1>
    </div>
  );
};

export default ViewBook;
