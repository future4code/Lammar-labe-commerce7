import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa'
import styled from "styled-components"
import GlobalStyle from './Global'
import Filtros from './components/Filtros/Filtros'
import Carrinho from './components/Carrinho/Carrinho'
import Produtos from './components/Produtos/Produtos'
import dadosProdutos from './dados/mockDeDados.json'

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
 
  div {
    display: flex;
    
    flex-wrap:wrap;

  }
`

function App() {

  const [produto] = useState(dadosProdutos)
  const [titulo, setTitulo] = useState("");
  const [valorMin, setValorMin] = useState(0);
  const [valorMax, setValorMax] = useState(100000000);

  return (
    <>
      <Header>
        <h1>Space Store</h1>
        <div>
          <input type="seach" 
          placeholder="Busca"
          value={titulo} 
          onChange={(e)=> {setTitulo (e.target.value)}}></input>
          <button>
            <FaSearch />
          </button>
        </div>
      </Header>

      <Container>
        <Filtros
          titulo={titulo}
          valorMin={valorMin}
          valorMax={valorMax}
          setTitulo={setTitulo}
          setValorMin={setValorMin}
          setValorMax={setValorMax}
        />
        <div>
          {produto
            .filter(prod => {
              return prod.produto.includes(titulo)
            })
            .filter (prod => {
              return prod.valor >= valorMin || valorMin === ""
            })
            .filter (prod => {
              return prod.valor <= valorMax || valorMax === ""
            })
            .map(prod => {
              return <Produtos prod={prod} id={prod.id}/>
            })}
        </div>
        <Carrinho/>
      </Container>
      <GlobalStyle/>
    </>
  );
}

export default App;
