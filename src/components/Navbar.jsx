const Navbar = () => {
  const links = [
    {
      id: 0,
      text: "Add",
    },
    {
      id: 0,
      text: "Update",
    },
    {
      id: 0,
      text: "Delete",
    },
    {
      id: 0,
      text: "Undo",
    },
    {
      id: 0,
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
          >
            {link.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
