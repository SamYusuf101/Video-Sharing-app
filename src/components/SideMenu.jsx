import React from "react";
import styled from "styled-components";
import Video from "../img/video.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { Link } from "react-router-dom";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import HistoryIcon from "@mui/icons-material/History";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
//import FeedIcon from "@mui/icons-material/Feed";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportIcon from "@mui/icons-material/Report";
import LightModeIcon from "@mui/icons-material/LightMode";

const Container = styled.div`
  flex: 1;
  background-color: #1abc9c;
  height: 100vh;
  color: white;
  font-size: 13px;
  position: sticky;
  top: 0px;
`;
const Wrapper = styled.div`
  padding: 14px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 7px;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.2px solid #f4f6f6;
`;

const Item = styled.div`
  display: flex;
  margin-top: 2px;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #e74c3c;
  color: #e74c3c;
  border-radius: 3px;
  display: flex;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  align-items: center;
`;

const Img = styled.img`
  height: 25px;
`;

function SideMenu() {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={Video} />
            Video
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <LibraryAddCheckIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <Login>
            Sign in to like videos, comment and subscribe
            <Button>
              <AccountCircleIcon /> SignIn
            </Button>
          </Login>
        </Link>
        <Hr />
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>
        <Item>
          <SportsBaseballIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <MovieCreationIcon />
          Movies
        </Item>
        {/*<Item>
          <FeedIcon />
          News
  </Item>*/}
        <Item>
          <LiveTvIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <ReportIcon />
          Report
        </Item>
        <Item>
          <HelpIcon />
          Help
        </Item>
        <Item>
          <LightModeIcon />
          LightMode
        </Item>
      </Wrapper>
    </Container>
  );
}

export default SideMenu;
