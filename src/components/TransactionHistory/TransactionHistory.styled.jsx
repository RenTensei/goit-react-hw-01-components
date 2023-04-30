import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse; /* collapse the borders of the cells */
  margin: 50px;

  th {
    background-color: #bdbdc9;
  }
  td,
  th {
    border: 1px solid black; /* add a 1px solid black border to cells */
    padding: 8px; /* add some padding to cells */
  }

  tr:nth-of-type(even) {
    background-color: #f2f2f2; /* set background color of even rows */
  }

  tr:nth-of-type(odd) {
    background-color: #ffffff; /* set background color of odd rows */
  }

  tr:hover {
    background-color: #cccccc; /* set background color on hover */
    cursor: pointer;
  }
`;
