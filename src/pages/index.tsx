import React, { ReactChildren } from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';
import Header from '../components/Header';
import LikeIcon from '../icons/like.svg';

const Container = styled.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
  margin: auto;
  max-width: 600px;
`;

const CardHeader = styled.h2`
  font-size: 0.9rem;
  margin: 0;
  padding: 1rem 1.5rem;
`;

const CardImage = styled.img`
  width: 100%;
  display: block;
`;

const CardText = styled.p`
  font-family: Palatino, serif;
  font-size: 2rem;
  margin: 0;
  padding: 0.75rem 1.5rem;
`;

const isTextCard = (props: { children?: ReactChildren }) => {
  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];

  const textChildren = children.filter((child) => child.type === CardText);
  const hasTextChildren = textChildren.length > 0;

  return hasTextChildren;
};

const Card = styled.section`
  position: relative;
  background: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: ${(props) => (isTextCard(props) ? '3.5rem' : '0')} 0;
`;

const LikeButton = styled.button`
  --shadow: 0 0 0.75rem 0 #0002;

  position: absolute;
  bottom: 1rem;
  right: 1rem;
  height: 2.75em;
  width: 2.75em;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 50%;
  border: none;
  background: #fff;
  box-shadow: var(--shadow);
  cursor: pointer;
  font-size: 1.25em;

  &:focus {
    outline: none;
    box-shadow: var(--shadow), 0 0 0 2px var(--pink);
  }
`;

const Home: React.FC<PageProps> = () => (
  <main>
    <Header />
    <Container>
      <Card>
        <CardImage src="http://www.fillmurray.com/400/400" alt="" />
        <LikeButton>
          <LikeIcon />
        </LikeButton>
      </Card>
      <Card>
        <CardHeader>I won&apos;t shut up about</CardHeader>
        <CardText>Web accessibility and user experience.</CardText>
        <LikeButton>
          <LikeIcon />
        </LikeButton>
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
