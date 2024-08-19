import React, { useState } from 'react';

function TabContent({ activeTab }) {
  switch (activeTab) {
    case 'description':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Job Description</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Planning event marketing timeline</li>
            <li>Creating and implementing marketing strategies</li>
            <li>Increasing virtual outreach through various platforms</li>
            <li>Creating digital marketing materials & tools</li>
            <li>AIESEC brand alignment and coordination</li>
            <li>Collect content for showcasing</li>
            <li>Understanding and addressing synergy points with other positions as required</li>
            <li>Follow up with the Agenda</li>
            <li>Manage the Facebook event page</li>
            <li>Perform additional duties related to the project set out by the OCP</li>
          </ul>
        </div>
      );
    case 'outcomes':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Learning Outcomes</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Gain marketing skills</li>
            <li>Experience in event organizing and promotion</li>
            <li>Develop professional skills and creative skills</li>
            <li>Hands-on experience in product development and sales</li>
            <li>Communication and negotiation skills</li>
          </ul>
        </div>
      );
    case 'kpi':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">KPI / MoS</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Proper promotion plan</li>
            <li>0 issues in projector controlling during the event</li>
            <li>Good delegate involvement in the online campaign</li>
            <li>Impact showcased through Digital Platforms</li>
            <li>0 Branding violations</li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}

function Job3() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="flex flex-col md:min-w-full items-center py-8 px-4 md:px-8">
      <div className="flex md:gap-3 justify-center flex-grow w-full">
        <div className="text-white text-4xl font-extrabold mb-6">
          OCVP Marketing x3
        </div>
        <div>
        <button
            className="bg-blue-500 text-white hover:shadow-xl transition duration-300 hover:scale-105 px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
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

export default Job3;
