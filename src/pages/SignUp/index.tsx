import React from 'react';
import { 
  FiArrowLeft, 
  FiMail, 
  FiUser, 
  FiLock } from 
'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/images/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const  SignUp = () => {

  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <Form  onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input name="password" icon={FiLock} placeholder="Senha" type="password" />
          <Button type="submit">Cadastrar</Button>

        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
}

export default SignUp;
