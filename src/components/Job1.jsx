import React, { useState } from "react";

function TabContent({ activeTab }) {
  switch (activeTab) {
    case "description":
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">
            Job Description
          </h3>
          <ul className="text-white text-lg space-y-4">
            <li>Uphold team standards, manage and track the OC.</li>
            <li>Lead the regular team meetings.</li>
            <li>Timeline management.</li>
            <li>Working with event managers to achieve event objectives.</li>
            <li>
              Guide the OC to fulfill ER and logistics requirements of the
              event.
            </li>
            <li>
              Ensure on-time promotions and communication between delegates and
              OC.
            </li>
            <li>
              Guide OC to deliver a good service to facilitators and delegates.
            </li>
            <li>Ensure sustainability of the event.</li>
            <li>Conduct risk analysis and manage the event accordingly.</li>
            <li>Submit the OC and Event Report.</li>
            <li>
              Ensure marketing materials are ready & the calendar is booked the
              day before posting.
            </li>
          </ul>
        </div>
      );
    case "outcomes":
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">
            Learning Outcomes
          </h3>
          <ul className="text-white text-lg space-y-4">
            <li>Event management skills</li>
            <li>Team management skills</li>
            <li>Finance management of an event</li>
            <li>Project progress tracking skills</li>
            <li>Partnership management skills</li>
          </ul>
        </div>
      );
    case "kpi":
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">KPI / MoS</h3>
          <ul className="text-white text-lg space-y-4">
            <li># of Delegates</li>
            <li>% of Sustainability of the event</li>
            <li>% of Time Management for Deadlines</li>
            <li># of monetary & non-monetary raisings</li>
            <li># of partnerships</li>
            <li>Zero complaints & Feedbacks from delegates</li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}

function Job1() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="flex flex-col md:min-w-full items-center justify-center py-8 px-4 md:px-8">
      <div className="flex md:gap-3 justify-around flex-grow w-full">
        <div className="text-white text-4xl font-extrabold mb-6">
          Organizing Committee President x1
        </div>
        <div>
        <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() =>
              (window.location.href = "https://forms.gle/Mhqez7JrPM4iQE9A9" )
            }
          >
            Apply Now
          </button>
        </div>
      </div>
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-auto">
        <div className="flex border-b border-gray-700">
          <button
            className={`w-1/3 py-4 text-center text-white text-lg font-semibold ${
              activeTab === "description" ? "bg-gray-700" : "bg-gray-800"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Job Description
          </button>
          <button
            className={`w-1/3 py-4 text-center text-white text-lg font-semibold ${
              activeTab === "outcomes" ? "bg-gray-700" : "bg-gray-800"
            }`}
            onClick={() => setActiveTab("outcomes")}
          >
            Learning Outcomes
          </button>
          <button
            className={`w-1/3 py-4 text-center text-white text-lg font-semibold ${
              activeTab === "kpi" ? "bg-gray-700" : "bg-gray-800"
            }`}
            onClick={() => setActiveTab("kpi")}
          >
            KPI / MoS
          </button>
        </div>
        <div className="p-6">
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default Job1;
