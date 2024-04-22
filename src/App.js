import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <Menu />
        <About />
      </main>
    </>
  );
}

export default App;
