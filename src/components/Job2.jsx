import React, { useState } from 'react';

function TabContent({ activeTab }) {
  switch (activeTab) {
    case 'description':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Job Description</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Prepare delegates servicing requirement list and timeline</li>
            <li>Prepare and send out delegate mailers</li>
            <li>Delegate communication</li>
            <li>Synergize with MKT VP’s to create delegate attraction campaigns</li>
            <li>Manage delegate registrations</li>
            <li>Facilitate delegate requirements during the event</li>
            <li>Ensuring the successful departure of delegates</li>
            <li>Managing all issues and conflicts regarding delegates</li>
            <li>Responsible for all the tasks that are allocated by the OCP surveys</li>
          </ul>
        </div>
      );
    case 'experience':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Experience</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Event management skills</li>
            <li>Skill of using tools and trackers</li>
            <li>Team management skills</li>
            <li>Time management skills</li>
            <li>Communication skills</li>
            <li>Experience in event management and coordination</li>
            <li>Ideas generator, creative approach</li>
            <li>Strategic planning ability</li>
            <li>Experience in attention to detail and working under pressure</li>
          </ul>
        </div>
      );
    case 'kpi':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">KPI / MoS</h3>
          <ul className="text-white text-lg space-y-4">
            <li># of complaints from delegates</li>
            <li>Feedbacks from delegation</li>
            <li># of delegate registrations</li>
            <li>Seamless process</li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}

function Job2() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="flex flex-col items-center py-8 px-4 md:px-8">
      <h2 className="text-white text-4xl font-extrabold mb-6">
        OCVP Delegate Experience x2
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
            className={`w-1/3 py-4 text-center text-white text-lg font-semibold ${activeTab === 'experience' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
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

export default Job2;
