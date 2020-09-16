import { createStore, combineReducers } from 'redux'
import numerosReducer from './reducers/numeros'



const reducers = combineReducers({


    numeros:numerosReducer
    // nomes: function(state,action){
    //     return [
    //         'Guilherme',
    //         'Eduarda',
    //         'Alessandra',
    //     ]
    // }
})


function storeConfig(){
    return createStore(reducers)
}

export default storeConfig