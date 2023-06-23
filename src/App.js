import Benefits from "./components/Benefits/Benefits";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Team />
      <Benefits />
      <Services />
    </div>
  );
}

export default App;
