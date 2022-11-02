import axios from "axios";
import { action } from "mobx";

class Api {

   constructor() {this, {
         initUsersData: action,
         initEstateData: action
      }
   }

   initRequest = async (method: string, endpoint: string) => {
      try {
         const response = await axios({
            method: method,
            url:`https://apimocha.com/forestapp/${endpoint}`,
         });

         return response.data

      } catch (err) {
         console.log(err)
      }
   }
}


export const api = new Api();