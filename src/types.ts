export interface Iestate {
   id: string
   code: string
   name: string
   municipality: string
   area: number
   certification: string
   clientName: string
   stands: Istand[]
}

export interface Istand {
   id: string
   area: number
   standNumber: string
   parcelNumber: string
   mainGroup: string
   subGroup: string
   mainTree: string
   devClass: string
   accessibility: string
   fertility: string
   soilType: string
   standQuality: string
   drinageState: string
}

export interface Iuser {
   id: string
   avatar: string
   name: string
   role: string
   lastSeen: string
}