import "./App.scss";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Benefits from "./sections/benefits";
import How from "./sections/how";
import Footer from "./sections/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <How />
      </main>
      <Footer />
    </div>
  );
}

export default App;
