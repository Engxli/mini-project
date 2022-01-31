import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import bookStore from "../Stores/bookStore";
import "../Style/Add.css";

//Book
const AddBook = () => {
  const [itemData, setitemData] = useState({
    title: "",
    author: "",
    genre: "",
  });

  const [genreData, setGenreData] = useState([]);

  const handleGenreData = (event) => {
    if (!genreData.includes(event.target.value) && event.target.value !== "") {
      setGenreData([...genreData, event.target.value]);
      console.log(genreData);
    }
  };

  const handleGenreDelete = (genreDelete) => {
    setGenreData(genreData.filter((genre) => genre !== genreDelete));
  };

  const genres = bookStore.books
    .map((book) => book.genre)
    .flat()
    .sort((g1, g2) => (g1 > g2 ? 1 : -1))
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    );
  console.log(genres);

  const handleData = (event) => {
    setitemData({ ...itemData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    bookStore.addItem({ ...itemData, genre: [...genreData] });
    alert("Book has been added");
    setitemData({
      title: "",
      author: "",
      genre: "",
    });
    setGenreData([]);
    event.preventDefault();
  };

  return (
    <div className="add-item">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            <h2>Book Title</h2>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Title"
            name="title"
            onChange={handleData}
            value={itemData.title}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            <h2>Book Author</h2>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Author"
            name="author"
            value={itemData.author}
            onChange={handleData}
          />
        </Form.Group>

        <Form.Group>
          <Form.Select
            onChange={handleGenreData}
            aria-label="Default select example"
            value={itemData.genre}
          >
            <option value="">select genre</option>
            {genres.map((genre) => (
              <option value={genre}>{genre}</option>
            ))}
          </Form.Select>
          {genreData.map((genre) => (
            <Button
              className="genre-button"
              onClick={() => handleGenreDelete(genre)}
            >
              {genre}
            </Button>
          ))}
          <br />
        </Form.Group>
        <Button
          className="submit-button"
          variant="primary"
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddBook;
