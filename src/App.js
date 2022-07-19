import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa'
import styled from "styled-components"
import GlobalStyle from './Global'
import Filtros from './components/Filtros/Filtros'
import Carrinho from './components/Carrinho/Carrinho'
import Produtos from './components/Produtos/Produtos'

import dadosProdutos from './dados/mockDeDados'

const Header = styled.header`
  padding: 2em 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #000000;
  
  
  h1 {
    font-size: 3em;
  }
  div {
    
    button {
      font-size: 1.5em;
      background: transparent;
      border: none;
      color: #fff;
      padding: 0.5em 0  0 0.5em;
    }
    input {
      padding:1em;
      border: none;
      border-radius: 1em;
      width: 35em;
    }
  }
  `
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  font-size: 1em;
 
`

function App() {

  const [produtos] = useState(dadosProdutos);
  const [parametro, setParametro] = useState("titulo");

  return (
    <>
      <Header>
        <h1>Space Store</h1>
        <div>
          <input type="seach" placeholder="Busca"></input>
          <button>
            <FaSearch />
          </button>
        </div>
      </Header>

      <Container>
        <Filtros
          parametro={parametro}
          setParametro={setParametro}
        />
        <Produtos/>
        <Carrinho/>
      </Container>
      <GlobalStyle/>
    </>
  );
}

export default App;
