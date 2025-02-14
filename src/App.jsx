import {Benefits} from "./components/benefits";
import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { Nav } from "./components/nav";
import { Testimonials } from "./components/testimonials";
import {Explore} from "./components/explore";

function App() {
  return (
    <>
      <Nav />

      <Header />
      <main>
        <Benefits />
        <Testimonials/>
        <Explore/>
      </main>
      <Footer />
    </>
  );
}

export default App;
