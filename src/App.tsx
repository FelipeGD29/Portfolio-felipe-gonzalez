import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import MyAbilities from "./components/MyAbilities";
import Footer from "./components/Footer";
import MyProyects from "./components/MyProjects";
const smoothScroll = (id: string, offset: number = 0, duration: number = 2000) => {
  const element = document.getElementById(id);
  if (element) {
    const offsetPosition = element.offsetTop - offset;
    const startTime = performance.now();
    const start = window.pageYOffset;
    const distance = offsetPosition - start;

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const scrollProgress = Math.min(elapsedTime / duration, 1);
      const easing = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      window.scrollTo(0, start + distance * easing(scrollProgress));

      if (elapsedTime < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  }
};
const App = (): JSX.Element => {
  return (
    
    <main className="font-Comfortaa font-normal text-lg">
      <NavBar smoothScroll={smoothScroll} />
      <Hero smoothScroll={smoothScroll} />
      <AboutMe/>
      <MyProyects/>
      <MyAbilities/>
      <Footer/>
    </main>
  );
};

export default App;
