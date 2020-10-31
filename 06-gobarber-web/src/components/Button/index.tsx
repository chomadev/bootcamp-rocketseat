import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProperties = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProperties> = ({ children, ...rest}) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
)

export default Button;