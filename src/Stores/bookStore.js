import { makeAutoObservable } from "mobx";
import booksData from "../Data/books";
import memberStore from "./memberStore";
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

  bookHeldBy = (bookId) => {
    const book = this.books.find((b) => b.id == bookId);
    const memberId = book.borrowedBy[book.borrowedBy.length - 1];
    return memberStore.getMember(memberId);
  };

  getStats = () => {
    const genreStatObj = {};
    const genreStat = this.books
      .map((book) => book.genre)
      .flat()
      .sort((g1, g2) => (g1 > g2 ? 1 : -1))
      .reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []
      );
    genreStat.forEach((genre) => (genreStatObj[genre] = 0));

    const genreStatRaw = this.books
      .map((book) => book.genre)
      .flat()
      .sort((g1, g2) => (g1 > g2 ? 1 : -1));

    genreStatRaw.forEach((genre) => (genreStatObj[genre] += 1));

    const booksStat = {
      numberOfBooks: this.books.length,
      availableBooks: this.availableBooks().length,
      unavailableBooks: this.books.length - this.availableBooks().length,
      ...genreStatObj,
    };

    return booksStat;
  };
}

const books = new BookStore();
export default books;
