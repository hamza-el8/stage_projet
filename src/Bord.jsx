import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"; 
import { FaSquare } from 'react-icons/fa';
 

// Composants Card et Button sans box-shadow
const Card = ({ children }) => (
    <div className="p-6 bg-white rounded-2xl border border-gray-200" >{children}</div> // Supprimé box-shadow
);

const CardContent = ({ children }) => <div>{children}</div>;

const chartData = [
    { month: "Berrechid", value: 5, cout: 30 },
    { month: "Casa", value: 20, cout: 40 },
    { month: "Bouznika", value: 15, cout: 20 },
    { month: "Skhirat", value: 8, cout: 15 },
    { month: "Témara", value: 11, cout: 20 },
    { month: "Rabat", value: 29, cout: 50 },
    { month: "Kénitra", value: 10, cout: 30 },
];

export default function Bord() {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
                <h3 style={{ fontWeight: 'bold', margin: '20px' }}>Tableau de bord</h3>
                <Link to='/Add'>
                    <button style={{ backgroundColor: 'grey', padding: '7px', margin: '4px', border: 'none', margin: '15px', color: 'white', fontWeight: 'bold' }}>Nouveau déplacement</button>
                </Link>
            </div>

            <div className="p-8 bg-gray-100 min-h-screen">
                {/* Cartes alignées sur la même ligne en desktop, en colonne sur mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ paddingLeft: '250px', paddingRight: '250px' }}>
                    {/* Graphique */}
                    <Card>
                        <CardContent>
                            <h5 className="text-lg font-bold text-gray-800 mb-3" style={{ margin: '10px',fontFamily:'cursive' }} >Aperçu des déplacements</h5>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={chartData}>
                                    <XAxis dataKey="month" stroke="#555" />
                                    <YAxis stroke="#555" />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="grey" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="cout" fill="green" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>

                        {/* Les noms des bords */}
                        <div style={{ display: 'flex', justifySelf: 'center', marginTop: '10px', gap: '40px' }}>
                            <p style={{ fontWeight: 'bold', color: 'grey', textAlign: 'center', width: '100%' }}><FaSquare />Déplacement</p>
                            <p style={{ fontWeight: 'bold', color: 'green', textAlign: 'center', width: '100%' }}><FaSquare /><br />Coûts</p>
                        </div>
                    </Card>
                    <Link to='/header'>
                        <button
                            className="btn btn-white m-2" 
                            style={{
                                border: '1px solid #ccc',
                                color: '#333',
                                padding: '5px 15px',
                                fontSize: '14px',
                                // marginLeft:'690px' 
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                            onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
                        >
                            Suivant 
                        </button>
                    </Link>
                </div>
            </div>

        </>
    );
}
