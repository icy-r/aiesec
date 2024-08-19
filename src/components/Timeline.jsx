import React, { Component, useState } from "react";
import { ConfigProvider, Timeline } from "antd";
import ct66Image from "../assets/ct66.jpg";

const Ftime = () => {
  const [mode, setMode] = useState("left");

  const globalTokens = {
    token: {
      color: "black",
      fontFamily: "Arial",
      fontSize: "16px",
      fontWeight: "normal",
      
    },
    components: {
      Timeline: {
        tailWidth: "3px",
        tailColor: "#f0f0f0",
      },
    },
  };

  return (
    <div className="mx-auto h-screen p-6 md:mb-6 flex flex-col-reverse md:flex-row-reverse items-center justify-center w-full">
      <div>
        <ConfigProvider theme={globalTokens}>
          <Timeline
            className="w-full" // Full width
            mode={mode}
            items={[
              {
                label: "16th of August 2024",
                children: "Application Open",
                color: "#1677ff", // Custom dot color
              },
              {
                label: "23rd of August 2024",
                children: "Organizing Committee President Application Deadline",
                color: "#ff4d4f",
              },
              {
                label:
                  "Organizing Committee Vice President Application Deadline",
                children: "23rd of August  2024",
                color: "#ff4d4f",
              },
            ]}
          />
        </ConfigProvider>
      </div>
      <div className="imagevw hidden md:flex  max-h-screen max-w-2xl m-4 p-8 text-left">
        <img
          src={ct66Image}
          alt="image"
          className="rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 max-h-screen"
        />
      </div>
    </div>
  );
};

export default Ftime;
