import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import bookStore from "../Stores/bookStore";

//Book
const AddItem = () => {
  const [itemData, setitemData] = useState({
    title: "",
    author: "",
    genre: "",
  });

  const handleData = (event) => {
    setitemData({ ...itemData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    bookStore.addItem({ ...itemData });
    alert("Book has been added");
    setitemData({
      title: "",
      author: "",
      genre: "",
    });
    event.preventDefault();
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Title"
            name="title"
            onChange={handleData}
            value={itemData.title}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Author"
            name="author"
            onChange={handleData}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Book Genre(s)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Genre(s), comma seperated"
            name="genres"
            onChange={handleData}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
