import styled from 'styled-components';

const IconButton = styled.button`
  --shadow: 0 0 0.75rem 0 #0002;

  position: absolute;
  bottom: 1rem;
  right: 1rem;
  height: 2.5em;
  width: 2.5em;
  padding: 0;
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 50%;
  border: none;
  background: #fff;
  box-shadow: var(--shadow);
  font-size: 1.25em;
`;

export default IconButton;
