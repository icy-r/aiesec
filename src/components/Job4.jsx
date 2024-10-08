import React, { useState } from 'react';

function TabContent({ activeTab }) {
  switch (activeTab) {
    case 'description':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Job Description</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Prepare the Partnership Development plan and timeline</li>
            <li>Prepare PD packages and proposals</li>
            <li>Research and analyze the potential sectors and companies</li>
            <li>Guide the OC to execute PD plan according to the timeline</li>
            <li>Carry out negotiations with the companies for the final deliverables</li>
            <li>Prepare MOUs with the help of OCVP finance and deliver AIESEC responsibilities to the partners</li>
            <li>Collect amounts due from the partners after the event</li>
            <li>Responsible for all the tasks that are allocated by the OCP</li>
          </ul>
        </div>
      );
    case 'outcomes':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Learning Outcomes</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Gain corporate exposure</li>
            <li>Gain experience and knowledge about market research</li>
            <li>Develop professional skills and negotiation skills</li>
            <li>Hands-on experience in sales</li>
            <li>Develop partnership delivery skills</li>
          </ul>
        </div>
      );
    case 'kpi':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">KPI / MoS</h3>
          <ul className="text-white text-lg space-y-4">
            <li># of partners raised</li>
            <li>Overall success of the event</li>
            <li>% of PD raise out of cost</li>
            <li># of company meetings arranged</li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}

function Job4() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="flex flex-col md:min-w-full items-center py-8 px-4 md:px-8">
      <div className="flex md:gap-3 justify-center flex-grow w-full">
        <div className="text-white text-4xl font-extrabold mb-6">
          OCVP Partnership Development x4
        </div>
        <div>
        <button
            className="bg-blue-500 hover:shadow-xl transition duration-300 hover:scale-105 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
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

export default Job4;
