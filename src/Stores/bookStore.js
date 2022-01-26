import { makeAutoObservable } from "mobx";
import booksData from "../Data/books";
class BookStore {
  books = booksData;
  constructor() {
    makeAutoObservable(this);
  }
}

const books = new BookStore();
export default books;
