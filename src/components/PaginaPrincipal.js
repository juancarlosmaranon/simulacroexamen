import React, { Component } from 'react'
import imagen1 from './../assets/images/imagen1.jpg'

export default class PaginaPrincipal extends Component {
    render() {
        return (
            <div>
                {/* SOLO INSERTAMOS LA IMAGEN */}
                <h1>Pagina Principal</h1>
                <img src={imagen1} width={"1000px"} />
            </div>
        )
    }
}
