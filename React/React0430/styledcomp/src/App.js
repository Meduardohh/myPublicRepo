import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background-color: red;
`;

const Header = styled.header``;

function App() {
  return (
    <Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Container>
  );
}

export default App;
