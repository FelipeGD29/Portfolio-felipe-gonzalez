import miFoto from "../assets/miFoto.jpeg";
import "./AboutMe.css"
const AboutMe = () => {
  return (
    <section id="aboutMe-section" className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse justify-center items-center 2xl:gap-10 xl:gap-10 lg:gap-5 md:gap-0 mx-20 md:mx-10 sm:mx-5 mb-20 h-screen">
      <img src={miFoto} alt="FelipeGonzalez.jpeg" className="myPhoto w-1/4 rounded-[50%]" />
      <div className="texts flex flex-col gap-5">
          <h2 className="text-3xl"><span>Quien soy?</span></h2>
        <p className="firstParragraph">
          <span>
            Soy un desarrollador FullStack con experiencia en Javascript,
            Typescript, Tailwind, React, Redux y Sequalize. He participado en
            proyectos que destacan por interfaces intuitivas, gestión de estado
            global, integración de API y manejo de bases de datos, brindando una
            sólida base en las últimas tecnologías web.
          </span>
        </p>
        <p>
          <span>
            Actualmente, me encuentro en una pasantía en Awaq ONGD, donde estoy
            contribuyendo al desarrollo de su futuro sitio web. En este proyecto,
            hemos adoptado metodologías Agile y Scrum para organizar efectivamente
            nuestro trabajo en equipo, permitiendo una planificación iterativa,
            entregas frecuentes y rápida adaptación a los cambios, optimizando la
            eficiencia y la calidad del producto final. Mi enfoque ha estado en
            crear páginas de inicio y un panel funcional para el administrador del
            sitio.
          </span>
        </p>
        <p>
          <span>
            Me considero alguien perseverante, colaborativo y flexible,
            determinado en las metas y con pensamiento crítico. Y con inglés avanzado <a href="https://www.efset.org/cert/2v3btP" target="_blank" className="text-blue-400">{"(certificado EF Set)"}</a>
          </span>
        </p>
      </div>
    </section>
  );
};
export default AboutMe;
