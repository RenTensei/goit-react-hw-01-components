import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 50px;

  border-radius: 10px;
  max-width: fit-content;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  transition: all 250ms ease-out;

  :hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    cursor: pointer;
  }
`;

export const ProfileDescription = styled.div`
  padding: 30px 50px;
  padding-bottom: 0;
  text-align: center;
`;

export const ProfileName = styled.p`
  font-size: 1.1em;
  font-weight: 600;
`;

export const ProfileInfo = styled.p`
  color: ${props => props.theme.colors.lightGray};
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: ${props => props.theme.colors.lighterGray};

  li {
    outline: 0.5px solid #e4e4ed;
    text-align: center;
    padding: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  li:first-of-type {
    border-bottom-left-radius: 10px;
  }
  li:last-of-type {
    border-bottom-right-radius: 10px;
  }

  span {
    font-weight: 500;
  }
`;

export const StatsLabel = styled.span`
  color: ${props => props.theme.colors.lightGray};
  font-size: 0.8em;
`;
