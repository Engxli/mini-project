import React from "react";
import memberStore from "../Stores/memberStore";
import MemberItem from "./MemberItem";

const MembersList = () => {
  const members = memberStore.members.map((member) => (
    <MemberItem member={member} />
  ));
  return <div>{members}</div>;
};

export default MembersList;
