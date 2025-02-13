import { Feature } from "./components/feature";
import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { Nav } from "./components/nav";

function App() {
  return (
    <>
      <Nav />

      <Header />
      <main>
        <Feature />
      </main>
      <Footer />
    </>
  );
}

export default App;
