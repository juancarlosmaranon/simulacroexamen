import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class MostrarEquipos extends Component {

    state = {
        equipo: {},
        status: false,
        imagen:''
    }

    mostrarEquipos = () => {
        var id = this.props.idequipo;
        var request = 'api/Equipos/' + id;
        var url = Global.urlEquipos + request;
        console.log(url);
        axios.get(url).then(response => {
            console.log(response.data)
            this.setState({
                equipo: response.data,
                status: true
            })
        })
    }

    mostrarJugadores = () =>{
        
    }

    componentDidMount = () => {
        this.mostrarEquipos();
    }

    render() {
        return (
            <div>
                <h1>Equipos</h1>
                
                
                    <h2>Id: {this.state.equipo.idEquipo}</h2><br/>
                    <p><img src={this.state.equipo.imagen} width={"50px"}/></p><br/>
                    <p>Champions: {this.state.equipo.champions}</p><br/>
                    <p>paginaWeb: {this.state.equipo.paginaWeb}</p><br/>
                    <p>Descripcion: {this.state.equipo.descripcion}</p><br/>
                    <NavLink to={'/jugadores/'+this.props.idequipo}>
                        <button className='btn btn-success'>Jugadores</button>
                    </NavLink>
                    <NavLink to="/"><button className='btn btn-info'>Volver</button></NavLink>
                

            </div>
        )
    }
}
