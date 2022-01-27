import React from "react";
import MembersList from "./MembersList";
import BookList from "./BooksList";
import "../Style/Home.css";
import "../Style/List.css";
import AddItem from "./AddItem";

const Home = () => {
  return (
    <div className="home">
      <div className="info">
        <AddItem />
      </div>
      <div className="memebers-list">
        <MembersList />
      </div>
      <div className="books-list">
        <BookList />
      </div>
    </div>
  );
};

export default Home;
