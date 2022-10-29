import styled from "styled-components";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";

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
      <SideMenu />
      <Main>
        <Navbar />
        <Wrap>
          <Content />
        </Wrap>
      </Main>
    </Container>
  );
}

export default App;
