import { makeAutoObservable } from "mobx";
import booksData from "../Data/books";
class BookStore {
  books = booksData;
  constructor() {
    makeAutoObservable(this);
  }

  addItem(newBook) {
    newBook.slug = newBook.title.toLowerCase().split(" ").join("-");
    newBook.id = this.books[this.books.length - 1].id + 1;
    newBook.borrowedBy = [];
    newBook.available = true;
    console.log(newBook);
    console.log("newBook.genre", newBook.genre);
    newBook.genre = newBook.genre.trim().split(/[ ,]+/);

    this.books = [...this.books, newBook];
  }
}

const books = new BookStore();
export default books;
