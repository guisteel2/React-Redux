import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Solteio(props) {

    const NumeroAleatorio = parseInt(Math.random() * (props.max - props.min) + props.min)
  
    return(
         <Card title="Solteio dos Numeros" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{NumeroAleatorio}</strong>
                </span>
            </div>
        </Card>
    )

}

function mapStatetoProps(state){
    return {
        min:state.numeros.min,
        max:state.numeros.max
    }
}

export default connect(mapStatetoProps)(Solteio)