import Header from "./components/Header";
import Search from "./components/Search";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <SearchContainer>
        <Search />
      </SearchContainer>
    </Container>
  );
}

export default App;

const Container = styled.main`
  background-color: #1c2a32;
  min-height: 100vh;
`;

const SearchContainer = styled.div`
  width: 1280px;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 48px;
  display: flex;
`;
