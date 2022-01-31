import React from "react";
import bookStore from "../Stores/bookStore";
import memberStore from "../Stores/memberStore";

const PlaceHolder = () => {
  const memberStats = memberStore.getStats();
  const bookStats = bookStore.getStats();
  return (
    <div className="info-general">
      <h1>
        Hello Admin,
        <br />
        this is a <b>no-fluff</b> admin pannel. Click on a <b>member</b> to see
        a member's detail, click on a <b>book</b> to see a book's detail.
        Everything else should be as intuitive, if not more. Enjoy admining!
      </h1>
      <h3>Number of Books: {bookStats.numberOfBooks}</h3>
      <h3>Available Books: {bookStats.availableBooks}</h3>
      <h3>unavailable Books: {bookStats.unavailableBooks}</h3>
      <h3>Number of Members: {memberStats.totalMember}</h3>
      <h3>Platinum Members: {memberStats.platinum}</h3>
      <h3>Gold Members: {memberStats.gold}</h3>
      <h3>Silver Members: {memberStats.silver}</h3>
    </div>
  );
};

export default PlaceHolder;
