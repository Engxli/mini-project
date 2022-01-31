import React, { useState } from "react";
import MembersList from "./MembersList";
import BookList from "./BooksList";
import "../Style/Home.css";
import "../Style/List.css";
import AddBook from "./AddBook";
import AddMember from "./AddMember";
import PlaceHolder from "./PlaceHolder";
import ViewBook from "./ViewBook";
import ViewMember from "./ViewMember";
import BookItem from "./BookItem";

const Home = () => {
  const [show, setShow] = useState("home");
  const [item, setItem] = useState({});

  const handleClickItem = (item, typeOfView) => {
    setShow(typeOfView);
    setItem(item);
  };

  return (
    <div className="home">
      <div className="info">
        <div className="info-details">
          {show === "home" && <PlaceHolder />}
          {show === "addBook" && <AddBook />}
          {show === "addMember" && <AddMember />}
          {show === "viewBook" && <ViewBook book={item} />}
          {show === "viewMember" && <ViewMember member={item} />}
        </div>
      </div>
      <div className="members-list">
        <MembersList handleClick={handleClickItem} />
      </div>
      <div className="books-list">
        <BookList handleClick={handleClickItem} />
      </div>
    </div>
  );
};

export default Home;
