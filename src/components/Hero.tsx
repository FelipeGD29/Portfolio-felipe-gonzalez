import "./Hero.css";
import reactFcWithSmoothScrollFunction from "../types/typeSmoothScroll";
const Hero: React.FC<reactFcWithSmoothScrollFunction> = ({smoothScroll}) => {
  const offSetAboutMe:number = window.innerWidth <= 600 ? 150 : 0
  return (
    <section id="hero-section" className="text-white relative overflow-hidden h-screen sm:mb-60">
      <div className="semicirculo bg-gradient-to-b from-red from-90% to-purple absolute -right-[100%] bottom-[20%] -z-20 h-[400vw] w-[300vw] rounded-[50%]">
      </div>
      <div className="flex flex-col items-center justify-center rounded-xl z-10 h-[60vh] w-full">
        <div className="flex flex-col items-center text-5xl justify-center 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
          <h1 className="my-28">
            <span>
              Hola, soy{" "}
              <span className="font-bold text-clip">Felipe Gonzalez</span>
              <br />
              {"< "}
              FullStack Developer
              {" />"}
            </span>
          </h1>
        </div>
        <button
        className="arrow relative"
          onClick={() => {
            smoothScroll("aboutMe-section", offSetAboutMe)
          }}
        >
          <svg
            fill="white"
            height={100}
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-ping absolute"
          >
            <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
          </svg>
          <svg
            fill="white"
            height={100}
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"

          >
            <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
