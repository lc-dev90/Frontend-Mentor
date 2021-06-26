import React, { useState, useEffect } from "react";
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

  const LOCAL_STORAGE_KEY = "dark-mode";

  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setToggleDarkTheme(darkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toggleDarkTheme));
  }, [toggleDarkTheme]);

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
                  path="/rest-countries-api-with-color-theme-switcher-master/build/"
                  exact
                  component={() => <Home toggleDarkTheme={toggleDarkTheme} />}
                />
                <Route
                  path="/rest-countries-api-with-color-theme-switcher-master/build/details"
                  exact
                  component={() => (
                    <Details toggleDarkTheme={toggleDarkTheme} />
                  )}
                />
                <Route
                  component={() => (
                    <NotFoundPage toggleDarkTheme={toggleDarkTheme} />
                  )}
                />
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
