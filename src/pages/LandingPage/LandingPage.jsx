import Footer from "../Other/Footer"
import { EducationSection } from "./Sections/EducationSection"
import LandingSection from "./Sections/LandingSection"
import ProjectsSection from "./Sections/ProjectsSection"
import SkillsSection from "./Sections/SkillsSection"

const LandingPage = () => {
  return (
    <>
        <LandingSection/>
        <ProjectsSection/>
        <SkillsSection/>
        <EducationSection/>
        <Footer/>
    </>
  )
}

export default LandingPage