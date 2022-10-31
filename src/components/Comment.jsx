import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: gray;
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

function Comment() {
  return (
    <Container>
      <Avatar src="https://img1.ak.crunchyroll.com/i/spire2/e1a3fd2e8115a52fe102c7a5019c189c1665448338_main.jpg" />
      <Details>
        <Name>
          Sam Yusuf <date>1 day ago</date>
        </Name>
        <Text>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum
        </Text>
      </Details>
    </Container>
  );
}

export default Comment;
