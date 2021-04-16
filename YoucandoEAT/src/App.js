import React from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBarContainer";
import SideBar from "./components/SideBar/SideBarContainer";
import Main from "./components/Main/MainContainer";
import Capture from "./components/Capture/CaptureContainer";
import Logic from "./components/Logic/LogicContainer";

const GlobalStyle = createGlobalStyle`
  body{
    font-family : 'NanumSquare';

    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

const Container = styled.div`
  max-width: 767px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <SideBar />

      <Container>
        <Route exact path="/" component={Main} />
        <Route exact path="/capture" component={Capture} />
        <Route exact path="/logic" component={Logic} />
      </Container>
    </>
  );
}

export default App;
