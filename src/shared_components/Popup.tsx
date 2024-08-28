import React from "react";

interface IPopup {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}
const Popup: React.FC<IPopup> = ({ isOpen, title, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center border bg-opacity-50">
      <div className="p-4 rounded-lg w-[25%] h-[30%] text-lg bg-transparent backdrop:fill-transparent backdrop-blur-md border border-gray-300">
        {title && (
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          </div>
        )}
        <hr className="bg-orange-500" />
        <div className="flex items-center justify-center mt-5">
          <p className="text-lg text-green-500 font-semibold">
            Sales will start soon!
          </p>
        </div>
        <div className="flex items-center justify-center mt-5">
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 border border-yellow-500 hover:text-white rounded hover:bg-yellow-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
