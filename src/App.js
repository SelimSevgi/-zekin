import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Section from "./components/Section";
import Royalglass from "./components/Royalglass";
import Tempo from "./components/Tempo";
// import Favorites from "./components/Favorites";
// import MobileApp from "./components/MobileApp";
// import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Kraftzunde from "./components/Kraftzunde";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Section />
      <Royalglass />
      <Kraftzunde /> 
      <Tempo />
      <div className="container mx-auto grid gap-y-6">
        {/* <Favorites />
        <MobileApp />
        <Cards /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
