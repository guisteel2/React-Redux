import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Soma(props) {

  
    return(
         <Card title="Soma dos Numeros" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{props.max+props.min}</strong>
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

export default connect(mapStatetoProps)(Soma)