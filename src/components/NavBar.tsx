import { useState } from "react";
const NavBar = () => {
  const [activeLink, setActiveLink] = useState('hero-section');

  const smoothScroll = (id: string, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveLink(id); // Actualiza el estado del enlace activo al ser clickeado
    }
  };

  return (
    <nav className="fixed z-20 font-bold text-xl top-0 right-20 h-[10vh] w-[90%] flex justify-around items-center gap-5 border-2 border-t-0 border-teal-800 rounded-3xl rounded-t-none bg-black bg-opacity-60">
      <a
        onClick={() => smoothScroll('hero-section')}
        className={`transition-colors duration-500 cursor-pointer ${activeLink === 'hero-section' ? 'text-teal-800 underline' : 'text-white'}`}
      >
        Felipe Gonzalez
      </a>
      <a
        onClick={() => smoothScroll('aboutMe-section', 300)}
        className={`transition-colors duration-500 cursor-pointer ${activeLink === 'aboutMe-section' ? 'text-teal-800 underline' : 'text-white'}`}
      >
        Quien soy?
      </a>
      <a
        onClick={() => smoothScroll('myProjects-section', 100)}
        className={`transition-colors duration-500 cursor-pointer ${activeLink === 'myProjects-section' ? 'text-teal-800 underline' : 'text-white'}`}
      >
        Mis Proyectos
      </a>
      <a
        onClick={() => smoothScroll('myAbilities-section', 300)}
        className={`transition-colors duration-500 cursor-pointer ${activeLink === 'myAbilities-section' ? 'text-teal-800 underline' : 'text-white'}`}
      >
        Mis Conocimientos
      </a>
      <a
        onClick={() => smoothScroll('footer-section')}
        className={`transition-colors duration-500 cursor-pointer ${activeLink === 'footer-section' ? 'text-teal-800 underline' : 'text-white'}`}
      >
        Contáctame
      </a>
    </nav>
  );
};

export default NavBar;
