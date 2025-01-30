import Modal from "./Modal";
import Input from "./Input";

const Container = ({
  isModalOpen,
  setIsModalOpen,
  activeFunction,
  rectangles,
}) => {
  const addInputs = ["ID", "X", "Y", "Length", "Color"];
  const updateInputs = ["ID", "X", "Y"];
  const deleteInputs = ["ID"];
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-heightMinusNav w-full">
      {isModalOpen && (
        <Modal handleCloseModal={handleCloseModal}>
          {activeFunction === "add" &&
            addInputs.map((label, index) => (
              <Input key={index} label={label} />
            ))}
          {activeFunction === "update" &&
            updateInputs.map((label, index) => (
              <Input key={index} label={label} />
            ))}
          {activeFunction === "delete" &&
            deleteInputs.map((label, index) => (
              <Input key={index} label={label} />
            ))}
        </Modal>
      )}

      {rectangles.map((rectangle) => {
        return (
          <div
            key={rectangle.id}
            className={`absolute ${rectangle.x} ${rectangle.y} ${rectangle.color} ${rectangle.length} `}
          >
            {rectangle.id}
          </div>
        );
      })}
    </div>
  );
};

export default Container;
