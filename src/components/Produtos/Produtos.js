import React from 'react';
import styled from "styled-components"
import {FaShoppingCart} from 'react-icons/fa'

const ContainerProdutos = styled.div`
    display:flex;
    flex-direction: column;
    height: 18.3em;
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
        background-color: transparent;
        border: none;
        color: #fff;
        font-size: 1.5em;
        padding-top: 0.5em;
    }

    button:hover {
        color: black;
    }

    img {
        height: 12em;
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
                <button onClick={() => props.addProdutoCarrinho(props.prod.id)}><FaShoppingCart/></button>
            </ContainerProdutos>
        </div>
    )
}

export default Produtos;