const Navbar = ({ setActiveFunction, setIsModalOpen, activeFunction }) => {
  const links = [
    {
      id: 0,
      text: "Add",
      function: () => setActiveFunction("add"),
    },
    {
      id: 1,
      text: "Update",
      function: () => setActiveFunction("update"),
    },
    {
      id: 2,
      text: "Delete",
      function: () => setActiveFunction("delete"),
    },
    {
      id: 3,
      text: "Undo",
    },
    {
      id: 4,
      text: "Redo",
    },
  ];
  return (
    <nav className="flex h-20 w-full items-center justify-center bg-white shadow">
      <ul className="flex items-center justify-center gap-4">
        {links.map((link) => (
          <li
            className="cursor-pointer rounded bg-cyan-500 px-4 py-2 text-white transition-all duration-300 hover:bg-cyan-400"
            key={link.id}
            onClick={() => {
              if (link.function) {
                link.function();
                setIsModalOpen(true);
              }
              console.log(activeFunction);
            }}
          >
            {link.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
