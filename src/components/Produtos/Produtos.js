import React, {useState} from 'react';
import styled from "styled-components"

const ContainerProdutos = styled.div`
    display:flex;
    flex-direction: column;
    height: 18em;
    width: 10em;
    border: 3px solid white;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin:1em;
    padding: 1em;
    gap: 0.2em;
    

    button {
        border-radius: 0.5em;
        border: 2px solid white;
        width: 11em;
        height: 4em;
        font-size:0.8em;
        margin-top: 0.5em;
    }

    button:hover {
        background-color: black;
        border: 2px solid black;
        color: white;
    }

    img {
        height: 10em;
        border-radius: 10px;
        border: 2px solid white;

    }
`
function Produtos(props) {

    return (
        <div>
            <ContainerProdutos key={props.prod.id}>
                <img alt="imagem do traje espacial" src={props.prod.imagem} />
                <p> {props.prod.produto} </p>
                <p>{props.prod.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }, { minimumFractionDigits: 2 })} </p>
                <button onClick={props.adicionarProduto}>Adicionar ao carrinho</button>
            </ContainerProdutos>
        </div>
    )
}

export default Produtos;