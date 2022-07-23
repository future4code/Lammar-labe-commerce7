import React from 'react';
import styled from "styled-components"
import { FaTrash } from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'

const ContainerCarrinho = styled.div`
    background-color:#141e32;
    height: 100%;
    display : flex;
    flex-direction: column;
    position: relative;
    align-content: center;

    h2 {
        margin-top: 1em;
    }
`
const TituloCarrinho = styled.h1 `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    margin: 0.5em;
    background-color: #192337;
    padding: 1em;
`

const CardProduto = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    p {
        padding-left: 0.5em;
    }

    span {
        padding-left: 0.5em;
    }
`
const Lixeira = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1em;
    padding-left: 0.5em;
`
const ButtonCompra = styled.button `
    border-radius: 0.5em;
    border: 2px solid white;
    height: 3em;
    font-size:1em;
    margin-top: 2em;    
    width:100%;
    
    :hover {
        background-color: black;
        border: 2px solid black;
        color: white;
    }
`
const ListaDeCompras = styled.div `
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
    line-height: 3em;
    margin-left: 0.1em;
    margin-right: 0.1em,;
`

function Carrinho(props) {

    const finalizarCompra = () => {
        alert ("Sua compra foi finalizada!")
    }

    const listaDeProd = props.carrinhoDeCompras.map((e) => {

        let qntProduto = e.quantidade * e.valor
    
        return (
            <CardProduto>
                <p>
                    {e.quantidade} x 
                </p>  
                <p>
                    {e.produto}
                </p>
                <span>
                    {qntProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }, )}
                </span>
                
                <Lixeira onClick={() => props.removerProdutoDoCarrinho(e.id)}>
                    <FaTrash/>
                </Lixeira>
            </CardProduto>
        )
        })
    
        let somaItens = 0
        for (let item of props.carrinhoDeCompras) {
            somaItens += item.quantidade * item.valor
        }
        
        return (
            <ContainerCarrinho>
                <TituloCarrinho>
                    Carrinho
                    <FaShoppingCart/>
                </TituloCarrinho>
                <ListaDeCompras>
                    {listaDeProd}
                    <h2>
                        Total: {somaItens.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }, { minimumFractionDigits: 2 })}
                    </h2>
                    <ButtonCompra onClick={finalizarCompra}>
                        Finalizar compra
                    </ButtonCompra>
                </ListaDeCompras>
            </ContainerCarrinho>
        )
        }
        


export default Carrinho;