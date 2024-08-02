import { Typography } from "@mui/material";
import styles from "../Styles/landingpage.module.css";
import DrawerAppBar from "../Components/Header";
import { ExpandMore } from "@mui/icons-material";
const LandingSection = () => {

    const scrollDown = ()=>{
        window.scrollTo({
            top: 800,
        });
    };

  return (
    <main className={`${styles.landing_section} items_center`}>
        <section className={`${styles.landing_img}`}>
            {/* <img src="images/sunset-beach.jpg" alt="Landing Image"/> */}
            <video loop autoPlay muted>
                <source src="videos/space.mp4" type="video/mp4"/>
            </video>
            <div className={`${styles.landing_overlay}`}>
                <DrawerAppBar/>
                <div className={`${styles.landing_data} items_center text-center`}>
                    <section>
                        <Typography variant="h1" className={`${styles.myname} mb-3`}>
                            Fadi Froukh
                        </Typography>
                        <Typography variant="h5" className={`${styles.myspec} mb-3`}>
                            Computer Engineer
                        </Typography>
                    </section>
                    <section className={`${styles.arrow_down}`} onClick={scrollDown}>
                        <span>
                            <ExpandMore/>
                        </span>
                    </section>
                </div>
            </div>
        </section>
    </main>
  )
}

export default LandingSection