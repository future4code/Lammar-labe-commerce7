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

    h2 {
        position: absolute;
        top: 85%;
        align-items: center;
        margin:0.5em;
        font-size: 1.5em;
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
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1em;
    font-size: 1.2em;
    
`
const Lixeira = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
    margin-right: 0.5em;
    font-size: 1em;
`
const ButtonCompra = styled.button `
   position: absolute;
   top: 94.5%;
   left: 0;
   right: 0;
   padding: 1em;
   font-size: 1.2em;
   border: none;
`



function Carrinho(props) {

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
                {qntProduto}
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
              {listaDeProd}
              <h2>
                  Valor total: R${somaItens}
              </h2>
              <ButtonCompra>
                  Finalizar compra
              </ButtonCompra>
          </ContainerCarrinho>
      )
    }
    


export default Carrinho;