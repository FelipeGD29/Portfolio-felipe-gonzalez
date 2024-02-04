import Hero from "./components/Hero";
// import SideNavBar from "./components/SideNavBar";
import MyAbilities from "./components/MyAbilities";
import Footer from "./components/Footer";
const App = (): JSX.Element => {
  return (
    <main className="font-Comfortaa font-normal">
      {/* <SideNavBar/> */}
      <Hero/>
      <MyAbilities/>
      <Footer/>
    </main>
  );
};

export default App;
