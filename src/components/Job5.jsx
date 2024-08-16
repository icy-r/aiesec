import React, { useState } from 'react';

function TabContent({ activeTab }) {
  switch (activeTab) {
    case 'description':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Job Description</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Preparing event budget</li>
            <li>Collecting and documenting all the supporting documents</li>
            <li>Responsible for budget execution</li>
            <li>Expenses and partnership tracking</li>
            <li>Ensure partnership delivery</li>
            <li>Preparing final finance report</li>
            <li>Cash Flow management of the event</li>
            <li>Understanding and addressing synergy points with other positions as required</li>
            <li>Performing additional duties related to the project set out by the OCP</li>
          </ul>
        </div>
      );
    case 'outcomes':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Learning Outcomes</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Event management skills</li>
            <li>Skill of using tools and trackers</li>
            <li>Finance management of an event</li>
            <li>Budgeting and Reporting skills</li>
          </ul>
        </div>
      );
    case 'kpi':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">KPI / MoS</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Sustainability of the event</li>
            <li>On-time partnership deposits</li>
            <li>Successful audit review</li>
            <li>Minimal deviation from the budget</li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}

function Job5() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="flex flex-col md:min-w-full items-center py-8 px-4 md:px-8">
      <div className="flex md:gap-3 justify-around flex-grow w-full">
        <div className="text-white text-4xl font-extrabold mb-6">
          OCVP Finance x1
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
            className={`w-1/3 py-4 text-center text-white text-lg font-semibold ${activeTab === 'description' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setActiveTab('description')}
          >
            Job Description
          </button>
          <button
            className={`w-1/3 py-4 text-center text-white text-lg font-semibold ${activeTab === 'outcomes' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setActiveTab('outcomes')}
          >
            Learning Outcomes
          </button>
          <button
            className={`w-1/3 py-4 text-center text-white text-lg font-semibold ${activeTab === 'kpi' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setActiveTab('kpi')}
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

export default Job5;
