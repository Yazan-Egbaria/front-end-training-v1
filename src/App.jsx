import { useState } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFunction, setActiveFunction] = useState(null);
  const [rectangles, setRectangles] = useState([]);

  const handleAdd = () => {
    const rectangle = {
      id: Math.floor(Math.random() * 100 + 1),
      x: 1,
      y: 2,
      length: 3,
      color: 4,
    };
    rectangles.push(rectangle);

    setRectangles([...rectangles, rectangle]);
  };

  const handleUpdate = () => {};
  const handleDelete = () => {};

  return (
    <>
      <Navbar
        setIsModalOpen={setIsModalOpen}
        setActiveFunction={setActiveFunction}
        activeFunction={activeFunction}
      />

      <Container
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        activeFunction={activeFunction}
        rectangles={rectangles}
      />
    </>
  );
}
