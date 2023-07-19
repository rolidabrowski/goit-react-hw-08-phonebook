import logo from '../../assets/logo.svg';
import { Container, Header, Logo, Code, Text, Link } from './App.styled';

export function App() {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
        <Text>
          Edit <Code>src/App.js</Code> and save to reload.
        </Text>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </Container>
  );
}

export default App;
