import React from 'react';
import styled from "styled-components"

const ContainerFiltro = styled.div `
    background-color: #141e32;
    height: 100em;
    padding: 1em;
   
`

function Filtros (props) {
    return (
        <ContainerFiltro>
            <h1>Filtros</h1>
           
            <label> Valor Mínimo
                <input 
                type="number"
                placeholder="Valor Mínimo" 
                value={props.valorMin.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}, { minimumFractionDigits: 2 })} 
                onChange={(e)=> {props.setValorMin (e.target.value)}} 
            />
            </label> 
            <label> Valor Máximo
            
                <input 
                 type="number"
                placeholder="Valor Máximo" 
                value={props.valorMax.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}, { minimumFractionDigits: 2 })} 
                onChange={(e)=> {props.setValorMax (e.target.value)}} 
                />
            </label>
        </ContainerFiltro>
    )
}


export default Filtros;