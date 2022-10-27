import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import { NavLink,Navigate } from 'react-router-dom';

export default class NuevaApuesta extends Component {

    cajaUsuarioRef = React.createRef();
    cajaResultadoRef = React.createRef();
    cajaFechaRef = React.createRef();

    state = {
        status: false
    }

    crearApuesta=(e)=>{
        e.preventDefault();
        var request = 'api/Apuestas';
        var url = Global.urlEquipos + request;
        var nombre = this.cajaUsuarioRef.current.value;
        var resultado = this.cajaResultadoRef.current.value;
        var fecha = this.cajaFechaRef.current.value;
        var napuesta={
            nombre:nombre,
            resultado:resultado,
            fecha:fecha
        }
        axios.post(url,napuesta).then(response=>{
            console.log(url);
            console.log(napuesta);
            this.setState({
                napuesta:response.data,
                status:true
            })
        })
    }

    render() {
        if(this.state.status == true){
            return(
                // <Navigate to="/apuestas"/>
                <h1>Apuesta realizada</h1>
            );
        }
        return (
            <div>
                <h1>Crear Apuestas</h1>
                <form onSubmit={this.crearApuesta}>
                    <label>Usuario:</label>
                    <input ref={this.cajaUsuarioRef} type="text" /><br/><br/>
                    <label>Resultado:</label>
                    <input ref={this.cajaResultadoRef} type="text" /><br/><br/>
                    <label>Fecha:</label>
                    <input ref={this.cajaFechaRef} type="text" /><br/><br/>
                    <button>
                        Nueva apuesta
                    </button>
                </form>
                <NavLink to="/apuestas"><button className='btn btn-info'>Volver</button></NavLink>
            </div>
        )
    }
}
