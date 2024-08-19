import React, { useState } from 'react';

function TabContent({ activeTab }) {
  switch (activeTab) {
    case 'description':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Job Description</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Oversee the creation, development, and maintenance of the event's official website</li>
            <li>Collaboration with Event Managers</li>
            <li>User Experience (UX) Optimization</li>
            <li>Oversee the timely updating of website content, including promotions, schedules, and delegate information</li>
            <li>Ensure that all web functionalities, such as registration forms, payment gateways, and feedback forms, are properly integrated and functioning smoothly</li>
            <li>Collaborate with the marketing team to ensure web-based promotions are on time and that the website is effectively integrated with other promotional channels</li>
            <li>Conduct risk analysis related to web development and user data, ensuring the website is secure and compliant with all relevant regulations</li>
            <li>Submit regular reports on web development progress, challenges, and outcomes to the Organizing Committee President (OCP)</li>
          </ul>
        </div>
      );
    case 'outcomes':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Learning Outcomes</h3>
          <ul className="text-white text-lg space-y-4">
            <li>Web Development & Design Skills</li>
            <li>Project Management Skills</li>
            <li>Content Management & SEO Skills</li>
            <li>Risk Management</li>
          </ul>
        </div>
      );
    case 'kpi':
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">KPI / MoS</h3>
          <ul className="text-white text-lg space-y-4">
            <li># of Website Visitors</li>
            <li>% of Deadlines Met</li>
            <li># of Functional Integrations</li>
            <li>User Feedback Rating</li>
            <li>Zero Technical Issues During Event</li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}

function Job8() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="flex flex-col md:min-w-full items-center py-8 px-4 md:px-8">
      <div className="flex md:gap-3 justify-center flex-grow w-full">
        <div className="text-white text-4xl font-extrabold mb-6">
          OCVP Web Development x1
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

      {/* Adjusted the width by adding max-w-4xl */}
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
            className={`w-1/3 py-4 text-center text-white text-lg font-semibold ${activeTab === 'outcomes' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setActiveTab('outcomes')}
            aria-selected={activeTab === 'outcomes'}
          >
            Learning Outcomes
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

export default Job8;
