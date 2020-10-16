import React from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';
import Title from '../components/Title';

const Container = styled.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
`;

const Card = styled.section`
  background: #fff;
  border-radius: 0.5rem;
`;

const CardHeader = styled.h2`
  font-size: 0.9rem;
  margin: 0;
  padding: 1rem;
`;

const Home: React.FC<PageProps> = () => (
  <main>
    <Title />
    <Container>
      <Card>
        <CardHeader>Section 1</CardHeader>
      </Card>
      <Card>
        <CardHeader>Section 2</CardHeader>
      </Card>
      <Card>
        <CardHeader>Section 3</CardHeader>
      </Card>
      <Card>
        <CardHeader>Section 4</CardHeader>
      </Card>
      <Card>
        <CardHeader>Section 5</CardHeader>
      </Card>
    </Container>
  </main>
);

export default Home;
