import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ActionAjouter } from "./Redux/Action";
import { useSelector } from "react-redux"; 

export default function Nouveaux() {    
    const [ref, setRef] = useState(6)   
    const [date, setDate] = useState('')
    const [employe, setEmploye] = useState('')
    const [depart, setDepart] = useState('')
    const [destination, setDestination] = useState('')
    const [type, setType] = useState('')
    const [distance, setDistance] = useState('')
    // const [indemnite, setIndemnite] = useState('')  
    const [statut, setStatut] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate() 

    const num = useSelector(state => state.length)


    function Envoyer(e){
        e.preventDefault()
    } 


    function Ajouter() {
        const employees = { ref: num + 1, date: date, employe:employe, depart:depart, destination: destination, type: type, distance: distance,statut: statut } 
        dispatch(ActionAjouter(employees)) 
        navigate('/header')  
    }  

    function Annuler() {
        navigate('/header')
    } 

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                backgroundColor: "#f8f9fa", 
            }}
        >
            <div style={{ border: "1px solid #ddd", width: "50%", padding: "20px", background: "white", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                {/* Titre */}
                <div style={{ marginBottom: "15px", textAlign: "center" }}>
                    <h4 style={{ fontWeight: "bold" }}>Nouveau déplacement</h4>
                    <p style={{ fontSize: "13px", color: "#666" }}>
                        Enregistrez un nouveau déplacement professionnel pour obtenir vos indemnités kilométriques.
                    </p>
                </div>

                {/* Formulaire */}
                <form className="container p-3 bg-light rounded" onSubmit={Envoyer}>
                    {/* Date */}
                    <div className="mb-3">
                        <input type="date" style={{textAlign:'center'}} className="form-control" onChange={(e) => setDate(e.target.value)} />
                    </div>
 
                    {/* Employé */}
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Nom de l'employé..." onChange={(e) => setEmploye(e.target.value)} />
                    </div>

                    {/* Départ & Destination */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Lieu de départ..." onChange={(e) => setDepart(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Destination..." onChange={(e) => setDestination(e.target.value)} />
                        </div>
                    </div>

                    {/* Type de mission */}
                    <div className="mb-3">
                        <select className="form-select" onChange={(e) => setType(e.target.value)}>
                            <option value="">Sélectionnez un type</option>
                            <option value="mission">Mission Client</option>
                            <option value="formation">Formation</option>
                            <option value="reunion">Réunion interne</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>

                    {/* Distance & Indemnité */}
                    <div className=" mb-3" >
                        <div className="col-md-6" style={{width:'100%'}}>
                            <input type="number" className="form-control" placeholder="Distance (km)..." onChange={(e) => setDistance(e.target.value)} />
                        </div>
                         {/* <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Indemnité (DH)..." onChange={(e) => setIndemnite(e.target.value)} />
                        </div>  */}
                    </div>

                    {/* Statut */}
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Statut..." onChange={(e) => setStatut(e.target.value)} />
                    </div>

                    {/* Boutons */}
                    <div className="d-flex justify-content-between">
                        <button style={{ backgroundColor: 'grey', color: 'white' }} className="btn btn-outline-secondary" onClick={Annuler}>
                            Annuler  
                        </button>
                        <button onClick={Ajouter} className="btn btn-primary">
                            Enregistrer le déplacement 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
