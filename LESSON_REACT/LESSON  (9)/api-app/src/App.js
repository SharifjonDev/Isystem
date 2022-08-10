import Container from "./UI/Container";
import Navbar from "./UI/Navbar";
import AboutJohn from "./components/AboutJohn";
import RecentPost from "./components/RecentPost";
import Template from "./components/Template";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <AboutJohn />
      </Container>
      <RecentPost />
      <Container>
        <Template />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
