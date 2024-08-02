import styles from "../Styles/landingpage.module.css";
const Project = ({source,animation,projectName}) => {
  return (
    <div className={`${styles.project} animate__animated ${animation}`}>
        <img src={`${source}`} alt="Project Image"/>
        <div className={`${styles.project_overlay} flex_col items_center`}>
            <p>
                <strong>
                    {projectName}
                </strong>
            </p>
        </div>
    </div>
  )
}

export default Project