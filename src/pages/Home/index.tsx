import React from 'react';
import { Container, Content, ContentText, ContentTextList, Title } from './styles';
function Home() {
  return (
    <Container>
      <Title>
        Bem Vindo Usuario, a o Sistema DevBank versão 1.0!
      </Title>
      <Content>
        <ContentText>Backend</ContentText>
        <ContentTextList>
          <li>Spring Boot (Spring Data JPA, Spring Security(Basic Authentication), Spring Web)</li>
          <li>Lombok</li>
          <li>ModelMapper</li>
          <li>Banco de dados H2 Console</li>
        </ContentTextList>
        <ContentText>Frontend</ContentText>
        <ContentTextList>
          <li>React com Typescript</li>
          <li>Axios</li>
          <li>React Router Dom</li>
          <li>Styled Components</li>
        </ContentTextList>
        <ContentText>Mobile</ContentText>
        <ContentTextList>
          <li>React Native com Typescript</li>
          <li>Axios</li>
          <li>React Navigation</li>
        </ContentTextList>
      </Content>
    </Container>
  );
}

export default Home;
