import React, { useState, useEffect } from "react";
import { Trash2, Pencil, User, Power } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { ActionSupprimer } from "./Redux/Action";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Timer } from "lucide-react";
import { FaCalculator } from "react-icons/fa";



export default function Page() {
    const deplacements = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const [userInfo, setUserInfo] = useState(null);
    const [menuVisible, setMenuVisible] = useState(false);

    
    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUserInfo(user);
        }

        
        const interval = setInterval(() => {
            setCurrentDateTime(new Date().toLocaleString());
        }, 60000); 

        
        return () => clearInterval(interval);
    }, []);

    
    useEffect(() => {
        setChercher(deplacements);
    }, [deplacements]);

    
    const handleUserClick = () => {
        setMenuVisible(!menuVisible);
    };

    
    const handleLogout = () => {
        localStorage.removeItem("user");
        setUserInfo(null);
        setMenuVisible(false);
        navigate("/"); 
    };

    const [val, setVal] = useState('');
    const [chercher, setChercher] = useState(deplacements);

    function Rechercher() {
        setChercher(chercher.filter((e) => e.employe === val));
        setVal('');
    }

    function Actualiser() {
        setChercher(deplacements);
    }

    return (
        <>
            {/* Header */}
            <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', alignItems: 'center' }}>
                <img src={require('./image.png')} alt="Logo" style={{ height: '40px' }} />

                {/* Icône utilisateur */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        backgroundColor: '#f0f0f0',
                        overflow: 'hidden',
                        border: '2px solid #ccc',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        cursor: 'pointer'
                    }}
                    onClick={handleUserClick} // Gérer le clic sur l'icône
                >
                    <User size={24} color="black" />
                </div>

                {/* Menu déroulant utilisateur */}
                {menuVisible && userInfo && (
                    <div style={{
                        position: 'absolute',
                        top: '30px',  // Remonter la position du menu
                        right: '40px', // Déplacer le menu vers la droite
                        padding: '20px', // Réduire le padding pour compacter
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                        borderRadius: '8px',
                        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
                        transform: 'scale(1.1)',  // Effet de zoom
                        opacity: 1, // Pas transparent
                        minWidth: '300px', // Largeur du menu
                        zIndex: 1000, // Assurez-vous que le menu est au-dessus des autres éléments
                    }}>
                        {/* Afficher le nom du frère ici */}
                        <p style={{ fontWeight: 'bold', fontSize: '14px', fontFamily: 'cursive' }}><strong>Employé </strong> {userInfo.brotherName}</p>
                        <p style={{ fontWeight: 'bold', fontSize: '14px', fontFamily: 'cursive' }}><strong><Mail /></strong> {userInfo.username}</p>
                        <p style={{ fontWeight: 'bold', fontSize: '14px', fontFamily: 'cursive' }}><strong><Timer /></strong> {currentDateTime}</p> {/* Afficher la date et l'heure */}
                        <button
                            onClick={handleLogout}
                            style={{
                                backgroundColor: 'grey', 
                                color: 'white',
                                padding: '4px',
                                border: 'none',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                width: '30%',
                                transition: 'background-color 0.3s ease',
                                fontSize: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = 'grey'}
                            onMouseOut={(e) => e.target.style.backgroundColor = 'grey'}
                        >
                            Déconnexion
                        </button>
                    </div>
                )}
            </header>

            {/* Rest de la page */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
                <h4 style={{ fontWeight: 'bold', margin: '20px' }}>Déplacements</h4>
                <Link to='/Add'>
                    <button style={{ backgroundColor: 'grey', padding: '7px', margin: '4px', border: 'none', margin: '15px', color: 'white', fontWeight: 'bold' }}>Nouveau déplacement</button>
                </Link>
            </div>

            <div style={{ margin: '15px' }}>
                <input placeholder="Filtrer par employé..." style={{ padding: '3px', marginLeft: '13px', width: '15%', borderRadius: '8px' }} onChange={(e) => setVal(e.target.value)} />
                <button style={{ backgroundColor: 'green', padding: '5px', margin: '3px', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold' }} onClick={Rechercher}>Rechercher</button>
                <button style={{ backgroundColor: 'blue', padding: '5px', margin: '3px', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold' }} onClick={Actualiser}>Actualiser</button>
            </div>

            {/* Table des déplacements */}
            <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <table className="table1">
                    <thead>
                        <th>Référence</th>
                        <th>Date</th>
                        <th>Employé</th>
                        <th>Départ</th>
                        <th>Destination</th>
                        <th>Distance (km)</th>
                        {/* <th>Indemnité (DH)</th> */}
                        <th>Type</th>
                        <th>Statut</th>
                        <th>Action</th>
                    </thead>

                    <tbody>
                        {
                            chercher.length === 0 ?
                                <tr> <td colSpan={10}><p className="td1 fw-bold text-danger text-center m-2 fs-4">Aucun employé correspondant trouvé </p></td>
                                </tr> : chercher.map((e) => {
                                    return <tr >
                                        <td>{e.ref}</td>
                                        <td>{e.date}</td>
                                        <td>{e.employe}</td>
                                        <td>{e.depart}</td>
                                        <td>{e.destination}</td>
                                        <td>{e.distance} Km</td>
                                        {/* <td>{e.indemnite} Dh</td> */}
                                        <td>{e.type}</td>
                                        <td>{e.statut}</td> 
                                        <td colSpan={2} >
                                            <Link to={`/Modifier/${e.ref}`}><Pencil color="blue" size={20} style={{ margin: '4px' }} /></Link>
                                            <Trash2 onClick={() => dispatch(ActionSupprimer(e.ref))} className="text-danger" />
                                            {/* calculatore */}
                                            <Link to={`/moh/${e.ref}`} ><FaCalculator size={20} style={{ color: 'grey' }} /></Link>
                                        </td>
                                    </tr>
                                })
                        }
                    </tbody>
                </table>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', justifyContent: 'end', gap: '10px', margin: '18px' }}>
                <Link to="/bord">
                    <button
                        className="btn btn-white"
                        style={{
                            border: '1px solid #ccc',
                            color: '#333',
                            padding: '5px 15px',
                            fontSize: '14px'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                    >
                        Précédent
                    </button>
                </Link>
                {/* <Link to='/moh'>
                <button
                   
                    className="btn btn-white"
                    style={{
                        border: '1px solid #ccc',
                        color: '#333',
                        padding: '5px 15px',
                        fontSize: '14px'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                >
                    Suivant
                </button>
                </Link> */}
            </div>
        </>
    );
}
