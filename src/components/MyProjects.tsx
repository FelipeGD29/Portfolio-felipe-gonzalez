import myWorld from "../assets/myWorld.png";
import myVideo from "../assets/myVideo.webm";

const MyProyects = () => {
  return (
    <section
      id="myProjects-section"
      className="m-20 flex flex-col gap-36"
    >
      <h2 className="text-3xl -mb-16">Mis proyectos</h2>
      <article className="flex gap-5 rounded-2xl border-4 border-teal-800 p-5">
        <a
          href="https://myworld-72wn.onrender.com"
          className="relative group w-1/2"
          target="_blank"
        >
          <img
            src={myWorld}
            alt="myWorld"
            className="w-full sm:w-auto rounded-2xl transition-all duration-300 filter brightness-100 group-hover:brightness-50"
          />
          <span className="absolute text-5xl inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            My World
          </span>
        </a>
        <div className="w-1/2">
          <a
            href="https://myworld-72wn.onrender.com"
            className="text-2xl underline hover:text-teal-800 transition-colors duration-500"
          >
            My World
          </a>
          <p>
            Mi proyecto individual: una aplicación de países que ofrece
            información de 250 destinos, y podremos crear actividades para
            estos.
          </p>
          <p>
            Al ingresar, la página de bienvenida nos guía a la principal, donde
            encontramos tarjetas de todos los países. Al hacer clic, obtenemos
            datos clave como ID, bandera, continente, capital, subregión, área y
            población. Próximamente, las actividades creadas se mostrarán aquí.
          </p>
          <p>
            De vuelta a la página principal, encontramos filtros permiten
            ordenar países alfabéticamente, por población o continente,
            utilizables simultáneamente. En la sección de actividades, creamos y
            gestionamos nuestras propias actividades, ingresando detalles como
            nombre, dificultad, duración, países involucrados y temporada.
          </p>
          <p>
            La aplicación verifica la precisión de la información antes de crear
            la actividad. Una vez creada, se muestra claramente y se integra en
            la carta del país correspondiente.
          </p>
        </div>
      </article>

      <article className="flex gap-5 rounded-2xl border-4 border-teal-800 p-5">
        <div>
          <h2 className="text-2xl underline hover:text-teal-800 transition-colors duration-500">
            Rick and Morty project
          </h2>
          <p>
            Este es mi proyecto integral, en el que podemos buscar personajes de
            la serie de televisión Rick y Morty, a los que podemos agregar a
            favoritos y eliminarlos de nuestra vista.
          </p>
          <p>
            Cuando clickeamos en un personaje podremos ver toda la información
            de este, que incluye su estado, especie, género y origen.
          </p>
          <p>
            Con control de estados globales para guardar tus personajes
            favoritos usando Redux, y haciendo peticiones asíncronas a un
            backend para almacenar los favoritos. También se pueden ordenar los
            favoritos en ascendente o descendente y por género.
          </p>
        </div>
        <video
          src={myVideo}
          controls
          className="w-1/2 rounded-2xl"
        />
      </article>
    </section>
  );
};

export default MyProyects;
