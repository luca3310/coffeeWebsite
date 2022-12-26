import "./App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Address from "./Address";
import About from "./About";

function App() {
  return (
    <div className="scroll-smooth	snap-y snap-mandatory overflow-x-hidden h-screen w-screen">
      <Navbar />
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <Menu />
      </div>
      <div className="snap-start">
        <Address />
      </div>
      <div className="snap-start">
        <About />
      </div>
    </div>
  );
}

export default App;
