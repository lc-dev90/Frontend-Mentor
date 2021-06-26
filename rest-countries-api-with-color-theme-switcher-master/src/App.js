import React, { useState } from "react";
import Header from "./components/Header";
import Details from "./components/Details";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SearchProvider } from "./components/SearchContext";
import { SelectProvider } from "./components/SelectContext";
import { CountrieProvider } from "./components/CountrieContext";

function App() {
  const [toggleDarkTheme, setToggleDarkTheme] = useState("true");
  window.addEventListener("resize", (e) => {
    console.log(window.innerWidth);
  });
  return (
    <SearchProvider>
      <SelectProvider>
        <CountrieProvider>
          <Router>
            <Container toggleDarkTheme={toggleDarkTheme}>
              <Header
                toggleDarkTheme={toggleDarkTheme}
                setToggleDarkTheme={setToggleDarkTheme}
              />
              <Switch>
                <Route
                  path="/"
                  exact
                  component={() => <Home toggleDarkTheme={toggleDarkTheme} />}
                />
                <Route
                  path="/details"
                  exact
                  component={() => (
                    <Details toggleDarkTheme={toggleDarkTheme} />
                  )}
                />
                <Route component={NotFoundPage} />
              </Switch>
            </Container>
          </Router>
        </CountrieProvider>
      </SelectProvider>
    </SearchProvider>
  );
}

export default App;

const Container = styled.main`
  background-color: ${(props) =>
    props.toggleDarkTheme ? "#1c2a32" : "#fafafa"};
  min-height: 100vh;
`;
