import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
import Backgroupimg from '../components/Backgrounimg1';
import Headerrr from '../components/Header2';
export default function Homepage(props) {
  const navigate = useNavigate();
  return <Container>
    <Backgroupimg/>
    <div className='content'>
      <Headerrr/>
      <div className="form-container flex column a-center j-center">
      <div className="form flex column a-center j-center">
        <div className="title">
          <h1>Sign In</h1>
        </div>
        <div className="container flex column">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password"/>
          <button onClick={() => navigate(props.netflix?"/homepage" : "/netflix")}>
          {props.netflix?"netflix" : "Sign In"}</button>
        </div>
      </div>
    </div>
    </div>
  </Container>;
}

const Container = styled.div`
  .hi{text-align: left}
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 9rem ;
        background-color: #000000b0;
        width: 30vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;