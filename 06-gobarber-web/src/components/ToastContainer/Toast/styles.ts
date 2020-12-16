import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
  success: css`
    background: #e6fffa;
    color: #3172b7;
  `,
}

export const Container = styled.div<ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rbga(0, 0, 0, 0.2);

  display: flex;
  
  background: #ebf8ff;
  color: #3172b7;
  
  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info'] }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 19px;
    opacity: 0.6;
    background: transparent;
    color: inherit;
    border: 0;
  }
`;