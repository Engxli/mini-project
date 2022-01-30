import { makeAutoObservable } from "mobx";
import booksData from "../Data/books";
class BookStore {
  books = booksData;
  constructor() {
    makeAutoObservable(this);
  }

  addItem = (newBook) => {
    newBook.slug = newBook.title.toLowerCase().split(" ").join("-");
    newBook.id = this.books[this.books.length - 1].id + 1;
    newBook.borrowedBy = [];
    newBook.available = true;
    console.log(newBook);

    this.books = [...this.books, newBook];
  };

  borrowBook = (bookId, memberId) => {
    const book = this.books.find((b) => b.id == bookId);
    book.borrowedBy.push(memberId);
    book.available = false;
  };

  returnBook = (bookId) => {
    const book = this.books.find((b) => b.id == bookId);
    book.available = true;
  };

  availableBooks = () => {
    return this.books.filter((book) => book.available);
  };
}

const books = new BookStore();
export default books;
