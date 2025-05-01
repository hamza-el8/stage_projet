import { legacy_createStore } from "redux"


const initialState = [
    { ref: "1", date: "15/01/2023", employe: "Elboudali Hamza", depart: "Bouznika", destination: "Rabat", distance: "45", indemnite: "20 ", type: "Formation", statut: "Validé" },
    { ref: "2", date: "16/01/2023", employe: "Elmoden Abdo", depart: "Skhirat", destination: "Témara", distance: "5", indemnite: "15 ", type: "Client", statut: "Validé" },
    { ref: "3", date: "18/01/2023", employe: "Essiya Zineb", depart: "Skhirat", destination: "Bouznika", distance: "18", indemnite: "16 ", type: "Réunion", statut: "En attente" },
    { ref: "4", date: "20/11/2023", employe: "Elmahjoubi Oussama", depart: "Casablanca", destination: "Berrechid", distance: "40 ", indemnite: "53 ", type: "Client", statut: "Rejeté" },
    { ref: "5", date: "22/11/2023", employe: "Almou Yassine", depart: "Kénitra", destination: "Rabat", distance: "52  ", indemnite: "28 ", type: "Formation", statut: "Validé" },
]

function Reducer(state = initialState, action) {
    switch (action.type) {
        case "Add": return [...state, action.payload]
        case "Delete": return state.filter((e) => e.ref != action.payload) 
        case "Update": {
            const empl = state.find((e) => e.ref == action.payload.ref) 
            if (empl) {     
                empl.date = action.payload.date 
                empl.employe = action.payload.employe
                empl.depart = action.payload.depart  
                empl.destination = action.payload.destination  
                empl.type = action.payload.type  
                empl.distance = action.payload.distance  
                // empl.indemnite = action.payload.indemnite   
                empl.statut = action.payload.statut   
            }  
            return [...state]
        }
        default:
            return state
    }
}

const DeplacementStore = legacy_createStore(Reducer)
export default DeplacementStore 