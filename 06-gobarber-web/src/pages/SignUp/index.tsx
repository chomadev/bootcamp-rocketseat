import React from 'react';
import { Background, Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import { FiMail, FiUser, FiLock, FiArrowLeft } from "react-icons/fi";
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Form } from '@unform/web';
import * as Yup from 'yup';

const SignUp: React.FC = () => {
  const handleSubmit = async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres')
      });

      await schema.validate(data);
    } catch (error) {
      console.log(err);
    }
    console.log(data);
  }

  return (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="GoBarber" />
      <Form initialData={{name: ''}} onSubmit={handleSubmit}>
        <h1>Faça seu cadastro</h1>
        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input name="password" type="password" icon={FiLock} placeholder="Senha" />

        <Button type="submit">Cadastrar</Button>
      </Form>
      <a href="login">
        <FiArrowLeft />
        Voltar para logon
      </a>

    </Content>
  </Container>
)}
export default SignUp;