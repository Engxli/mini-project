import React from "react";

const MemberItem = ({ member }) => {
  return (
    <div className="item">
      <h1>{member.firstName}</h1>
      <hr />
    </div>
  );
};

export default MemberItem;
