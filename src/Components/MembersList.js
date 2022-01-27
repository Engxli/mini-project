import React from "react";
import memberStore from "../Stores/memberStore";
import MemberItem from "./MemberItem";

const MembersList = () => {
  const members = memberStore.members.map((member) => (
    <MemberItem member={member} />
  ));
  return (
    <div className="frame">
      <h2>Header</h2>
      {members}
    </div>
  );
};

export default MembersList;
