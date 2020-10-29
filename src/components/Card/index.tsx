import React, { FC, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';

import IconButton from '@/components/styled/IconButton';
import LikeIcon from '@/icons/like.svg';
import ContactForm from '../ContactForm';

export const CardHeader = styled.h2`
  font-size: 0.9rem;
  margin: 0;
  padding: 1rem 1.5rem;
`;

export const CardText = styled.p`
  font-family: Palatino, serif;
  font-size: 2rem;
  margin: 0;
  padding: 0.75rem 1.5rem;
`;

export const StyledCard = styled.section<{ isText?: boolean }>`
  position: relative;
  background: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: ${({ isText }) => (isText ? '3.5rem' : '0')} 0;
`;

const LikeButton: FC<HTMLAttributes<HTMLButtonElement>> = (props) => (
  <IconButton {...props}>
    <LikeIcon />
  </IconButton>
);

const CardWrapper = styled.div<{ isOpen?: boolean }>`
  top: 4rem;
  bottom: 4rem;
  display: grid;
  gap: 2rem;

  z-index: ${(p) => (p.isOpen ? '999999' : 'auto')};

  & > * {
    box-shadow: ${(p) => (p.isOpen ? '0 0 2rem #0004' : '0 0 2rem #0000')};
  }
`;

const Mask = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff8;
  backdrop-filter: blur(5px);
  z-index: -1;
  pointer-events: ${(p) => (p.isOpen ? 'inital' : 'none')};
  opacity: ${(p) => (p.isOpen ? 1 : 0)};
  transition: opacity ease-in-out 0.5s;
`;

export const Card: FC<{ isText?: boolean }> = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CardWrapper isOpen={isOpen}>
      <Mask isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <StyledCard {...props} onDoubleClick={() => setIsOpen(true)}>
        {children}
        {isOpen || <LikeButton onClick={() => setIsOpen(true)} />}
      </StyledCard>
      {isOpen && <ContactForm close={() => setIsOpen(false)} />}
    </CardWrapper>
  );
};

export default Card;
