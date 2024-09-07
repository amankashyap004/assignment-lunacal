import React from "react";
import "./App.css";
import TabWidget from "./components/TabWidget";
import GalleryWidget from "./components/GalleryWidget";
import CustomContainer from "./components/CustomContainer";

function App() {
  return (
    <main className="flex justify-center items-center w-full font-poppins">
      <div className="container px-4 lg:px-20 flex flex-col justify-center items-center w-full lg:w-3/4 gap-4 lg:gap-8 py-10 lg:py-20">
        <CustomContainer>
          <TabWidget />
        </CustomContainer>
        <div className="bg-gradient-to-b from-[#282828] to-[#F8F8F8] w-5/6 h-1 rounded-full opacity-20"></div>
        <CustomContainer>
          <GalleryWidget />
        </CustomContainer>
        <div className="bg-gradient-to-b from-[#282828] to-[#F8F8F8] w-5/6 h-1 rounded-full opacity-20"></div>
      </div>
    </main>
  );
}

export default App;
