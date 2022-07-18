import React from 'react';
import styled from "styled-components"

const ContainerCarrinho = styled.div `
    background-color:#141e32;
    height: 100em;
    padding: 1em;

`
function Carrinho () {
    return (
        <ContainerCarrinho>
            <h1>Carrinho</h1>
        </ContainerCarrinho>
    )
}


export default Carrinho;