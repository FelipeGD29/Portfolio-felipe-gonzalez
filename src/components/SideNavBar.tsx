const SideNavBar = () => {
  return (
    <aside className="flex flex-col h-1/2 w-[150px] rounded-2xl border-2 border-teal-800">
      <button
        onClick={() => {
          const projectsSection = document.getElementById("proyectos-section");
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Proyectos
      </button>
      <button onClick={()=>{}}>Conocimientos</button>
      <button onClick={()=>{}}>Contáctame</button>
    </aside>
  );
};

export default SideNavBar;
