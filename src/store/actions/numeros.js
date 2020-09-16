//acao de criaçao
export function alterarNumeroMinimo(novoNumero)
{
    return {
        type: 'NUM_MIM_ALTERADO',
        payload: novoNumero
    }
}

export function alterarNumeroMax(novoNumero)
{
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: novoNumero
    }
}