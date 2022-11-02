import { Iestate, Istand } from "types";

class Estate {
   id: string
   code: string
   name: string
   municipality: string
   area: number
   certification: string
   clientName: string
   stands: Istand[]
   constructor (data: Iestate) {
      this.id = data.id;
      this.code = data.code;
      this.name = data.name;
      this.municipality = data.municipality;
      this.area = data.area;
      this.certification = data.certification;
      this.clientName = data.clientName;
      this.stands = data.stands;
   }
}

export default Estate;