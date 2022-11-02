import { action, makeObservable, observable } from "mobx"
import { Iuser } from "types";
import { api } from "./apiModel";
import User from "./userModel";

class Users {

   constructor() {
      makeObservable(this, {
         users: observable,
         initUsers: action
      })
   }

   users: Iuser[] = []

   initUsers = async () => {
      const response = await api.initRequest('GET', 'users');

      this.users = [...this.users, ...response]

//Have problem with correct defining this type.
      const tmpArray: Iuser[] | any = [];
//If i try delete type any I get issue on string 27. Issue describe bellow.
/* Argument of type 'string' is not assignable to parameter of type 'Iuser'. */
      const arrayCheck = (user: Iuser) => {
         if (!tmpArray.includes(user.id)) {
            return tmpArray.push(user);

         }
         return false;
      }

      const filtredUsers = this.users.filter((user: Iuser) => arrayCheck(user))

      this.users = filtredUsers.map((user: Iuser) => new User(user))
   }
}

export default Users;