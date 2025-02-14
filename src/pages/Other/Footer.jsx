import Box from "./Box";
import BoxesContainer from "./BoxesContainer";
import BoxesRow from "./BoxesRow";
import Emoji from "./Emoji";
import H2 from "./H2";
import H3 from "./H3";

function Footer(){
    return(
        <footer>
            <BoxesContainer>
                <BoxesRow>
                    <Box>
                        <H2 fontSize="40px">Website Sections</H2>
                        <div className="website-sections">
                            <ul className="clear-list">
                                <li>
                                    <H3><a href="#main"><b>Start</b></a></H3>
                                </li>
                                <li>
                                    <H3><a href="#services"><b>Services</b></a></H3>
                                </li>
                                <li>
                                    <H3><a href="#skills"><b>Skills</b></a></H3>
                                </li>
                                <li>
                                    <H3><a href="#work"><b>My Work</b></a></H3>
                                </li>
                                <li>
                                    <H3><a href="#contact"><b>Contact Me</b></a></H3>
                                </li>
                            </ul>
                        </div>
                    </Box>
                    <Box>
                        <div className="footer-box">
                            <p>Created With <Emoji label="heart" symbol="❤"/> By <b>Fadi Froukh</b></p>
                            <p>This Website Was Created Using the <b><a href="https://reactjs.org" target="_blank">Reactjs</a></b> Framework</p>
                            <p>Website Code on <b><a href="https://github.com/FadyFroukh/fadyfroukh" target="_blank">Github</a></b></p>
                        </div>
                    </Box>
                </BoxesRow>
            </BoxesContainer>
        </footer>
    );
}

export default Footer;