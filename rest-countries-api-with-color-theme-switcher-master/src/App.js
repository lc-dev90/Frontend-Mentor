import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";

//Components
import Navbar from "./components/Navbar";

//Pages
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import AboutPage from "./pages/AboutPage";

//Context
import themeContext from "./contexts/themes/themeContext";

const App = () => {
  const { darkTheme } = useContext(themeContext);
  return (
    <Router>
      <Main darkTheme={darkTheme}>
        <Navbar />
        <Container>
          <Route path="/" exact component={HomePage} />
          <Route path="/detail/:id" component={DetailsPage} />
          <Route path="/about" component={AboutPage} />
        </Container>
      </Main>
    </Router>
  );
};

export default App;

const Main = styled.main`
  background: ${(props) => (props.darkTheme ? "#1c2a32" : "#fafafa")};
`;

const Container = styled.div`
  min-height: calc(100vh - 80px);
  max-width: 90%;
  width: 1280px;
  margin: 0 auto;
}
`;
