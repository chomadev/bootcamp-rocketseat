import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { ToastMessage, useToast } from '../../hooks/ToastContext';
import Toast from './Toast'
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
}

export default ToastContainer;