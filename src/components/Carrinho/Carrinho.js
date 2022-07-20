import React from 'react';
import styled from "styled-components"

const ContainerCarrinho = styled.div`
    background-color:#141e32;
    height: 100%;
    h1 {
        margin-top: 1em;
    }

`
function Carrinho() {
    return (
        <ContainerCarrinho>
            <h1>Carrinho</h1>
        </ContainerCarrinho>
    )
}


export default Carrinho;