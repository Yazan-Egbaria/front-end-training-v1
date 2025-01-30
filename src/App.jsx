import { useState } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFunction, setActiveFunction] = useState(null);
  const [rectangles, setRectangles] = useState([]);

  const handleAdd = (inputValues) => {
    const rectangle = {
      id: inputValues.ID,
      x: parseFloat(inputValues.X) || 0,
      y: parseFloat(inputValues.Y) || 0,
      length: parseFloat(inputValues.Length) || 100,
      color: inputValues.Color || "red",
    };

    setRectangles([...rectangles, rectangle]);
    setIsModalOpen(false);
  };

  const handleUpdate = (inputValues) => {
    setRectangles((prevRectangles) =>
      prevRectangles.map((rectangle) =>
        rectangle.id === inputValues.ID
          ? {
              ...rectangle,
              x: parseFloat(inputValues.X),
              y: parseFloat(inputValues.Y),
            }
          : rectangle,
      ),
    );
  };

  const handleDelete = (inputValues) => {
    setRectangles((prevRectangles) =>
      prevRectangles.filter((rectangle) => rectangle.id !== inputValues.ID),
    );
  };

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
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
}
