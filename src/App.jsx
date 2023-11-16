import { useState } from 'react'
import styled from 'styled-components'
import Pokegallery from './component/Pokegallery'
function App() {
    return (
        <div style={
            {
                background: "url(https://i.pinimg.com/564x/5a/36/e5/5a36e520b4c02d5dca09391f6255c6fe.jpg) center no-repeat",
                backgroundSize: "cover",
                height: '100vh'
            }
        }>
            <Header>
                <p>Fisrt Pokemon App With React</p>
            </Header>
            <Pokegallery />
        </div>)
}

const Header = styled.div`
color : white ;
background-color : #a2a2a2;
`

export default App