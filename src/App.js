import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing"
import About from "./About"
import Projects from "./Projects"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Landing />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
