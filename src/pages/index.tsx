import React from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
`;

const Card = styled.section`
  position: relative;
  background: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const CardHeader = styled.h2`
  font-size: 0.9rem;
  margin: 0;
  padding: 1rem;
`;

const CardText = styled.p`
  font-family: Palatino, serif;
  font-size: 2rem;
  margin: 0;
  padding: 1rem;
`;

const CardImage = styled.img`
  width: 100%;
  display: block;
`;

const LikeButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  height: 3rem;
  width: 3rem;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 50%;
  border: none;
  background: #fff;
  box-shadow: 0 0 1rem 0 #0004;
  cursor: pointer;
`;

const Home: React.FC<PageProps> = () => (
  <main>
    <Header />
    <Container>
      <Card>
        <CardImage src="http://www.fillmurray.com/400/400" alt="" />
        <LikeButton>
          <span
            role="img"
            aria-label="Like"
            style={{ fontFamily: 'monospace' }}
          >
            &lt;3
          </span>
        </LikeButton>
      </Card>
      <Card>
        <CardHeader>I won&apos;t shut up about</CardHeader>
        <CardText>Web accessibility and user experience.</CardText>
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
