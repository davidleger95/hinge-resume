import React, { FC, useState } from 'react';
import styled from 'styled-components';
import DescriptionIcon from '@/icons/description.svg';

const CardImage = styled.div<{ src: string }>`
  /* A responsive square image */
  padding-bottom: 100%;
  background-image: url(${(p) => p.src});
  background-size: cover;
`;

const DescriptionButton = styled.button`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 9;
  border: none;
  background: #000d;
  color: #fff;
  height: 2em;
  width: 2em;
  padding: 0;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 50%;
`;
const Description = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  gap: 0.75rem;
  margin: 0;
  justify-content: center;
  align-content: center;
  background: #0008;
  color: white;
  text-align: center;
  padding: 2.5rem;
`;

const DescriptionHeading = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 1.1rem;
`;
const DescriptionBody = styled.p`
  margin: 0;
  font-weight: 100;
  line-height: 1.35;
`;

const CardMedia: FC = () => {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <DescriptionButton
        onClick={() => setDescriptionVisible((value) => !value)}
      >
        <DescriptionIcon />
      </DescriptionButton>
      {descriptionVisible && (
        <Description onClick={() => setDescriptionVisible(false)}>
          <DescriptionHeading>Who is Bill Murray?</DescriptionHeading>
          <DescriptionBody>
            Bill Murray is an American actor, comedian, and writer. Known for
            his deadpan delivery, he first rose to fame on Saturday Night Live,
            a series of performances that earned him his first Emmy Award, and
            later starred in comedy films.
          </DescriptionBody>
        </Description>
      )}
      <CardImage
        src="http://www.fillmurray.com/400/500"
        aria-label="Bill Murray"
        role="img"
        onClick={() => setDescriptionVisible(true)}
      />
    </div>
  );
};

export default CardMedia;
