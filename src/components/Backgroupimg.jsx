import React from 'react'
import background from "../assets/homepage2.jpg";
import styled from 'styled-components';
export default function Backgroupimg() {
  return (
    <Container>
        <img src={background} alt='background' />
    </Container>
  )
}

const Container = styled.div`
height: 100vh;
width: 100vw;
img{
    height: 100vh;
    width: 100vw;
}

`;