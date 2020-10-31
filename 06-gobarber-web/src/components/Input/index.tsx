import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { Container } from './styles';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [hasFocus, setHasFocus] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setHasFocus(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setHasFocus(false);
    setHasValue(!!inputRef.current?.value);
  }, []);

  return (
    <Container hasFocus={hasFocus} hasValue={hasValue}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue} ref={inputRef} {...rest} />
    </Container>
  )
}

export default Input;