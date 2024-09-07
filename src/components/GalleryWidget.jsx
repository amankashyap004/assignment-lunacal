import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddImagePopup from "./AddImagePopup";

const GalleryWidget = () => {
  const [images, setImages] = useState([
    "./default1.png",
    "./default1.png",
    "./default1.png",
    "./default1.png",
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editingImageIndex, setEditingImageIndex] = useState(null);
  const swiperRef = useRef(null);

  const handleAddImage = (image) => {
    if (editingImageIndex !== null) {
      const updatedImages = [...images];
      updatedImages[editingImageIndex] = image;
      setImages(updatedImages);
      setEditingImageIndex(null);
    } else {
      setImages([...images, image]);
    }
  };

  const handleDeleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleEditImage = (index) => {
    setEditingImageIndex(index);
    setIsPopupOpen(true);
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="space-y-4 lg:space-y-8">
      <section className="flex flex-col lg:flex-row justify-between items-center w-full gap-4">
        <div className="bg-[#171717] text-white shadow rounded-2xl px-8 py-3">
          <p className="font-medium lg:text-lg">Gallery</p>
        </div>
        <div className="flex justify-center items-center gap-2 lg:gap-6">
          <div class="rounded-full shadow-[#ffffff50_-4px_-2px_20px_0px] transition-all ease-in duration-200 active:scale-125">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="flex justify-center items-center gap-1 uppercase font-semibold bg-white bg-opacity-5 rounded-full text-white px-6 py-4 text-nowrap shadow-[#000000_10px_10px_20px_0px]"
            >
              <IoAdd className="text-lg" />
              Add Image
            </button>
          </div>
          <div className="z-50">
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={handlePrev}
                className="flex justify-center items-center p-3 rounded-full text-[#6F787C]  bg-gradient-to-tl from-[#161718] to-[#303439] shadow-[#ffffff20_-4px_-4px_20px_0px] opacity-80 hover:opacity-100 text-lg transition-all ease-in duration-200 active:scale-125"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="flex justify-center items-center p-3 rounded-full text-[#6F787C] bg-gradient-to-tl from-[#161718] to-[#303439] shadow-[#ffffff20_-4px_-4px_20px_0px] opacity-80 hover:opacity-100 text-lg transition-all ease-in duration-200 active:scale-125"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative group">
              <img
                src={image}
                alt="Gallery Image"
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-8 right-8 flex justify-center items-center gap-1 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleEditImage(index)}
                  className="text-xl lg:text-2xl opacity-80 hover:opacity-100 transition-all ease-in duration-200 active:scale-125"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDeleteImage(index)}
                  className="text-xl lg:text-2xl opacity-80 hover:opacity-100 text-red-600 transition-all ease-in duration-200 active:scale-125"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isPopupOpen && (
        <AddImagePopup
          onClose={() => setIsPopupOpen(false)}
          onAddImage={handleAddImage}
        />
      )}
    </div>
  );
};

export default GalleryWidget;
