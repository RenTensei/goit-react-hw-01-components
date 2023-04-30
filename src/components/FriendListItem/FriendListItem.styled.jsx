import styled from '@emotion/styled';

export const Profile = styled.li`
  ${props => {
    console.log(props.isOnline);
  }}
  display: flex;
  gap: 16px;
  align-items: center;

  width: 180px;
  padding: 12px;
  border-radius: 10px;

  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  transition: all 250ms ease-out;

  :hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    cursor: pointer;
  }

  p {
    font-weight: 500;
  }

  span {
    width: 12px;
    height: 12px;
    border-radius: 12px;

    background-color: ${props => (props.isOnline ? 'green' : 'red')};
  }
`;
