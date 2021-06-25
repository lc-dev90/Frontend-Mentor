import Header from "./components/Header";
import Details from "./components/Details";
import Home from "./components/Home";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SearchProvider } from "./components/SearchContext";
import { SelectProvider } from "./components/SelectContext";

function App() {
  return (
    <Router>
      <SearchProvider>
        <SelectProvider>
          <Container>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/details" exact component={Details} />
            </Switch>
          </Container>
        </SelectProvider>
      </SearchProvider>
    </Router>
  );
}

export default App;

const Container = styled.main`
  background-color: #1c2a32;
  min-height: 100vh;
`;
