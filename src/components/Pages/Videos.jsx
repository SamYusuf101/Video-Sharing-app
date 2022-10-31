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
      </Content>
      <Recommendations>Recommendations</Recommendations>
    </Container>
  );
}

export default Videos;
