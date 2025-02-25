import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/images/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

function SignIn() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input name="password" icon={FiLock} placeholder="Senha" type="password" />
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
  );
}

export default SignIn;
