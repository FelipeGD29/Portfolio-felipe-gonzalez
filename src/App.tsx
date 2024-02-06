import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/aboutMe";
// import SideNavBar from "./components/SideNavBar";
import MyAbilities from "./components/MyAbilities";
import Footer from "./components/Footer";
import MyProyects from "./components/MyProjects";
const App = (): JSX.Element => {
  return (
    <main className="font-Comfortaa font-normal text-lg">
      <NavBar/>
      {/* <SideNavBar/> */}
      <Hero/>
      <AboutMe/>
      <MyProyects/>
      <MyAbilities/>
      <Footer/>
    </main>
  );
};

export default App;
