import React, { useState } from "react";
import MembersList from "./MembersList";
import BookList from "./BooksList";
import "../Style/Home.css";
import "../Style/List.css";
import AddBook from "./AddBook";
import PlaceHolder from "./PlaceHolder";
import ViewBook from "./ViewBook";

const Home = () => {
  const [show, setShow] = useState("home");
  const [item, setItem] = useState({});

  const handleClickBook = (book, typeOfView) => {
    setShow(typeOfView);
    setItem(book);
  };

  return (
    <div className="home">
      <div className="info">
        {show === "home" && <PlaceHolder />}
        {show === "addBook" && <AddBook />}
        {show === "viewBook" && <ViewBook book={item} />}
      </div>
      <div className="memebers-list">
        <MembersList />
      </div>
      <div className="books-list">
        <BookList handleClickBook={handleClickBook} />
      </div>
    </div>
  );
};

export default Home;
