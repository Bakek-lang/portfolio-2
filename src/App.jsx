import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <main className="flex-grow min-h-screen max-w-screen-xl mx-auto">
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
