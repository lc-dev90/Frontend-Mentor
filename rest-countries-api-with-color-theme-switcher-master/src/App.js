import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container>
          <Route path="/" exact component={HomePage} />
          <Route path="/detail/:id" component={DetailsPage} />
          <Route path="/about" component={AboutPage} />
        </Container>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

const Container = styled.main``;
