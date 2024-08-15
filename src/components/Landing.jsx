import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const backgroundImage = import ('../assets/bg1.webp');
const backgroundImagesStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Landing() {
  return (
    <div className="min-h-screen text-white flex flex-col space-y-20" 
    style={backgroundImagesStyle}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-dvh flex flex-col justify-center items-center text-center"
      >
        <motion.h1 variants={itemVariants} className="font-bold text-5xl">
          Benchmark 3.0
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl mt-5 w-11/12 text-center"
        >
          Benchmark 3.0 is a three-stage event aimed at advancing skills in
          UI/UX design. It starts with a hands-on bootcamp, followed by a
          hackathon where teams compete to create innovative UI/UX designs
          according to the given challenge. The event wraps up with a
          prototyping competition, where participants turn their designs into
          functional prototypes, demonstrating their ability to bring ideas to
          life.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="px-5 md:px-10 lg:px-20"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold">
          Team Structure
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="text-2xl mt-5 w-11/12 md:w-2/3 lg:w-1/2"
        >
          <motion.p variants={itemVariants} className="">
            <span className="font-bold">OCP:</span> x1
          </motion.p>
          <motion.p variants={itemVariants} className="">
            <span className="font-bold">OCVP Delegate Experience:</span> x2
          </motion.p>
          <motion.p variants={itemVariants} className="">
            <span className="font-bold">OCVP Marketing:</span> x3
          </motion.p>
          <motion.p variants={itemVariants} className="">
            <span className="font-bold">OCVP Partnership Development:</span> x3
          </motion.p>
          <motion.p variants={itemVariants} className="">
            <span className="font-bold">OCVP Finance:</span> x1
          </motion.p>
          <motion.p variants={itemVariants} className="">
            <span className="font-bold">OCVP Logistics:</span> x3
          </motion.p>
          <motion.p variants={itemVariants} className="">
            <span className="font-bold">OCVP Web Development:</span> x1
          </motion.p>
          <motion.p variants={itemVariants} className="">
            <span className="font-bold">OCVP PR:</span> x2
          </motion.p>
          <motion.p variants={itemVariants} className="">
            <span className="font-bold">Organizing Committee President:</span> x1
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="px-5 md:px-10 lg:px-20"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold">
          OCP
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="text-2xl mt-5 w-11/12 md:w-2/3 lg:w-1/2 space-y-3"
        >
          <motion.p variants={itemVariants} className="">
            <span className="font-bold">Job Description:</span>
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Uphold team standards, manage and track the OC.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Lead the regular team meetings.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Timeline management
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Working with event managers to achieve event objectives.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Guide the OC to fulfill ER and logistics requirements of the event.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Ensure on-time promotions and communication between delegates and OC.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Guide OC to deliver a good service to facilitators and delegates.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Ensure sustainability of the event.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Conducting risk analysis and managing the event accordingly.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Submitting the OC and Event Report.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Make sure that the marketing materials are ready & the calendar is booked the day before it is supposed to be posted.
          </motion.p>

          <motion.p variants={itemVariants} className="mt-5">
            <span className="font-bold">Learning Outcomes:</span>
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Event management skills
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Team management skills
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Finance management of an event
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Project progress tracking skills
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Partnership management skills
          </motion.p>

          <motion.p variants={itemVariants} className="mt-5">
            <span className="font-bold">KPI / MoS:</span>
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • # of Delegates
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • % of Sustainability of the event
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • % of Time Management for Deadlines
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • # of monetary & non-monetary raisings
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • # of partnerships
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Zero complaints & Feedbacks from delegates
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="px-5 md:px-10 lg:px-20"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold">
          OCVP Delegate Experience
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="text-2xl mt-5 w-11/12 md:w-2/3 lg:w-1/2 space-y-3"
        >
          <motion.p variants={itemVariants} className="">
            <span className="font-bold">Job Description:</span>
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Prepare delegates servicing requirement list and timeline
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Prepare and send out delegate mailers
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Delegate communication
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Synergize with MKT VP&apos;s to create delegate attraction campaigns
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Manage delegate registrations
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Facilitate delegate requirements during the event
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Ensuring the successful departure of delegates.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Managing all issues and conflicts regarding delegates.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Responsible for all the tasks that are allocated by the OCP surveys
          </motion.p>

          <motion.p variants={itemVariants} className="mt-5">
            <span className="font-bold">Learning Outcomes:</span>
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Event management skills
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Skill of using tools and trackers
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Team management skills
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Time management skills
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Communication skills
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Experience in event management and coordination.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Ideas generator, creative approach.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Strategic planning ability
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Experience in attention to detail and working under pressure.
          </motion.p>

          <motion.p variants={itemVariants} className="mt-5">
            <span className="font-bold">KPI / MoS:</span>
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • # of complaints from delegates
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Feedbacks from delegation
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • # of delegate registrations
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Seamless process
          </motion.p>
        </motion.div>
      </motion.div>

      {/* OCVP Marketing */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="px-5 md:px-10 lg:px-20"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold">
          OCVP Marketing
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="text-2xl mt-5 w-11/12 md:w-2/3 lg:w-1/2 space-y-3"
        >
          <motion.p variants={itemVariants} className="">
            <span className="font-bold">Job Description:</span>
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Planning event marketing timeline.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Creating and implementing marketing strategies.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Increasing virtual outreach through various platforms.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Creating digital marketing materials & tools.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • AIESEC brand alignment and coordination
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Collect content for showcasing.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Understanding and addressing synergy points with other positions as required.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Follow up with the Agenda.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Manage the Facebook event page.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Performing additional duties related to the project set out by the OCP.
          </motion.p>

          <motion.p variants={itemVariants} className="mt-5">
            <span className="font-bold">Learning Outcomes:</span>
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Gain marketing skills
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Experience in event organizing and promotion
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Develop professional skills and creative skills
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Hands-on experience in product development and sales
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Communication and negotiation skills
          </motion.p>

          <motion.p variants={itemVariants} className="mt-5">
            <span className="font-bold">KPI / MoS:</span>
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Proper promotion plan.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • 0 issues in projector controlling during the event.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Good delegate involvement in the online campaign.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • Impact showcased through Digital Platforms.
          </motion.p>
          <motion.p variants={itemVariants} className="">
            • 0 Branding violations
          </motion.p>
        </motion.div>
      </motion.div>

      {/* OCVP Partnership Development */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="px-5 md:px-10 lg:px-20"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold">
          OCVP Partnership Development
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="text-2xl mt-5 w-11/12 md:w-2/3 lg:w-1/2 space-y-3"
        >
        <motion.p variants={itemVariants} className="">
          <span className="font-bold">Job Description:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Prepare the Partnership Development plan and timeline
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Prepare PD packages and proposals
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Research and analyze the potential sectors and companies
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Guide the OC to execute PD plan according to the timeline
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Carry out negotiations with the companies for the final deliverables
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Prepare MOUs with the help of OCVP finance and deliver AIESEC responsibilities to the partners
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Collect amounts due from the partners after the event
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Responsible for all the tasks that are allocated by the OCP
        </motion.p>

        <motion.p variants={itemVariants} className="mt-5">
          <span className="font-bold">Learning Outcomes:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Gain corporate exposure
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Gain experience and knowledge about market research
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Develop professional skills and negotiation skills
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Hands-on experience in sales
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Develop partnership delivery skills
        </motion.p>

        <motion.p variants={itemVariants} className="mt-5">
          <span className="font-bold">KPI / MoS:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • # of partners raised
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Overall success of the event
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • % of PD raise out of cost
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • # of company meetings arranged
        </motion.p>
      </motion.div>
    </motion.div>

    {/* OCVP Finance */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="px-5 md:px-10 lg:px-20"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold">
        OCVP Finance
      </motion.h2>
      <motion.div
        variants={itemVariants}
        className="text-2xl mt-5 w-11/12 md:w-2/3 lg:w-1/2 space-y-3"
      >
        <motion.p variants={itemVariants} className="">
          <span className="font-bold">Job Description:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Preparing event budget.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Collecting and documentation of all the supporting documents.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Responsible for budget execution.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Expenses and partnership tracking.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Ensure partnership delivery.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Preparing final finance report.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Cash Flow management of the event.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Understanding and addressing synergy points with other positions as required.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Performing additional duties related to the project set out by the OCP.
        </motion.p>

        <motion.p variants={itemVariants} className="mt-5">
          <span className="font-bold">Learning Outcomes:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Event management skills.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Skill of using tools and trackers.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Finance management of an event.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Budgeting and Reporting skills.
        </motion.p>

        <motion.p variants={itemVariants} className="mt-5">
          <span className="font-bold">KPI / MoS:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Sustainability of the event.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • On-time partnership deposits.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Successful audit review.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Minimal deviation from the budget.
        </motion.p>
      </motion.div>
    </motion.div>

    {/* OCVP Logistics & Events */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="px-5 md:px-10 lg:px-20"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold">
        OCVP Logistics & Events
      </motion.h2>
      <motion.div
        variants={itemVariants}
        className="text-2xl mt-5 w-11/12 md:w-2/3 lg:w-1/2 space-y-3"
      >
        <motion.p variants={itemVariants} className="">
          <span className="font-bold">Job Description:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Responsible for finding a suitable venue and venue management
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Responsible for All Logistic Requirements Before and within the Project
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Responsible for In-Project Event Management
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Responsible for taking an innovative approach in logistic supply and management
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Responsible for printing and supplying merchandises
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Responsible for technical operations of the event
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Understanding and addressing synergy points with other positions as required
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Attending all virtual and physical meetings and presenting updates on logistics and events
        </motion.p>

        <motion.p variants={itemVariants} className="mt-5">
          <span className="font-bold">Learning Outcomes:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Experience in event organizing and promotion.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Inventory management skill.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Communication skills.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Proper partnership delivery skills.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Flexibility & adaptability.
        </motion.p>

        <motion.p variants={itemVariants} className="mt-5">
          <span className="font-bold">KPI / MoS:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Feedback on in-Project events
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • A venue for affordable price
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Zero complaints on logistic management
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Feedbacks from facis
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Feedbacks from delegates
        </motion.p>
      </motion.div>
    </motion.div>

    {/* OCVP PR */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="px-5 md:px-10 lg:px-20"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold">
        OCVP PR
      </motion.h2>
      <motion.div
        variants={itemVariants}
        className="text-2xl mt-5 w-11/12 md:w-2/3 lg:w-1/2 space-y-3"
      >
        <motion.p variants={itemVariants} className="">
          <span className="font-bold">Job Description:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Research and develop the Sessions
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Create sub-sessions and events on the Project.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Find Session Partners and Speakers
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Create and responsible for the agendas
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Agenda and Speakers responsibility for Main Event
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Public figures handling
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Course Content Development
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Deliver the course Content
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Understanding and Addressing synergy points as Required
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Develop & design any required surveys
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Session streamlining and event flow management collaborating with Delegates VP&apos;s
        </motion.p>

        <motion.p variants={itemVariants} className="mt-5">
          <span className="font-bold">Skills and Knowledge:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Planning skills
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Event management skills
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Critical thinking
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Events creating skills
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Platform management skills
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Campaign management skills
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Time management skills
        </motion.p>

        <motion.p variants={itemVariants} className="mt-5">
          <span className="font-bold">KPI / MoS:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • 0 partners & Speakers errors & complaints
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • # of Delegates.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Flow of project according to agenda.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Feedbacks from delegates.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Feedback from Facilitators
        </motion.p>
      </motion.div>
    </motion.div>

    {/* OCVP Web Development */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="px-5 md:px-10 lg:px-20"
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold">
        OCVP Web Development
      </motion.h2>
      <motion.div
        variants={itemVariants}
        className="text-2xl mt-5 w-11/12 md:w-2/3 lg:w-1/2 space-y-3"
      >
        <motion.p variants={itemVariants} className="">
          <span className="font-bold">Job Description:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Oversee the creation, development, and maintenance of the event&apos;s official website.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Collaboration with Event Managers
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • User Experience (UX) Optimization
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Oversee the timely updating of website content, including promotions, schedules, and delegate information.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Ensure that all web functionalities, such as registration forms, payment gateways, and feedback forms, are properly integrated and functioning smoothly.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Collaborate with the marketing team to ensure web-based promotions are on time and that the website is effectively integrated with other promotional channels.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Conduct risk analysis related to web development and user data, ensuring the website is secure and compliant with all relevant regulations.
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Submit regular reports on web development progress, challenges, and outcomes to the Organizing Committee President (OCP).
        </motion.p>

        <motion.p variants={itemVariants} className="mt-5">
          <span className="font-bold">Learning Outcomes:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Web Development & Design Skills
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Project Management Skills
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Content Management & SEO Skills
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Risk Management
        </motion.p>

        <motion.p variants={itemVariants} className="mt-5">
          <span className="font-bold">KPI / MoS:</span>
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • # of Website Visitors
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • % of Deadlines Met
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • # of Functional Integrations
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • User Feedback Rating
        </motion.p>
        <motion.p variants={itemVariants} className="">
          • Zero Technical Issues During Event
        </motion.p>
      </motion.div>
    </motion.div>

    {/* Footer or additional content can be added here */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="px-5 md:px-10 lg:px-20 py-10"
    >
      <motion.p variants={itemVariants} className="text-center text-gray-600">
        © 2024 Benchmark 3.0. All rights reserved.
      </motion.p>
    </motion.div>
  </div>
);
}

export default Landing;