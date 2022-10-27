import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class Apuestas extends Component {

    state = {
        apuestas: [],
        status: false
    }

    mostrarApuestas = () => {
        var request = 'api/Apuestas';
        var url = Global.urlEquipos + request;
        axios.get(url).then(response => {
            this.setState({
                apuestas: response.data
            })
        })
    }

    componentDidMount = () => {
        this.mostrarApuestas();
    }

    render() {
        return (
            <div>
                <h1>Apuestas</h1>
                <NavLink to="/nuevaapuesta">
                    <button className='btn btn-info'>Crear Apuestas</button>
                </NavLink>
                <table className='table'>
                    <thead>
                        <th>Usuario</th>
                        <th>Resultado</th>
                        <th>Fechas</th>                  
                    </thead>
                    {
                        this.state.apuestas.map((apuestas, index) => {
                            return (
                                <tbody>
                                    <td>{apuestas.usuario}</td>
                                    <td>{apuestas.resultado}</td>
                                    <td>{apuestas.fecha}</td>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}
