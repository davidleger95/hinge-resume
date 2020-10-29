import styled from 'styled-components';

export const DescriptionList = styled.dl`
  margin: 0.25rem 0.5rem;
`;
export const DescriptionListItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid #0002;
  }
`;
export const ItemTitle = styled.dt``;
export const ItemDescription = styled.dd`
  margin: 0;
  padding: 0;
`;
