import React from "react";
import styled from "styled-components";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const Recommendations = styled.div`
  flex: 2;
`;

const VideoWrap = styled.div``;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  border: -0.5px solid;
  margin: 15px 0px;
`;

const Info = styled.span`
  color: gray;
`;

const Image = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 12px;
`;

const ChannelDescription = styled.div`
  font-size: 14px;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

function Videos() {
  return (
    <Container>
      <Content>
        <VideoWrap>
          <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/5H9U6SugSzk"
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrap>
        <Title>My test video</Title>
        <Details>
          <Info>1,000,000 views october, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://img1.ak.crunchyroll.com/i/spire2/e1a3fd2e8115a52fe102c7a5019c189c1665448338_main.jpg" />
            <ChannelDetail>
              <ChannelName>My Channel</ChannelName>
              <ChannelCounter>300k Subscribers</ChannelCounter>
              <ChannelDescription>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </ChannelDescription>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
      </Content>
      <Recommendations>Recommendations</Recommendations>
    </Container>
  );
}

export default Videos;
