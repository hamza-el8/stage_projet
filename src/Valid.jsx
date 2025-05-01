import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CheckCircle, XCircle, Clock, AlertTriangle } from "react-feather";

const initialDeplacements = [
    { id: "1", date: "15/01/2023", employe: "Elboudali Hamza", depart: "Bouznika", destination: "Rabat", distance: "45", indemnite: "20", type: "Formation", statut: "Approuvé" },
    { id: "2", date: "16/01/2023", employe: "Elmoden Abdo", depart: "Skhirat", destination: "Témara", distance: "5", indemnite: "15", type: "Client", statut: "Approuvé" },
    { id: "3", date: "18/01/2023", employe: "Essiya Zineb", depart: "Skhirat", destination: "Bouznika", distance: "18", indemnite: "16", type: "Réunion", statut: "En attente" },
    { id: "4", date: "20/11/2023", employe: "Elmahjoubi Oussama", depart: "Casablanca", destination: "Berrechid", distance: "40", indemnite: "53", type: "Client", statut: "Rejeté" },
    { id: "5", date: "22/11/2023", employe: "Almou Yassine", depart: "Kénitra", destination: "Rabat", distance: "52", indemnite: "28", type: "Formation", statut: "Approuvé" },
];

const ValidationDeplacements = () => {
    const [deplacements, setDeplacements] = useState(initialDeplacements);

    // Fonction pour changer le statut
    const validerDeplacement = (id, nouveauStatut) => {
        setDeplacements(deplacements.map(dep =>
            dep.id === id ? { ...dep, statut: nouveauStatut } : dep
        ));
    };

    // Calculer les totaux avec useMemo pour optimiser les performances
    const stats = useMemo(() => {
        return {
            enAttente: deplacements.filter(dep => dep.statut === "En attente").length,
            approuves: deplacements.filter(dep => dep.statut === "Approuvé").length,
            rejetes: deplacements.filter(dep => dep.statut === "Rejeté").length,
            urgents: 0 // Ajoute ici une condition pour les urgents si nécessaire
        };
    }, [deplacements]);

    return (
        <div className="container mt-4"> 
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
                <div>
                    <h2 className="mb-3">Validation des déplacements</h2>
                    <p style={{fontFamily:'cursive'}}>Vérifiez et approuvez les demandes de déplacement des employés.</p>
                </div>
                <Link to='/Add'>
                    <button style={{ backgroundColor: 'grey', padding: '7px', margin: '4px', border: 'none', margin: '15px', color: 'white', fontWeight: 'bold' }}>Nouveau déplacement</button>
                </Link> 
            </div>

            {/* Section des statistiques */}
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card p-3 text-center" style={{ backgroundColor: 'rgb(202, 197, 197)', color: 'white', fontWeight: 'bold' }}>
                        <h5><Clock size={20} className="me-2" /> En attente</h5>
                        <h3>{stats.enAttente}</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-3 text-center" style={{ backgroundColor: 'rgb(202, 197, 197)', color: 'white', fontWeight: 'bold' }}>
                        <h5><CheckCircle size={20} className="me-2 text-success" /> Approuvés</h5>
                        <h3>{stats.approuves}</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-3 text-center" style={{ backgroundColor: 'rgb(202, 197, 197)', color: 'white', fontWeight: 'bold' }}>
                        <h5><XCircle size={20} className="me-2 text-danger" /> Rejetés</h5>
                        <h3>{stats.rejetes}</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-3 text-center" style={{ backgroundColor: 'rgb(202, 197, 197)', color: 'white', fontWeight: 'bold' }}>
                        <h5><AlertTriangle size={20} className="me-2 text-warning" /> Urgents</h5>
                        <h3>{stats.urgents}</h3>
                    </div>
                </div>
            </div>

            {/* Tableau des déplacements */}
            <table className="table1">
                <thead>
                    <tr>
                        <th>Ref</th>
                        <th>Employé</th>
                        <th>Date</th>
                        <th>Destination</th>
                        <th>Type</th>
                        <th>Distance</th>
                        <th>Indemnité</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {deplacements.map((dep) => (
                        <tr key={dep.id}>
                            <td>{dep.id}</td>
                            <td>{dep.employe}</td>
                            <td>{dep.date}</td>
                            <td>{dep.destination}</td>
                            <td>{dep.type}</td>
                            <td>{dep.distance}</td>
                            <td>{dep.indemnite}</td>
                            <td>
                                <span className={`badge ${dep.statut === "Approuvé" ? "bg-success" : dep.statut === "Rejeté" ? "bg-danger" : "bg-warning"}`}>
                                    {dep.statut}
                                </span>
                            </td>
                            <td>
                                <button className="btn btn-success btn-sm me-2" onClick={() => validerDeplacement(dep.id, "Approuvé")}>
                                    ✔
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => validerDeplacement(dep.id, "Rejeté")}>
                                    ✖
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link to='/header'>
                <button
                    className="btn btn-white m-2"
                    style={{
                        border: '1px solid #ccc',
                        color: '#333',
                        padding: '5px 15px',
                        fontSize: '14px',
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                >
                    Suivant
                </button>
            </Link>

        </div>
    );
};

export default ValidationDeplacements;
