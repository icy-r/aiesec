import React from 'react';

function Alljob() {
  /*
  Team Structure
  OCP x1
  OCVP Delegate Experience x2
  OCVP MKT x3
  OCVP PD x3
  OCVP Finance x1
  OCVP Logistics x3
  OCVP web developing x1
  OCVP PR x2
  */

  const jobs = [
    { title: 'OCP', count: 1 },
    { title: 'OCVP Delegate Experience', count: 2 },
    { title: 'OCVP MKT', count: 3 },
    { title: 'OCVP PD', count: 3 },
    { title: 'OCVP Finance', count: 1 },
    { title: 'OCVP Logistics', count: 3 },
    { title: 'OCVP Web Development', count: 1 },
    { title: 'OCVP PR', count: 2 },
  ];

  const JobCard = ({ title, count }) => (
    <div className='bg-gray-800 flex gap-4
     p-6 rounded-lg shadow-lg w-full max-w-sm text-center'>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-lg text-gray-400'>x{count}</p>
    </div>
  );

  return (
    <div className="text-white min-h-screen flex flex-col items-center py-12 px-4">
      <h2 className="text-4xl font-extrabold mb-8 text-center">Team Structure</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} title={job.title} count={job.count} />
        ))}
      </div>
    </div>
  );
}

export default Alljob;
