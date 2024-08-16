import React, { useState } from 'react';

function TabContent({ activeTab }) {
  switch (activeTab) {
    case 'description':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Job Description</h3>
          <ul className="text-white space-y-4">
            <li>Research and develop the sessions</li>
            <li>Create sub-sessions and events on the project</li>
            <li>Find session partners and speakers</li>
            <li>Create and be responsible for the agendas</li>
            <li>Agenda and speakers responsibility for main event</li>
            <li>Public figures handling</li>
            <li>Course content development</li>
            <li>Deliver the course content</li>
            <li>Understanding and addressing synergy points with other positions as required</li>
            <li>Develop and design any required surveys</li>
            <li>Session streamlining and event flow management collaborating with Delegates VP’s</li>
          </ul>
        </div>
      );
    case 'skills':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Skills and Knowledge</h3>
          <ul className="text-white space-y-4">
            <li>Planning skills</li>
            <li>Event management skills</li>
            <li>Critical thinking</li>
            <li>Event creation skills</li>
            <li>Platform management skills</li>
            <li>Campaign management skills</li>
            <li>Time management skills</li>
          </ul>
        </div>
      );
    case 'kpi':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">KPI / MoS</h3>
          <ul className="text-white space-y-4">
            <li>0 partners & speakers errors & complaints</li>
            <li># of delegates</li>
            <li>Flow of project according to agenda</li>
            <li>Feedback from delegates</li>
            <li>Feedback from facilitators</li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}

function Job7() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="flex flex-col md:min-w-full items-center py-8 px-4 md:px-8">
      <div className="flex md:gap-3 justify-around flex-grow w-full">
        <div className="text-white text-4xl font-extrabold mb-6">
          OCVP PR x2
        </div>
        <div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Apply Now
          </button>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-auto">
        <div className="flex border-b border-gray-700">
          <button
            className={`w-1/3 py-4 text-center text-white text-lg font-semibold ${activeTab === 'description' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setActiveTab('description')}
            aria-selected={activeTab === 'description'}
          >
            Job Description
          </button>
          <button
            className={`w-1/3 py-4 text-center text-white text-lg font-semibold ${activeTab === 'skills' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setActiveTab('skills')}
            aria-selected={activeTab === 'skills'}
          >
            Skills and Knowledge
          </button>
          <button
            className={`w-1/3 py-4 text-center text-white text-lg font-semibold ${activeTab === 'kpi' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setActiveTab('kpi')}
            aria-selected={activeTab === 'kpi'}
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

export default Job7;
