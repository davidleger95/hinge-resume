import React, { FC, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []); // Empty array ensures effect is only run on mount and unmount
}

const Form = styled.form`
  display: grid;
  gap: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  padding: 2rem 1.5rem;
`;

const TextArea = styled.textarea`
  border: 3px solid darkgrey;
  border-radius: 0.75rem;
  resize: vertical;
  padding: 1rem;

  &::placeholder {
    font-style: italic;
  }

  &:focus {
    outline: none;
    border-color: var(--hinge-purple);
  }
`;

const Button = styled.button`
  background: var(--hinge-purple);
  color: #fff;
  border-radius: 2rem;
  border: none;
  padding: 1rem;
  max-width: 200px;

  &:focus {
    transform: scale(1.02);
  }
`;

const ContactForm: FC = () => {
  const [message, setMessage] = useState('');
  useLockBodyScroll();
  return (
    <Form>
      <TextArea
        rows={5}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a message"
      >
        {message}
      </TextArea>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ContactForm;
