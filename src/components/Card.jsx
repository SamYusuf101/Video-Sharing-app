import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const Text = styled.div``;

const ChannelName = styled.h2`
  font-size: 13px;
  margin: 9px 0px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500px;
`;

const Info = styled.div`
  font-size: 13px;
`;

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

function Card() {
  return (
    <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container>
        <Image src="https://btnafrica.com/wp-content/uploads/2022/02/Bleach-Anime-Return-In-2022-1.jpg" />
        <Details>
          <ChannelImg src="https://img1.ak.crunchyroll.com/i/spire2/e1a3fd2e8115a52fe102c7a5019c189c1665448338_main.jpg" />
          <Text>
            <Title>My Video</Title>
            <ChannelName>My Channel</ChannelName>
            <Info>1,000,000 views 1 day ago</Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
}

export default Card;
