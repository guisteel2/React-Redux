import React from 'react'
import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMax } from '../store/actions/numeros'

import './Intervalo.css'
import Card from './Card'


function Intervalos(props) {
    const { min , max } = props

    // props.alterarMinimo(1000)

    return(
        <Card title="Intervalo de Numeros" red>
           <div className="Intervalo">
               <span>
                   <strong>Minimo:</strong>
                   <input type="number" value={min} 
                   onChange={e=> props.alterarMinimo(+e.target.value)}></input>
               </span>

               <span>
                   <strong>Maximo:</strong>
                   <input type="number" value={max}
                    onChange={e=> props.alterarNumeroMax(+e.target.value)}></input>
               </span>
           </div>
       </Card>
   )

}

function mapDispatchToprop(dispatch){
    return {
        //action creator-> action
        alterarMinimo(novoNumero){
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
         //action creator-> action
         alterarNumeroMax(novoNumero){
            const action = alterarNumeroMax(novoNumero)
            dispatch(action)
        }
    }
}

function mapStatetoProps(state){
    return {
        min:state.numeros.min,
        max:state.numeros.max
    }
}

export default connect(mapStatetoProps,mapDispatchToprop)(Intervalos)