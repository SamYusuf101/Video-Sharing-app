import styled from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import SideMenu from "./components/SideMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Videos from "./components/Pages/Videos";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
`;
const Wrap = styled.div``;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <SideMenu />
        <Main>
          <Navbar />
          <Wrap>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="video">
                  <Route path=":id" element={<Videos />} />
                </Route>
              </Route>
            </Routes>
          </Wrap>
        </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
