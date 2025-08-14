// components
import Banner from './Banner'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
// import Resume from './Resume'


const Home = () => {
    return (
        <>
            {/* Hero / Banner Section */ }
            <section id="home">
                <Banner />
            </section>

            {/* About Section */ }
            <section id="about">
                <About />
            </section>

            {/* Skills Section */ }
            <section id="skills">
                <Skills />
            </section>

            {/* Education Section */ }
            <section id="education">
                <Education />
            </section>

            {/* Experience Section */ }
            <section id="experience">
                <Experience />
            </section>

            {/* Projects Section */ }
            <section id="projects">
                <Projects />
            </section>

            {/* Contact Section */ }
            <section id="contact">
                <Contact />
            </section>

            {/* <Resume/> */}
        </>
    )
}

export default Home
