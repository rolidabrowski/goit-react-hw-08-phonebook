import { Container, Title } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
}
