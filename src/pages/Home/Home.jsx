import { Container, Title } from './Home.styles';

export default function Home() {
  return (
    <Container>
      <Title>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
}
