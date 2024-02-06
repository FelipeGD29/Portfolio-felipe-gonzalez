import miFoto from "../assets/miFoto.jpeg";
const AboutMe = () => {
  return (
    <section className="flex justify-center items-center gap-10 mx-20">
      <img src={miFoto} alt="FelipeGonzalez.jpeg" className="w-1/4 rounded-[50%]" />
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl">Quien soy?</h2>
        <p>
          Soy un desarrollador FullStack con experiencia en Javascript,
          Typescript, Tailwind, React, Redux y Sequalize. He participado en
          proyectos que destacan por interfaces intuitivas, gestión de estado
          global, integración de API y manejo de bases de datos, brindando una
          sólida base en las últimas tecnologías web.
        </p>
        <p>
          Actualmente, me encuentro en una pasantía en Awaq ONGD, donde estoy
          contribuyendo al desarrollo de su futuro sitio web. En este proyecto,
          hemos adoptado metodologías Agile y Scrum para organizar efectivamente
          nuestro trabajo en equipo, permitiendo una planificación iterativa,
          entregas frecuentes y rápida adaptación a los cambios, optimizando la
          eficiencia y la calidad del producto final. Mi enfoque ha estado en
          crear páginas de inicio y un panel funcional para el administrador del
          sitio.
        </p>
        <p>
          Me considero alguien perseverante, colaborativo y flexible,
          determinado en las metas y con pensamiento crítico.
        </p>
      </div>
    </section>
  );
};
export default AboutMe;
