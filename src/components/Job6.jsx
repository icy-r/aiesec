import React, { useState } from 'react';

function TabContent({ activeTab }) {
  switch (activeTab) {
    case 'description':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Job Description</h3>
          <ul className="text-white text-lg space-y-4 text-wrap">
            <li>Responsible for finding a suitable venue and venue management</li>
            <li>Responsible for all logistic requirements before and within the project</li>
            <li>Responsible for in-project event management</li>
            <li>Responsible for taking an innovative approach in logistic supply and management</li>
            <li>Responsible for printing and supplying merchandise</li>
            <li>Responsible for technical operations of the event</li>
            <li>Understanding and addressing synergy points with other positions as required</li>
            <li>Attending all virtual and physical meetings and presenting updates on logistics and events</li>
          </ul>
        </div>
      );
    case 'outcomes':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Learning Outcomes</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Experience in event organizing and promotion</li>
            <li>Inventory management skill</li>
            <li>Communication skills</li>
            <li>Proper partnership delivery skills</li>
            <li>Flexibility & adaptability</li>
          </ul>
        </div>
      );
    case 'kpi':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">KPI / MoS</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Feedback on in-project events</li>
            <li>A venue for an affordable price</li>
            <li>Zero complaints on logistic management</li>
            <li>Feedback from facilitators</li>
            <li>Feedback from delegates</li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}

function Job6() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="flex flex-col md:min-w-full items-center py-8 px-4 md:px-8">
      <h2 className="text-white text-4xl font-extrabold mb-6">
        OCVP Logistics & Events x3
      </h2>

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

export default Job6;
