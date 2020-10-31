import styled, { css } from 'styled-components';

interface ContainerProps {
  hasFocus: boolean;
  hasValue: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  border: 2px solid #232129;
  color: #666360;
  
  & + div {
    margin-top: 8px;
  }

  ${props => props.hasFocus && css`
      color: #ff9000;
      border: 2px solid #ff9000;
  `}

  ${props => props.hasValue && css`
    color: #ff9000;
  `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #F4EDE8;

    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
