import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class DetallesJugadores extends Component {

    state={
        detalles:{},
        status:false
    }

    mostrarDetalles=()=>{
        var id = this.props.idJugador;
        var request = 'api/Jugadores/'+id;
        var url = Global.urlEquipos + request;
        axios.get(url).then(response=>{
            this.setState({
                detalles:response.data,
                status:true
            })
        })
    }

    componentDidMount=()=>{
        this.mostrarDetalles();
    }

  render() {
    return (
        <div>
            <h1>Detalles</h1>
            <p>{this.state.detalles.nombre}</p>
            <p>{this.state.detalles.posicion}</p>
            <img src={this.state.detalles.imagen}/>
        </div>
    )
  }
}
