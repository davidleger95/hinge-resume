import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import profileImage from '@/images/profile.png';
import Header from '@/components/Header';

import { Container } from '@/components/styled/Layout';
import Card, { CardHeader, CardText, StyledCard } from '@/components/Card';
import CardMedia from '@/components/CardMedia';
import {
  DescriptionList,
  DescriptionListItem,
  ItemTitle,
  ItemDescription,
} from '@/components/DescriptionList';
import EducationIcon from '@/icons/education.svg';
import WorkIcon from '@/icons/work.svg';
import LocationIcon from '@/icons/location.svg';

const Home: FC<PageProps> = () => (
  <main>
    <Header />
    <Container>
      <Card>
        <CardMedia
          src={profileImage}
          alt="David Leger"
          description={{
            heading: 'An Artsy Frontend Engineer',
            body: `
              Hey! I'm David, but you can call me dave.js! I'm a frontend 
              developer who is passionate about creating great experiences 
              on the web! I love working with TypeScript, React, CSS, 
              GraphQL, and Web Components!`,
          }}
        />
      </Card>
      <Card isText>
        <CardHeader>I won&apos;t shut up about</CardHeader>
        <CardText>Web accessibility and user experience.</CardText>
      </Card>

      <Card>
        <CardHeader>Bill Murray</CardHeader>
        <CardMedia
          src="http://www.fillmurray.com/600/500"
          alt=""
          description={{
            heading: 'Title',
            body: 'Some description',
          }}
        />
      </Card>
      <StyledCard>
        <DescriptionList>
          <DescriptionListItem>
            <ItemTitle>
              <WorkIcon />
            </ItemTitle>
            <ItemDescription>Frontend Engineer @ Manifold</ItemDescription>
          </DescriptionListItem>
          <DescriptionListItem>
            <ItemTitle>
              <EducationIcon />
            </ItemTitle>
            <ItemDescription>
              Software Engineering @ University of New Brunswick
            </ItemDescription>
          </DescriptionListItem>
          <DescriptionListItem>
            <ItemTitle>
              <LocationIcon />
            </ItemTitle>
            <ItemDescription>Halifax, Canada</ItemDescription>
          </DescriptionListItem>
        </DescriptionList>
      </StyledCard>
      <Card isText>
        <CardHeader>My Love Language is</CardHeader>
        <CardText>CSS. I love making things look pretty!</CardText>
      </Card>
      <Card>
        <CardHeader>Bill Murray</CardHeader>
        <CardMedia
          src="http://www.fillmurray.com/600/600"
          alt=""
          description={{
            heading: 'Title',
            body: 'Some description',
          }}
        />
      </Card>
      <Card isText>
        <CardHeader>Do you agree or disagree that</CardHeader>
        <CardText>TypeScript is better than JavaScript.</CardText>
      </Card>
      <Card>
        <CardHeader>Bill Murray</CardHeader>
        <CardMedia
          src="http://www.fillmurray.com/700/600"
          alt=""
          description={{
            heading: 'Title',
            body: 'Some description',
          }}
        />
      </Card>
      <Card>
        <CardHeader>Bill Murray</CardHeader>
        <CardMedia
          src="http://www.fillmurray.com/600/700"
          alt=""
          description={{
            heading: 'Title',
            body: 'Some description',
          }}
        />
      </Card>
    </Container>
  </main>
);

export default Home;
