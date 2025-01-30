const Modal = ({ children, handleCloseModal, handleSubmit }) => {
  return (
    <div className="absolute left-1/2 top-1/2 flex h-[500px] w-96 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-4 rounded bg-cyan-500 px-4">
      <span
        className="cursor-pointer rounded bg-white px-2 py-1 font-bold text-cyan-500 transition-all duration-300 hover:text-cyan-400"
        onClick={handleCloseModal}
      >
        X
      </span>

      {children}

      <button
        className="rounded bg-white px-2 py-1 font-bold text-cyan-500 transition-all duration-300 hover:text-cyan-400"
        onClick={handleSubmit}
      >
        Ok
      </button>
    </div>
  );
};

export default Modal;
