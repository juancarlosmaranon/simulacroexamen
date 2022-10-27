import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class MostrarJugadores extends Component {

    state = {
        jugadores: [],
        status: false
    }

    mostrarJugadores = () => {
        var id = this.props.idequipo;
        console.log(id);
        var request = 'api/Jugadores/JugadoresEquipo/' + id;
        var url = Global.urlEquipos + request;
        axios.get(url).then(response => {
            this.setState({
                jugadores: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.mostrarJugadores();
    }

    render() {
        return (
            <div>
                <h1>Jugadores</h1>
                <table className='table'>
                    <thead>
                        <th>Nombre</th>
                        <th>Posicion</th>
                        <th>Imagen</th>
                        <th>Detalles</th>
                    </thead>
                    <tbody >
                        {
                            this.state.jugadores.map((jugadores, index) => {
                                return (
                                    <tr>
                                        <td>{jugadores.nombre}</td>
                                        <td>{jugadores.posicion}</td>
                                        <td><img src={jugadores.imagen} width={"100px"} /></td>
                                        <td><NavLink className="btn btn-success" to={"/details/" + jugadores.idJugador}>Detalles</NavLink></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
