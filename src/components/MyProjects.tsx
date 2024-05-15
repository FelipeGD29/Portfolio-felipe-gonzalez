import myWorld from "../assets/myWorld.png";
import myVideo from "../assets/myVideo.webm";
import ClimbTVideo from "../assets/ClimbTVideo.mp4";

const MyProyects = () => {
  return (
    <section
      id="myProjects-section"
      className="2xl:m-20 xl:m-20 lg:m-10 md:m-5 sm:my-60 sm:mb-5 flex flex-col 2xl:gap-36 xl:gap-30 lg:gap-20 md:gap-5"
    >
      <h2 className="myHeader text-3xl 2xl:-mb-14 xl:-mb-16 lg:-mb-16 md:mb-5 sm:mb-5">
        Mis proyectos
      </h2>
      <article className="bg-gradient-to-b from-red to-purple flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse gap-5 rounded-2xl border-4 p-5">
        <div>
          <h2 className="text-2xl underline text-black hover:text-purple transition-colors duration-500">
            Climb T website
          </h2>
          <p>
            Climb T necesitaba actualizar su sitio web con un diseño más moderno
            y motivador, capaz de inspirar a sus clientes a alcanzar el éxito en
            sus negocios. Esto incluía asegurarse de que el diseño fuera
            receptivo y atractivo.
          </p>
          <p>
            Me encargué de diseñar la estructura del sitio, seleccionando
            cuidadosamente las imágenes y mensajes para transmitir de manera
            precisa, visual y efectiva la visión de la empresa.
          </p>
          <p>
            Además, desarrollé diseños responsivos adaptados a diversos tamaños
            de pantalla, garantizando una experiencia óptima para los usuarios
            en cualquier dispositivo.
          </p>
        </div>
        <video
          src={ClimbTVideo}
          controls
          className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 rounded-2xl"
        />
      </article>

      <article className="bg-gradient-to-b from-red to-purple flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-5 rounded-2xl border-4 p-5">
        <a
          href="https://myworld-72wn.onrender.com"
          className="relative group w-1/2 md:w-full sm:w-full"
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
        <div className="w-1/2 md:w-full sm:w-full">
          <a
            href="https://myworld-72wn.onrender.com"
            className="text-2xl underline text-black hover:text-purple transition-colors duration-500"
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

      <article className="bg-gradient-to-b from-red to-purple flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse gap-5 rounded-2xl border-4 p-5">
        <div>
          <h2 className="text-2xl underline text-black hover:text-purple transition-colors duration-500">
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
          className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 rounded-2xl"
        />
      </article>
    </section>
  );
};

export default MyProyects;
