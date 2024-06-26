import { useEffect, useState } from "react";
import reactFcWithSmoothScrollFunction from "../types/typeSmoothScroll";
import CV from "../assets/Felipe-Gonzalez.pdf"
const NavBar: React.FC<reactFcWithSmoothScrollFunction> = ({
  smoothScroll,
}) => {
  const offSetAboutMe:number = window.innerWidth <= 600 ? 250 : 0
  const [activeLink, setActiveLink] = useState("hero-section");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const top =
          section.id === "aboutMe-section"
            ? section.offsetTop - 255
            : "myProjects-section"
            ? section.offsetTop - 350
            : "myAbilities-section"
            ? section.offsetTop - 200
            : section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        activeLink === "hero-section" && "opacity-0"
      } navBar md:text-base sm:text-base ease-in-out transition-opacity duration-500 fixed z-20 font-bold text-xl top-0 2xl:right-20 md:right-0 sm:right-0 h-[10vh] 2xl:w-[91.5%] md:w-full sm:w-full flex justify-around items-center gap-5 border-2 border-t-0 rounded-3xl rounded-t-none bg-black bg-opacity-60 backdrop-blur-sm`}
    >
      <button
        onClick={() => smoothScroll("hero-section", 1000)}
        className={`transition-colors duration-500 cursor-pointer ${
          activeLink === "hero-section"
            ? "myHeader underline"
            : "text-red"
        }`}
      >
        Felipe Gonzalez
      </button>
      <button
        onClick={() => smoothScroll("aboutMe-section", offSetAboutMe, 1000)}
        className={`transition-colors duration-500 cursor-pointer ${
          activeLink === "aboutMe-section"
            ? "myHeader underline"
            : "text-red"
        }`}
      >
        Quien soy?
      </button>
      <button
        onClick={() => smoothScroll("myProjects-section", 100, 1000)}
        className={`transition-colors duration-500 cursor-pointer ${
          activeLink === "myProjects-section"
            ? "myHeader underline"
            : "text-red"
        }`}
      >
        Mis Proyectos
      </button>
      <button
        onClick={() => smoothScroll("myAbilities-section", 0, 1000)}
        className={`transition-colors duration-500 cursor-pointer ${
          activeLink === "myAbilities-section"
            ? "myHeader underline"
            : "text-red"
        }`}
      >
        Mis Conocimientos
      </button>
      <div className="flex gap-2">
        <a href="http://www.linkedin.com/in/felipe-gonzález-delgado-834950212/" target="_blank">
          <svg
            fill="white"
            className="fill-red transition-colors duration-500 hover:fill-purple"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          className="flex group items-center gap-3"
          href="https://github.com/FelipeGD29"
          target="_blank"
        >
          <svg
            fill="white"
            className=" fill-red transition-colors duration-500 hover:fill-purple"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a className="text-white flex items-center gap-2 group" href={CV} download="Felipe-Gonzalez.pdf">
          <svg
            className="fill-red transition-color duration-500 group-hover:fill-purple"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12.819 14.427c.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12h.496c.474 0 .803.173.916.644zm3.091-8.65c2.047-.479 4.805.279 6.09 1.179-1.494-1.997-5.23-5.708-7.432-6.882 1.157 1.168 1.563 4.235 1.342 5.703zm-7.457 7.955h-.546v.943h.546c.235 0 .467-.027.576-.227.067-.123.067-.366 0-.489-.109-.198-.341-.227-.576-.227zm13.547-2.732v13h-20v-24h8.409c4.858 0 3.334 8 3.334 8 3.011-.745 8.257-.42 8.257 3zm-12.108 2.761c-.16-.484-.606-.761-1.224-.761h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.094-.292.094-.597 0-.885zm3.407-.303c-.297-.299-.711-.458-1.199-.458h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.554-.659.586-2.035-.063-2.693zm3.701-.458h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784z" />
          </svg>
          <p className="text-red cursor-pointer transition-color duration-500 group-hover:text-purple">
            Descargar CV
          </p>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
