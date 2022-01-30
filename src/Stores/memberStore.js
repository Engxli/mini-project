import { makeAutoObservable } from "mobx";
import membersData from "../Data/members";
import bookStore from "./bookStore";
class MemberStore {
  members = membersData;
  constructor() {
    makeAutoObservable(this);
  }

  addItem = (newMember) => {
    console.log("hi");
    newMember.slug =
      newMember.firstName.toLowerCase() +
      "-" +
      newMember.lastName.toLowerCase();
    newMember.id = this.members[this.members.length - 1].id + 1;
    newMember.currentlyBorrowedBooks = [];

    this.members = [...this.members, newMember];
  };

  getMembersAllowed = () => {
    const limit = { silver: 2, gold: 3, platinum: 5 };
    return this.members.filter(
      (member) =>
        limit[member.membership] - member.currentlyBorrowedBooks.length > 0
    );
  };

  isAllowedtoBurrow = (memberId) => {
    const member = this.members.find((m) => m.id == memberId);
    return this.getMembersAllowed().includes(member);
  };

  borrowBook = (memberId, bookId) => {
    const member = this.members.find((m) => m.id == memberId);
    member.currentlyBorrowedBooks.push(+bookId);
    console.log("member.currentlyBorrowedBooks", member.currentlyBorrowedBooks);
    bookStore.borrowBook(bookId, memberId);
  };

  returnBook = (bookId) => {
    console.log(bookId);
    const member = this.members.find((m) =>
      m.currentlyBorrowedBooks.some((b) => b == bookId)
    );
    member.currentlyBorrowedBooks = member.currentlyBorrowedBooks.filter(
      (id) => id != bookId
    );
    bookStore.returnBook(bookId);
  };
}

const members = new MemberStore();
export default members;
