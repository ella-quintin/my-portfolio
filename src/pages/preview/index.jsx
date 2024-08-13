import headshot from "../../assets/headshot.jpg"
import Bio from "./components/bio"
import ExperienceTile from "./components/experienceTile"
import PreviewSkill from "./components/previewSkills"
import ProjectsCard from "./components/projectsCard"
import projectOne from "../../assets/projectOne.png"
import VolunteeringCard from "./components/volunteeringCard"
import EducationTile from "./components/educationTile"
import AchievementCard from "./components/achievementCard"
import awardThree from "../../assets/awardThree.jpg"
import { Link } from 'react-router-dom';
import island from '../../assets/island.png'
import brew from '../../assets/brew.png'
import talenet from '../../assets/talenet.png'
import figma from '../../assets/figma.png'
import mingle from '../../assets/mingle.png'
import portfolio from '../../assets/portfolio.png'
import Footer from "../footer"


const Preview = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl bg-gradient-to-r from-teal-500 to-gray-900 text-transparent bg-clip-text mt-6 ml-5">My <span className="text-gray-900">Portfolio</span></h1>
      </div>

      <div className="overflow-hidden">
        <Bio
          profilePicture={headshot}
          firstName="Emmanuella"
          lastName="Quintin Coffie"
          otherName=""
          email="equintin41@gmail.com"
          bio="Junior Frontend developer | HTML | CSS | React.js | JavaScript | Graphic Designer |"
          location="Greater Accra, Ghana"
          contact="0503627690"
          linkedIn="https://www.linkedin.com/in/emmanuellaquintin"
          githubLink="https://github.com/ella-quintin/imagine"
        />
      </div>

      <div className="flex-col justify-center items-center text-center space-y-8 mt-20">
        <h3 className="text-teal-500 text-6xl font-bold">About me</h3>
        <p className="text-black text-lg mx-auto max-w-4xl">As a driven and innovative professional, I'm excited to leverage my academic background, industry experience, and research skills to drive business growth and deliver value-added solutions. With a natural aptitude for problem-solving and a results-driven mindset, I'm confident in my ability to make a meaningful impact in any team or project.
          With a passion for technology and creative design, I specialize in web development, graphic design, and UI design. I'm dedicated to crafting intuitive digital experiences and visually stunning graphics that captivate and engage.
          Also, embracing a growth mindset, I'm committed to continuous learning and self-improvement, staying up-to-date with industry trends and advancements. I thrive in environments where no two challenges are the same, and I'm eager to take on new opportunities that foster growth and innovation.
          Let's connect and explore opportunities to bring innovative ideas to life, drive success, and shape the future of the digital landscape together!</p>
      </div>

      <div className="mt-20 p-24 bg-gradient-to-r from-gray-900 to-teal-500">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white">Skills</h2>
        </div>
        <div className="flex flex-row justify-center gap-8">
          <PreviewSkill name="React.js" levelOfProficiency="Beginner" />
          <PreviewSkill name="Figma" levelOfProficiency="Intermediate" />
          <PreviewSkill name="Photoshop" levelOfProficiency="Advanced" />
        </div>
      </div>


      <div className="text-center mt-40">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Experience
          </h2>
        </div>

        <div className="flex flex-col gap-[13px] group">
          <ExperienceTile
            companyName="Mest Africa | "
            role="Traniee |"
            startDate="06/2024 - "
            endDate="08/2024"
            responsibility="
            Participant of an intensive 3-month web development program sponsored by the Mastercard Foundation.

Month 1: 
Discovered the building blocks of web development through initial exposure to HTML and CSS, igniting passion for front-end development.

Month 2:
Broadened technical skill set by delving into React.js, discovering its capabilities in creating seamless, high-performance user experiences through hands-on project work.
Enhanced professional toolkit through targeted training in essential soft and transferable skills, including:

 Effective communication and teamwork
 Adaptive problem-solving and conflict resolution
 Time management and productivity optimization
 Leadership and collaboration
Emotional intelligence and empathy.

