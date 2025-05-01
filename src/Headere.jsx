import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Désactiver le scroll de la page */}
            <style>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                        overflow: hidden;
                    }
                `}
            </style>

            {/* Header avec un fond pro */}
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '15px 20px',
                alignItems: 'center',
                background: 'grey',
                color: 'white',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
                <img src={require('./image.png')} alt="Logo" style={{ height: '50px' }} />
                <Menu size={32} onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: 'pointer', color: 'white' }} />
            </header>

            {/* Menu déroulant animé */}
            {menuOpen && (
                <nav style={{
                    background: "#f8f8f8",
                    padding: "10px",
                    position: "absolute",
                    right: "20px",
                    top: "70px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    minWidth: "180px",
                    transition: "all 0.3s ease-in-out"
                }}>
                    <ul style={{
                        listStyle: "none",
                        padding: "10px",
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start"
                    }}>
                        <li style={{ padding: "10px 0", fontSize: "16px" }}>
                            <Link to="/bord" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }} onClick={() => setMenuOpen(false)}>
                                📊 Tableau de bord
                            </Link>
                        </li>
                        <li style={{ padding: "10px 0", fontSize: "16px" }}>
                            <Link to="/header" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }} onClick={() => setMenuOpen(false)}>
                                📅 Liste des déplacements
                            </Link>
                        </li>
                        <li style={{ padding: "10px 0", fontSize: "16px" }}>
                            <Link to="/valid" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }} onClick={() => setMenuOpen(false)}>
                                ✔ Validation des déplacements
                            </Link> 
                        </li>
                    </ul>
                </nav>
            )}

            {/* Section d'accueil */}
            <section style={{
                display: "flex",
                flexDirection: "column", 
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                background: "linear-gradient(to right, #1E293B, grey)",
                color: "white",
                textAlign: "center",
                padding: "20px",
                overflow: "hidden"
            }}>
                <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Bienvenue sur notre plateforme</h1>
                <p style={{ fontSize: "18px", marginTop: "10px", maxWidth: "600px" }}>
                    Gérez vos déplacements et accédez rapidement à vos tableaux de bord en toute simplicité.
                </p>
            </section>
        </>
    );
}
