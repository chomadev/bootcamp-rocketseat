import React from 'react';
import { Background, Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>

    </Content>
    <Background />
  </Container>
)
export default SignIn;