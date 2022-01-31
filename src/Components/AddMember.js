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
    <div className="add-item">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            <h2>Member First Name</h2>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            onChange={handleData}
            value={itemData.firstName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            <h2>Member Last Name</h2>
          </Form.Label>
          <Form.Control
            value={itemData.lastName}
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            onChange={handleData}
          />
        </Form.Group>

        <Form.Group>
          <Form.Select
            value={itemData.membership}
            onChange={handleData}
            aria-label="Default select example"
            name="membership"
          >
            <option value="">select membership</option>

            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
          </Form.Select>
          <Button
            className="submit-button"
            variant="primary"
            onClick={handleSubmit}
          >
            Add
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddMember;
