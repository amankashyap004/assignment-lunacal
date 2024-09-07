import React, { useState } from "react";

const TabWidget = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    {
      id: "about",
      label: "About Me",
      content: [
        "Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.",
        "I was born and raised in Albany, NY, & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. tortor. Mauris egestas, velit a auctor laoreet, nunc nisi vestibulum magna, nec",
      ],
    },
    {
      id: "experiences",
      label: "Experiences",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.",
      ],
    },
    {
      id: "recommended",
      label: "Recommended",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Nam nec facilisis tortor. Mauris egestas, velit a auctor laoreet, nunc nisi vestibulum magna, nec venenatis nunc magna eget risus. Integer ac semper ligula, ut pharetra urna. Nullam non tristique orci.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Curabitur nec tellus ut lacus fringilla viverra. Suspendisse potenti. Integer commodo enim sit amet justo condimentum, id faucibus felis tincidunt.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-start items-start w-full gap-4 lg:gap-8">
      <div className="bg-[#171717] rounded-md lg:rounded-full w-full p-2 lg:p-1 flex flex-col lg:flex-row justify-between">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`py-3 px-4  lg:w-1/3 ${
              activeTab === tab.id
                ? "bg-gradient-to-b from-[#27272850] to-[#96BEE720] bg-opacity-20 text-white rounded-md lg:rounded-full shadow-2xl shadow-black"
                : "bg-transparent text-[#A3ADB2]"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-[#969696] space-y-2 max-h-40 overflow-y-scroll">
        {tabs
          .find((tab) => tab.id === activeTab)
          ?.content.map((paragraph, index) => (
            <p key={index} className="font-plusJakartaSans">
              {paragraph}
            </p>
          ))}
      </div>
    </div>
  );
};

export default TabWidget;
