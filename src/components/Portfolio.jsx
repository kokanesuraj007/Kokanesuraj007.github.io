import { AboutMe } from "./About";
import { Header } from "./Header";
import { Skills } from "./Skills";
import { useRef } from 'react';
import { Projects } from "./Projects";
import { Contact} from "./Contact";

export const Portfolio = () => {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    return(
        <div>
            <Header aboutRef={aboutRef} skillsRef={skillsRef} projectRef={projectRef}
                 contactRef={contactRef} />
            <AboutMe skillsRef={skillsRef} aboutRef={aboutRef} />
            <Skills skillsRef={skillsRef} />
            <Projects projectRef={projectRef} />
            <Contact aboutRef={aboutRef} contactRef={contactRef} />
        </div>
    );
};