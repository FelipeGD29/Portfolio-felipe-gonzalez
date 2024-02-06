import "./Hero.css";
const Hero = () => {
  return (
    <section id="hero-section" className="relative overflow-hidden h-screen">
      <div className="semicirculo absolute -right-[100%] bottom-[20%] -z-10 bg-teal-800 h-[400vw] w-[300vw] rounded-[50%]"></div>
      <article className="flex items-center justify-center rounded-xl z-10 h-[60vh] w-full">
        <div className="flex flex-col items-center text-5xl justify-center w-1/2">
          <h1>
            <span>Hola</span>, <span>soy</span>{" "}
            <span className="font-bold text-clip">
              <span>Felipe</span> <span>Gonzalez</span>
            </span>
            <br />
            {"< "}
            <span>FullStack</span> <span>Developer</span>
            {" />"}
          </h1>
        </div>
      </article>
    </section>
  );
};

export default Hero;
