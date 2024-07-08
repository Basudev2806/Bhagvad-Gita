import React, { useState } from "react";
import hanumanChalisa from "../../data/hanuman_chalisa.json";
import "./HanumanChalisa.css";

const HanumanChalisa = () => {
  const [activeTab, setActiveTab] = useState("Hindi");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="hanuman-chalisa-container">
      <h1>Hanuman Chalisa</h1>
      <div className="tab-navigation">
        <div
          className={`tab ${activeTab === "Hindi" ? "active" : ""}`}
          onClick={() => handleTabClick("Hindi")}
        >
          Hindi
        </div>
        <div
          className={`tab ${activeTab === "English" ? "active" : ""}`}
          onClick={() => handleTabClick("English")}
        >
          English
        </div>
      </div>
      <div className="chalisa-text">
        <pre>
          {activeTab === "Hindi" ? hanumanChalisa[0].hindi : hanumanChalisa[0].english}
        </pre>
      </div>
    </div>
  );
};

export default HanumanChalisa;