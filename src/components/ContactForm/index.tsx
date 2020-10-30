import { useForm } from '@formspree/react';
import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import MailIcon from '@/icons/mail.svg';
import { StyledCard } from '../Card';

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
  padding: 1rem 2rem;

  &:focus {
    transform: scale(1.02);
  }

  &:disabled {
    opacity: 0.35;
    filter: saturate(0.5);
    transform: none;
    cursor: not-allowed;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const ErrorMessage = styled.p`
  background: var(--hinge-pink);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const CardContent = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 2rem;
  padding: 3rem 2rem;

  h2 {
    margin: 0;
    font-size: 1.35rem;
    font-weight: 400;
  }
`;

interface ContactFormProps {
  close: () => void;
  content: string;
}

const ContactForm: FC<ContactFormProps> = ({ close, content }) => {
  const [message, setMessage] = useState('');
  const [{ succeeded, submitting, errors }, handleSubmit] = useForm('mbjpydwg');

  if (succeeded) {
    return (
      <StyledCard>
        <CardContent>
          <MailIcon style={{ fontSize: '1.75rem' }} />
          <div>
            <h2>Message Sent!</h2>
            <p>Thanks for the message. I&apos;ll get back to you soon!</p>
          </div>
          <Button type="button" secondary onClick={close}>
            Close
          </Button>
        </CardContent>
      </StyledCard>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      {/* Hidden field to indicate which item the message was sent from  */}
      <input type="hidden" name="content" value={content} />
      <TextArea
        aria-label="Message"
        name="message"
        rows={5}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a message"
        disabled={submitting}
        value={message}
        required
      />
      <FormActions>
        <Button type="submit" disabled={submitting}>
          {submitting ? <em>Sending...</em> : 'Send'}
        </Button>
        <Button
          type="button"
          disabled={submitting}
          secondary
          onClick={() => {
            if (message) {
              // eslint-disable-next-line no-alert
              const answer = window.confirm(
                'Are you sure you want to close? \n\nYou message will be lost.',
              );

              if (!answer) return;
            }
            close();
          }}
        >
          Close
        </Button>
      </FormActions>
      {errors.map((error) => (
        <ErrorMessage key={error.code}>
          {error.message}. If this error persists,{' '}
          <a href="mailto:davidleger95@gmail.com">please email me directly</a>.
        </ErrorMessage>
      ))}
    </Form>
  );
};

export default ContactForm;
