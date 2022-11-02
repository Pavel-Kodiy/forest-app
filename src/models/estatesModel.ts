import { action, makeObservable, observable } from "mobx"
import { Iestate } from "types";
import { api } from "./apiModel";
import Estate from "./estateModel";

class Estates {

   constructor() {
      makeObservable(this, {
         estates: observable,
         initEstates: action
      })
   }

   estates: Iestate[] = []

   initEstates = async () => {
      const estatesApi = await api.initRequest('GET', 'estates');

      this.estates = [...this.estates, ...estatesApi]
//Have problem with correct defining this type.
//If i try delete type any I get issue on string 27. Issue describe bellow.
/* Argument of type 'string' is not assignable to parameter of type 'Iestate'. */
      const tmpArray: Iestate[] | any = [];

      const arrayCheck = (estate: Iestate) => {
         if (!tmpArray.includes(estate.id)) {
            return tmpArray.push(estate);
         }
         return false;
      }

      const filtredEstates = this.estates.filter((estate) => arrayCheck(estate))

      this.estates = filtredEstates.map((estate) => new Estate(estate))
   }
}

export default Estates;