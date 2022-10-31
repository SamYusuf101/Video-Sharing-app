import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 56px;
  background-color: white;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div`
  display: flex;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 40%;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Input = styled.input`
  border: none;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #e74c3c;
  color: #e74c3c;
  border-radius: 3px;
  display: flex;
  font-weight: 500;
  cursor: pointer;
  align-items: center;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />

          <SearchOutlinedIcon />
        </Search>
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleIcon /> SignIn
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
