import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://img1.ak.crunchyroll.com/i/spire2/e1a3fd2e8115a52fe102c7a5019c189c1665448338_main.jpg" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
}

export default Comments;
