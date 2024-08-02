import styles from "../Styles/landingpage.module.css";

const Education = ({name,uniName,period,desc,imgLeft}) => {
  return (
    <>
        {
            imgLeft && 
            <div class="col-xl-6">
                <div class={`${styles.work_img}`}>
                    <img src="images/alquds.png" alt="Education Exp"/>
                </div>
            </div>
        }
        <div class="col-xl-6">
            <div class={`${styles.work_data}`}>
            <div>
                <h3>
                    {name}
                </h3>
                <p class="text-muted">
                <small>
                    {uniName}
                </small>
                </p>
            </div>
            <div>
                <p>
                    {period}
                </p>
            </div>
            </div>
            <div>
            <p>
                {desc}
            </p>
            </div>
        </div>
        {
            !imgLeft && 
            <div class="col-xl-6">
                <div class={`${styles.work_img}`}>
                    <img src="images/alquds.png" alt="Education Exp"/>
                </div>
            </div>
        }
    </>
  )
}

export default Education