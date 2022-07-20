import React from 'react';
import styled from "styled-components"

const ContainerProdutos = styled.div `
    display:flex;
    flex-direction: column;
    height: 23em;
    width: 15em;
    border: 3px solid white;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 1em;
    padding-bottom: 1em;
    padding-top: 1em;
    

    button {
        border-radius: 5px;
        border: 2px solid white;
        width: 10vw;
        height: 4vh;
    }

    button:hover {
        background-color: black;
        border: 2px solid black;
        color: white;
    }

    img {
        height: 15em;
        border-radius: 10px;
        border: 2px solid white;

    }
`
function Produtos (props) {
  
    return (
        <div>
            <ContainerProdutos>
                <img alt="imagem do traje espacial" src={props.prod.imagem}/>
                <p> {props.prod.produto} </p>
                <p>{props.prod.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}, { minimumFractionDigits: 2 })} </p>
                <button>Adicionar ao carrinho</button>
            </ContainerProdutos>
        </div>
    )
}

export default Produtos;