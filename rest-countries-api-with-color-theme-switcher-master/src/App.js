import Header from "./components/Header";
import Search from "./components/Search";
import Select from "./components/Select";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <FilterContainer>
        <Search />
        <Select />
      </FilterContainer>
    </Container>
  );
}

export default App;

const Container = styled.main`
  background-color: #1c2a32;
  min-height: 100vh;
`;

const FilterContainer = styled.div`
  width: 1280px;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
