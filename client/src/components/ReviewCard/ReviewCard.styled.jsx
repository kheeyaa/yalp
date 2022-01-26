import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const UserWrapper = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

export const UserImg = styled.a`
  border-radius: 50%;
  overflow: hidden;
  width: 40px;
  height: 40px;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const UserName = styled.a`
  font-weight: 700;
  font-size: 20px;
  color: ${getHexaColor('gray', 500)};
`;

export const ReviewText = styled.span`
  display: inline-block;
  color: ${getHexaColor('gray', 500)};
  margin-top: 10px;
`;
