import Project from "../Components/Project";
import styles from "../Styles/landingpage.module.css";
const ProjectsSection = () => {
  return (
    <section id={`${styles.projects}`} className="mb-4">
        <div className="container_fluid">
            <div className="row">
               <div className="row mb-4">
                    <div className="col-xl-12 mb-4 text-center">
                        <h3>
                            Some of my previous Projects
                        </h3>
                        <p className="text-muted">
                            I have a few projects to show for
                        </p>
                    </div>
                    <div className="col-xl-3">
                        <Project source={"images/pro.jpeg"} animation={''}/>
                    </div>
                    <div className="col-xl-6">
                        <Project 
                            source={"images/pro.jpeg"} 
                            animation={"animate__backInDown"}
                            projectName={"E-Pharmacy"}
                        />
                    </div>
                    <div className="col-xl-3">
                        <Project/>
                    </div>
               </div>
                <div className="row">
                    <div className="col-xl-6">
                        <Project 
                            source={"images/pro.jpeg"} 
                            animation={"animate__backInDown"}
                            projectName={"E-Pharmacy"}
                        />
                    </div>
                    <div className="col-xl-6">
                        <Project 
                            source={"images/pro.jpeg"} 
                            animation={"animate__backInDown"}
                            projectName={"E-Pharmacy"}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection