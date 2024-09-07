import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const AddImagePopup = ({ onClose, onAddImage }) => {
  const [imageURL, setImageURL] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleAdd = () => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onAddImage(reader.result);
      };
      reader.readAsDataURL(imageFile);
    } else if (imageURL) {
      onAddImage(imageURL);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-gradient-to-b from-[#4A4E54] to-[#363C43] px-4 py-4 lg:px-6 lg:py-8 rounded-lg shadow-2xl w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Add Image</h2>
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          placeholder="Enter image URL"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg bg-transparent outline-none"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg bg-transparent outline-none cursor-pointer"
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-3xl opacity-70 hover:opacity-100 transition-all ease-in duration-200 active:scale-125"
        >
          <IoClose />
        </button>
        <div className="flex justify-end mt-2">
          <button
            onClick={handleAdd}
            className="py-2 px-8 bg-gradient-to-t from-[#272728] to-[#96BEE710] text-white rounded-md shadow-2xl shadow-black transition-all ease-in duration-200 active:scale-125"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddImagePopup;
