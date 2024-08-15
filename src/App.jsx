import React from 'react';
import Header from './components/Header';
import Alljob from './components/Alljob';
import Job1 from './components/Job1';
import Job2 from './components/Job2';
import Job3 from './components/Job3';
import Job4 from './components/Job4';
import Job5 from './components/Job5';
import Job6 from './components/Job6';
import Job7 from './components/Job7';
import Job8 from './components/Job8';
import New1 from './components/New1';
import AnimatedSection from './components/AnimatedSection'; // Import the new component
import Ftime from './components/Timeline';

function App() {
  return (
    <>
      <Header />
      <div className=' flex items-center justify-center flex-col'>
        <AnimatedSection>
          <New1 />
        </AnimatedSection>
        <AnimatedSection>
          <Ftime />
        </AnimatedSection>
        <AnimatedSection>
          <Alljob />
        </AnimatedSection>
        <AnimatedSection>
          <Job1 />
        </AnimatedSection>
        <AnimatedSection>
          <Job2 />
        </AnimatedSection>
        <AnimatedSection>
          <Job3 />
        </AnimatedSection>
        <AnimatedSection>
          <Job4 />
        </AnimatedSection>
        <AnimatedSection>
          <Job5 />
        </AnimatedSection>
        <AnimatedSection>
          <Job6 />
        </AnimatedSection>
        <AnimatedSection>
          <Job7 />
        </AnimatedSection>
        <AnimatedSection>
          <Job8 />
        </AnimatedSection>
      </div>
    </>
  );
}

export default App;
