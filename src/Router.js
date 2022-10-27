import React, { Component } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import MenuRutas from './components/MenuRutas'
import MostrarEquipos from './components/MostrarEquipos'
import MostrarJugadores from './components/MostrarJugadores'
import PaginaPrincipal from './components/PaginaPrincipal'
import Apuestas from './components/Apuestas'
import NuevaApuesta from './components/NuevaApuesta'
import DetallesJugadores from './components/DetallesJugadores'

export default class Router extends Component {

    render() {

        function MostrarEquiposElement(){
            var {idequipo} = useParams();
            return(
                <MostrarEquipos idequipo={idequipo}/>
            )
        }

        function MostrarJugadoresElement(){
            var {idequipo} = useParams();
            return(
                <MostrarJugadores idequipo={idequipo}/>
            )
        }
        
        function DetallesJugadoresElement(){
            var {idjugador} = useParams();
            return(
                <DetallesJugadores idJugador={idjugador}/>
            )
        }

        return (
            <BrowserRouter>
                <MenuRutas/>
                <Routes>
                    <Route path='/' element={<PaginaPrincipal/>} />
                    <Route path='/Equipos/:idequipo' element={<MostrarEquiposElement/>}/>
                    <Route path='/jugadores/:idequipo' element={<MostrarJugadoresElement/>}/>
                    <Route path='/details/:idjugador' element={<DetallesJugadoresElement/>}/>
                    <Route path='/apuestas' element={<Apuestas/>}/>
                    <Route path='/nuevaapuesta' element={<NuevaApuesta/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
