import { useState } from 'react'
import Card from './Card'
import pokemon from '../data'
import styled from 'styled-components'
function Pokegallery() {
  return <Pokemon>
    {
      pokemon.map((obj, index) => {
        return (<Card key={index} name={obj.name} type={obj.type} img={obj.img} />)
      })
    }
  </Pokemon>
}
const Pokemon = styled.div`
margin: auto;
margin-top: 2.5%;
display: grid; 
grid-template-columns: repeat(6, 1fr);
width: max-content;
gap: 10px;
align-items: center;
justify-content: space-evenly;
&> .card-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  gap : 50px;
  background-color: aliceblue;
  &>img{
    width: 225px;
    height: 225px;
  }
  &>div{
    display : flex ;
    flex-direction:column ;
  gap : 5px;
  }
}
`
export default Pokegallery
