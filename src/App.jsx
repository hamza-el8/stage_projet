import { Routes, Route } from 'react-router-dom';
import Login from './Logine';
import Page from './Page'; 
import Nouveaux from './Neauveaux';
import Update from './Update'; 
import Bord from './Bord'; 
import CalculIndemnite from './Calcul'
import Headere from './Headere'; 
import ValidationDeplacements from './Valid';

function App() {
  return (
    <> 
      <Routes>  
        <Route path="/" element={<Login />} />  
        <Route path="/had" element={<Headere />} />   
        <Route path="/header" element={<Page />} />     
        <Route path="/Add" element={<Nouveaux />} />     
        <Route path="/Modifier/:refe" element={<Update />} />         
        <Route path="/bord" element={<Bord />} />   

                  {/*  */}  
        <Route path='/ham' element={<Page/>} />   
        <Route path='/moh/:hhh'  element={<CalculIndemnite />} />  
        <Route path='/valid' element={<ValidationDeplacements />} /> 
      </Routes>  
    </>
  );
} 

export default App;   