import styled from '@emotion/styled';

export const StatsSection = styled.section`
  margin: 50px;
  max-width: fit-content;
  text-align: center;

  background-color: ${props => props.theme.colors.lighterGray};

  h2 {
    margin: 0;
    padding: 20px 100px;
  }
`;

export const StatList = styled.ul`
  display: flex;

  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatListElement = styled.li`
  color: white;

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  background-color: ${props => props.color};
`;
