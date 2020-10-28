import React, { FC } from 'react';
import { PageProps } from 'gatsby';

import Header from '@/components/Header';

import { Container } from '@/components/styled/Layout';
import Card, { CardHeader, CardText } from '@/components/Card';
import CardMedia from '@/components/CardMedia';

const Home: FC<PageProps> = () => (
  <main>
    <Header />
    <Container>
      <Card>
        <CardHeader>Bill Murray</CardHeader>
        <CardMedia />
      </Card>
      <Card isText>
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
