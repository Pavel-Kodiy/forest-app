import Estates from "./estatesModel";
import Users from "./usersModel";

class App {

   users = new Users();
   estates = new Estates();

   initUsers = async () => {
      this.users.initUsers();
   };

   initEstates = async () => {
      this.estates.initEstates();
   };

   init = async () => {
      this.initUsers();
      this.initEstates();
   }

}

export const app = new App();