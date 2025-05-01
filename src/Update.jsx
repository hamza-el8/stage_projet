import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionModifier } from "./Redux/Action";

export default function Update() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { refe } = useParams()
    const employee = useSelector(state => state.find((e) => e.ref == refe))

    const [date, setDate] = useState(employee.date)
    const [employe, setEmploye] = useState(employee.employe)
    const [depart, setDepart] = useState(employee.depart)
    const [destination, setDestination] = useState(employee.destination)
    const [type, setType] = useState(employee.type)
    const [distance, setDistance] = useState(employee.distance)
    // const [indemnite, setIndemnite] = useState(employee.indemnite)
    const [statut, setStatut] = useState(employee.statut)


    function Envoyer(e) {
        e.preventDefault()
    }

    function Modifier() {
        const employees = { ref: refe, date: date, employe: employe, depart: depart, destination: destination, type: type, distance: distance, statut: statut }
        dispatch(ActionModifier(employees))
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

                <div style={{ marginBottom: "15px", textAlign: "center" }}>
                    <h4 style={{ fontWeight: "bold" }}>Modifier déplacement {refe}</h4>
                </div>

                {/* Formulaire */}
                <form className="container p-3 bg-light rounded" onSubmit={Envoyer}>
                    {/* Date */}
                    <form className="container p-3 bg-light rounded" onSubmit={Envoyer}>
                        {/* Date */}
                        <div className="mb-3">
                            <input
                                type="text"
                                value={date}
                                className="form-control"
                                placeholder="Sélectionner une date..."
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>  

                        {/* Autres champs... */}
                    </form>


                    {/* Employé */}
                    <div className="mb-3"> 
                        <input type="text" value={employe} className="form-control" placeholder="Nom de l'employé..."
                            onChange={(e) => setEmploye(e.target.value)} />
                    </div>

                    {/* Départ & Destination */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <input type="text" value={depart} className="form-control" placeholder="Lieu de départ..."
                                onChange={(e) => setDepart(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <input type="text" value={destination} className="form-control" placeholder="Destination..."
                                onChange={(e) => setDestination(e.target.value)} />
                        </div>
                    </div>

                    {/* Type de mission */}
                    <div className="mb-3">
                        <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="">Sélectionnez un type</option>
                            <option value="mission">Mission Client</option>
                            <option value="formation">Formation</option>
                            <option value="reunion">Réunion interne</option>
                            <option value="autre">Autre</option>
                        </select> 
                    </div>

                    {/* Distance & Indemnité */} 
                    <div className="row mb-3">
                        <div className="col-md-6" style={{width:'100%'}}>
                            <input type="text" value={distance} className="form-control" placeholder="Distance (km)..."
                                onChange={(e) => setDistance(e.target.value)} />
                        </div>
                        {/* <div className="col-md-6">
                            <input type="text" value={indemnite} className="form-control" placeholder="Indemnité (DH)..."
                                onChange={(e) => setIndemnite(e.target.value)} />
                        </div> */} 
                    </div>

                    {/* Statut */}
                    <div className="mb-3">
                        <input type="text" value={statut} className="form-control" placeholder="Statut..."
                            onChange={(e) => setStatut(e.target.value)} />
                    </div>

                    {/* Boutons */}
                    <div className="d-flex justify-content-between">
                        <button onClick={Annuler} style={{ backgroundColor: 'grey', color: 'white' }} className="btn btn-outline-secondary">
                            Annuler
                        </button>
                        <button onClick={Modifier} className="btn btn-primary">
                            Modifier le déplacement
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
