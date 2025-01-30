import Modal from "./Modal";
import Input from "./Input";
import { useState, useEffect } from "react";

const Container = ({
  isModalOpen,
  setIsModalOpen,
  activeFunction,
  rectangles,
  handleAdd,
  handleDelete,
  handleUpdate,
}) => {
  const [inputValues, setInputValues] = useState({
    ID: Math.floor(Math.random() * 100 + 1),
    X: 0,
    Y: 0,
    Length: 100,
    Color: "red",
  });

  useEffect(() => {
    if (isModalOpen && activeFunction === "add") {
      setInputValues({
        ID: Math.floor(Math.random() * 100 + 1),
        X: 0,
        Y: 0,
        Length: 100,
        Color: "red",
      });
    }
  }, [isModalOpen, activeFunction]);

  const inputs = {
    add: ["ID", "X", "Y", "Length", "Color"],
    update: ["ID", "X", "Y"],
    delete: ["ID"],
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (label, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [label]: value,
    }));
  };

  const handleSubmit = () => {
    if (activeFunction === "add") {
      handleAdd(inputValues);
    }
    if (activeFunction === "update") {
      handleUpdate(inputValues);
    }
    if (activeFunction === "delete") {
      handleDelete(inputValues);
    }
    handleCloseModal();
  };

  return (
    <div className="relative min-h-heightMinusNav w-full">
      {isModalOpen && (
        <Modal handleCloseModal={handleCloseModal} handleSubmit={handleSubmit}>
          {inputs[activeFunction]?.map((label, index) => (
            <Input
              key={index}
              label={label}
              value={inputValues[label] || ""}
              onChange={handleInputChange}
            />
          ))}
        </Modal>
      )}

      {rectangles.map((rectangle) => {
        return (
          <div
            key={rectangle.id}
            className="absolute flex items-center justify-center font-bold"
            style={{
              left: rectangle.x,
              top: rectangle.y,
              backgroundColor: rectangle.color,
              width: rectangle.length,
              height: rectangle.length,
            }}
          >
            {rectangle.id}
          </div>
        );
      })}
    </div>
  );
};

export default Container;
