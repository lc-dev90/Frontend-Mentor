import Header from "./components/Header";
import Search from "./components/Search";
import SelectTest from "./components/SelectTest";
import CountriesContainer from "./components/CountriesContainer";
import styled from "styled-components";

import { SearchProvider } from "./components/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Container>
        <Header />
        <FilterContainer>
          <Search />
          <SelectTest />
        </FilterContainer>
        <CountriesContainer></CountriesContainer>
      </Container>
    </SearchProvider>
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
