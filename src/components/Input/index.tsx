import  type React from 'react';
import {useEffect, useRef} from 'react';
import type { InputHTMLAttributes } from 'react';
import type {IconBaseProps} from 'react-icons';
import { Container } from './styles';
import {useField} from '@unform/core'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({icon: Icon, ...props}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const {fieldName, defaultValue, registerField} = useField(props.name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
    {Icon && <Icon size={20}/>}
    
    <input defaultValue={defaultValue} {...props} />
  </Container>
  )
};

export default Input;
