import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as colors from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
`;

export const NovoAluno = styled(Link)`
  display: flex;
  padding: 20px 0 10px 0;
  color: ${colors.primaryColor};
  align-items: center;
`;
