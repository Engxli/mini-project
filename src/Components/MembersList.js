import memberStore from "../Stores/memberStore";
import MemberItem from "./MemberItem";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import React, { useState } from "react";
import { observer } from "mobx-react";

const MembersList = ({ handleClick }) => {
  const [query, setQuery] = useState("");

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const members = memberStore.members
    .filter((member) =>
      (member.firstName + " " + member.lastName)
        .toLowerCase()
        .includes(query.toLowerCase())
    )
    .map((member) => (
      <div className="item" onClick={() => handleClick(member, "viewMember")}>
        <MemberItem member={member} />
      </div>
    ));
  return (
    <div className="frame">
      <div className="header">
        <h1>Members List</h1>
        <div className="control">
          <Button
            variant="primary"
            onClick={() => handleClick({}, "addMember")}
          >
            Add
          </Button>
          <Button onClick={() => handleClick({}, "home")} variant="primary">
            Info
          </Button>
          <InputGroup onChange={handleQuery} size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </div>
      </div>
      <div className="itemlistheader">
        <h2>id</h2> <h2>Name</h2>
      </div>
      <div className="itemlist">{members}</div>
    </div>
  );
};

export default observer(MembersList);
