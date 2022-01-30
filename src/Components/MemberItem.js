import React from "react";

const MemberItem = ({ member }) => {
  return (
    <div className="record">
      <h2>{member.id}</h2>
      <h2>
        {member.firstName} {member.lastName}
      </h2>
    </div>
  );
};

export default MemberItem;
