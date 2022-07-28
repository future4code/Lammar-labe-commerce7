import React from 'react';
import styled from "styled-components"
import {FaFilter} from 'react-icons/fa'

const ContainerFiltro = styled.div`
    display: flex;
    background-color: #141e32;
    height: 100%;
    flex-direction: column;
    text-align: center;
    flex-wrap: wrap;
    padding: 0 0.5em;

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        margin: 0.5em;
        background-color: #192337;
        padding: 1em        
    }

    label{ 
        margin-top: 8em;
    }

    input {
        text-align: center;
        font-size:1em;
        margin: 1em 0 1em 0;
        width: 10em;
        height: 1.8em;
        border-radius: 0.7em;
    }
`

function Filtros(props) {
    return (
        <ContainerFiltro>
            <h1>
                Filtro
                <FaFilter/>
            </h1>

            <label>
                <h2>
                    Valor:
                </h2>
                <input
                    type="number"
                    step='1000000'
                    placeholder="Valor Mínimo"
                    value={props.valorMin.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }, { minimumFractionDigits: 2 })}
                    onChange={(e) => { props.setValorMin(e.target.value) }}
                />

                <input
                    type="number"
                    step='1000000'
                    placeholder="Valor Máximo"
                    value={props.valorMax.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }, { minimumFractionDigits: 2 })}
                    onChange={(e) => { props.setValorMax(e.target.value) }}
                />
            </label>
        </ContainerFiltro>
    )
}


export default Filtros;