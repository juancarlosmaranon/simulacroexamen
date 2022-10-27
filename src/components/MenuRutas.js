import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global';

export default class MenuRutas extends Component {

  state = {
    equipos: [],
    status: false
  }
  
  //RECOGEMOS LOS EQUIPOS CON EL axios.get
  listaEquipos = () => {
    //INVESTIGAMOS EN LA API PARA COGER LA REQUEST
    var request = 'api/Equipos';
    var url = Global.urlEquipos + request;
    axios.get(url).then(response => {
      // console.log(response.data)
      this.setState({
        equipos: response.data
      })
    })
  }

  componentDidMount = () => {
    this.listaEquipos();
  }

  render() {
    return (
      <div>
        <h1>MenuRutas</h1>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Champions</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/apuestas">Apuestas</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Equipos
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {
                      this.state.equipos.map((equipos,index)=>{
                        return(
                          <li key={index}><a class="dropdown-item" href={"/equipos/"+equipos.idEquipo}>{equipos.nombre}</a></li>
                        )
                      })
                    }
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
