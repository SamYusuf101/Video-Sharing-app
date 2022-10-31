import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: black;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  //background-color: gray;
  padding: 20px 50px;
  border: -0.2px solid;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
`;

const More = styled.div`
  display: flex;
  font-size: 13px;
  margin-top: 5px;
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

function Login() {
  return (
    <Container>
      <Wrap>
        <Title>Sign In</Title>
        <SubTitle>To continue to My-Tube</SubTitle>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign in</Button>
        <Title>or</Title>
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign up</Button>
      </Wrap>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
}

export default Login;
