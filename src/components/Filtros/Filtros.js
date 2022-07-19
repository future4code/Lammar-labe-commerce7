import React from 'react';
import styled from "styled-components"

const ContainerFiltro = styled.div `
    background-color: #141e32;
    height: 100em;
    padding: 1em;
   
`
function Filtros () {
    return (
        <ContainerFiltro>
            <h1>Filtros</h1>
            <select>
                <option value={"titulo"}>Nenhum</option>
                <option value={"titulo"}>Titúlo</option>
                <option value={"preco"}>Valor mínimo</option>
                <option value={"preco"}>Valor máximo</option>
            </select>
        </ContainerFiltro>
    )
}


export default Filtros;