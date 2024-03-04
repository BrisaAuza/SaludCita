import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./Rutas/R-inicioSesion/R-Login";
import Registrar from "./Rutas/R-inicioSesion/R-registrar";
import Cambiarcontra from './Rutas/R-inicioSesion/R-cambiarContra';
import Doctor from './Rutas/R-formularios/R-inicioDoctores';
import Pacientes from './Rutas/R-formularios/R-inicioPaciente';
import Citas from "./Rutas/R-formularios/R-citasForm";
import Datosdoctor from './Rutas/R-Mostrar/R-datos-doctor';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       {/*  <Route path='/' element={<MostrarMapa />}/> */}
        <Route path="/" element={<Login/>}/>
        <Route path="/registro" element={<Registrar />}/> 
        <Route path="/cambiarcontrasena" element={<Cambiarcontra/>}/> 
        <Route path="/doctor" element={<Doctor/>}/> 
        <Route path="/paciente" element={<Pacientes/>}/> 
        <Route path="/citas" element={<Citas/>}/> 
        <Route path="/Perfiles-Doctores" element={<Datosdoctor/>}/> 
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;