import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import memberStore from "../Stores/memberStore";

//Book
const AddMember = () => {
  const [itemData, setitemData] = useState({
    firstName: "",
    lastName: "",
    membership: "",
  });

  const handleData = (event) => {
    setitemData({ ...itemData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    memberStore.addItem({ ...itemData });
    alert("Member has been added");
    setitemData({
      firstName: "",
      lastName: "",
      membership: "",
    });
    event.preventDefault();
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Member First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            onChange={handleData}
            value={itemData.title}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Member Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            onChange={handleData}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Select Membership</Form.Label>
          <Form.Select
            onChange={handleData}
            aria-label="Default select example"
            name="membership"
          >
            <option value="">select membership</option>

            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
          </Form.Select>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddMember;
