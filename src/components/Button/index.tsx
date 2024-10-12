// biome-ignore lint/style/useImportType: <explanation>
import React, { ButtonHTMLAttributes } from 'react';
import {Container} from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({children, ...props}) => (
   <Container {...props}>{children}</Container>
)

export default Button;
