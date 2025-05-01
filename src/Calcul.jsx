import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function CalculIndemnite() {
    const { hhh } = useParams();
    const cal = useSelector(state => state.find((e) => e.ref == hhh))
    const [date, setDate] = useState(cal.date);
    const [employe, setEmploye] = useState(cal.employe);
    const [depart, setDepart] = useState(cal.depart);
    const [destination, setDestination] = useState(cal.destination);
    const [type, setType] = useState(cal.type);
    const [distance, setDistance] = useState(cal.distance);
    const [statut, setStatut] = useState(cal.statut);
    const [indemnite, setIndemnite] = useState(null);
    const rate = 5;

    const calculerIndemnite = () => { 
        if (distance) {
            setIndemnite(parseFloat(distance) * rate); 
        }
    };

    const navigate = useNavigate();

    function Annuler() {
        navigate('/header');
    }

    return (
        <>
            <div className="container mt-4 d-flex justify-content-center">
                <div className="card shadow-sm p-3" style={{ maxWidth: "600px", width: "100%" }}>
                    <h3 className="text-center mb-3">Calculer</h3>
                    <form>
                        <div className="mb-3">
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="form-control form-control-sm"
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                value={employe}
                                onChange={(e) => setEmploye(e.target.value)}
                                className="form-control form-control-sm"
                                placeholder="Nom de l'employé"
                            />
                        </div>

                        <div className="row g-2">
                            <div className="col-md-6 mb-3">
                                <input
                                    type="text"
                                    value={depart}
                                    onChange={(e) => setDepart(e.target.value)}
                                    className="form-control form-control-sm"
                                    placeholder="Lieu de départ"
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <input
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    className="form-control form-control-sm"
                                    placeholder="Destination"
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="form-select form-select-sm"
                            >
                                <option value="">Sélectionnez un type</option>
                                <option value="mission">Mission Client</option>
                                <option value="formation">Formation</option>
                                <option value="reunion">Réunion interne</option>
                                <option value="autre">Autre</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                value={distance}
                                onChange={(e) => setDistance(e.target.value)}
                                className="form-control form-control-sm"
                                placeholder="Distance (km)"
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                value={statut}
                                onChange={(e) => setStatut(e.target.value)}
                                className="form-control form-control-sm"
                                rows="3"
                                placeholder="Statut"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={calculerIndemnite}
                            className="btn btn-secondary w-100 btn-sm"
                        >
                            Calculer
                        </button>
                    </form>

                    {indemnite !== null && (
                        <div className="mt-2 p-2 bg-light border rounded text-center" style={{ maxWidth: "450px", width: "100%", margin: 'auto' }}>
                            <h4 className="mb-2">Indemnité totale</h4>
                            <div className="fs-5 fw-bold">{indemnite.toFixed(2)} DH</div>
                        </div>
                    )}

                    {/* Buttons section below the form */}
                    <div className="mt-3 d-flex justify-content-between">
                        <button
                            onClick={Annuler}
                            className="btn btn-outline-secondary btn-sm"
                        >
                            Annuler
                        </button>
                        <Link to='/ham'>
                            <button className="btn btn-secondary btn-sm">
                                Soumettre
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}