Month 3:
Utilized comprehensive skill set to design, develop, and deploy fully-functional websites, successfully integrating technical expertise in individual and collaborative projects, driving innovative solutions and showcasing proficiency in all HTML, CSS and React.js."
          />
          <ExperienceTile
            companyName="GCB Bank PLC (Branch operation and Business Support Unit) | "
            role="National Service Personel |"
            startDate="11/2023 - "
            endDate="05/2024"
            responsibility="	Resolves operational issues regarding both core application and third -party applications sent from branches and other units or escalates where necessary.
            	 Assist user management reviews.
            Assist in the closure of audit issues. 
            	 Train and support branches and business units on how to use new applications/products. 
            	 Carry out root cause analysis on imbalances, provide solutions and recommend appropriate steps to avoid future occurrence. 
"
          />
          <ExperienceTile
            companyName="Farm Radio International, Accra | "
            role="Intern |"
            startDate="06/2022 - "
            endDate="09/2022"
            responsibility="	Monitored a farmers' program broadcast in Ga language on Obonu FM and transcribed a 60-minute audio segment from Ga to English. Following this, I performed an assessment to verify that the broadcast content met the company's stringent standards."
          />
          <ExperienceTile
            companyName="Farm Radio International, Accra | "
            role="Volunteer |"
            startDate="08/2019 -"
            endDate="09/2019"
            responsibility="Collaborate intermittently with the Field Team and Radio Team on photography and documentary assignments."
          />
        </div>
      </div>

      <div className="mt-28 bg-gray-50 flex flex-col items-center shadow-sm">
        <div className="mt-36">
          <h2 className="text-4xl font-bold text-gray-900">
            Projects
          </h2>
        </div>
        <div className="w-full">

          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-2">
                <ProjectsCard
                  projectName="Island Escape"
                  img={island}
                  description="Beach Resort Website"
                  projectLink='https://island-escape.netlify.app'
                />
              </div>
              <div className="p-2">
                <ProjectsCard
                  projectName="Go-Mingle"
                  img={mingle}
                  description="Event Management site"
                  contributors="Team Go"
                  projectLink='https://go-mingle.netlify.app'
                />
              </div>
              <div className="p-2">
                <ProjectsCard
                  projectName="Brew & Bite"
                  img={brew}
                  description="Breakfast Resturant"
                  projectLink='https://brew-n-bite.netlify.app'
                />
              </div>
              <div className="p-2">
                <ProjectsCard
                  projectName="Tale-Net"
                  img={talenet}
                  description="Marketplace for Creatives"
                  projectLink='https://tale-net.netlify.app'
                />
              </div>
              <div className="p-2">
                <ProjectsCard
                  projectName="My Portfolio"
                  img={portfolio}
                  description="A website to showcase my skills and experience"
                  projectLink='https://tale-net.netlify.app'
                />
              </div>
              <div className="p-2">
                <ProjectsCard
                  projectName="WhatsApp UI"
                  img={figma}
                  description="Redesigned WhatsApp and added few other features for a project"
                  projectLink='https://www.figma.com/design/JoGAogFl5zvetqiBHCKseE/COMPLETE-WF?node-id=1-3&t=Zh3uCJebYRUtQdxb-1'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-100 overflow-hidden mt-1">
        <div className="container mx-auto">
          <div className="m-8">
            <h2 className="text-4xl font-bold text-center text-gray-900">
              Education
            </h2>
          </div>
          <div className="relative">
            <EducationTile
              schoolName="Mest Africa"
              qualification="Certificate"
              program="Web Development"
              location="East Legon"
              startDate="06/2024 -"
              endDate="08/2024"
            />
            <EducationTile
              schoolName="Accra Technical University"
              qualification="HND Accounting"
              program="Accountancy & Finance"
              location="Tudu, Accra"
              startDate="2021 -"
              endDate="2023"
            />
          </div>
        </div>
      </div>

      <Footer
      linkedIn="https://www.linkedin.com/in/emmanuellaquintin"
      githubLink="https://github.com/ella-quintin/imagine"/>

    </>
  )
}

export default Preview