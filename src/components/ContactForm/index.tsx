import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

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

const Button = styled.button<{ secondary?: boolean }>`
  background: var(--hinge-purple);
  color: #fff;
  border-radius: 2rem;
  border: none;
  padding: 1rem;

  &:focus {
    transform: scale(1.02);
  }

  ${(p) => {
    if (p.secondary) {
      return css`
        background: white;
        color: var(--hinge-purple);
        border: 3px solid var(--hinge-purple);
      `;
    }
    return '';
  }}
`;

const FormActions = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
`;

const ContactForm: FC<{ close: () => void }> = ({ close }) => {
  const [message, setMessage] = useState('');
  return (
    <Form>
      <TextArea
        rows={5}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a message"
      >
        {message}
      </TextArea>
      <FormActions>
        <Button type="submit">Submit</Button>
        <Button type="button" secondary onClick={close}>
          Close
        </Button>
      </FormActions>
    </Form>
  );
};

export default ContactForm;
