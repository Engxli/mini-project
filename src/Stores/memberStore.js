import { makeAutoObservable } from "mobx";
import membersData from "../Data/members";
class MemberStore {
  members = membersData;
  constructor() {
    makeAutoObservable(this);
  }
}

const members = new MemberStore();
export default members;
