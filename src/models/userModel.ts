import { Iuser } from "types";

class User {
   private user: Iuser
   id: string
   avatar: string
   name: string
   role: string
   lastSeen: string
   constructor(person: Iuser) {
      this.user = person;
      this.id = person.id;
      this.name = person.name;
      this.avatar = person.avatar;
      this.role = person.role;
      this.lastSeen = person.lastSeen;
   }

   get firstName() { return this.user.name; }

}

export default User;