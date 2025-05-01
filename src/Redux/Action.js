

export const ActionAjouter = (employe) => (
    {type: "Add" ,payload:employe}  
)    

export const ActionSupprimer = (ref) => (
    {type: "Delete" ,payload:ref} 
)    

export const ActionModifier = (employe) => (
    {type: "Update" ,payload:employe}  
)  
  
