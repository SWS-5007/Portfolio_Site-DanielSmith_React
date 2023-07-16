function AboutMe() {
    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About Me</h2>
                    <h3 className="section-subheading text-muted">
                        Highly motivated Senior Level DevOps Engineer with 5+ year of experience in developing and implementing CI/CD pipelines, optimizing application performance, and automating system administration tasks.
                        Skilled in cloud-based infrastructure design, security best practices, and system capacity planning.
                        Proven track record in reducing deployment time by 50%, increasing team productivity by 25% and reducing operational costs by 40%.
                    </h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>04/2014-08/2018</h4>
                                <h4 className="subheading">Student in University of Toronto</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted"> - University of Toronto</p>
                                <p className="text-muted"> - Bachelor's degree in Computer Science</p>
                                <p className="text-muted"> - 3.8 GPA</p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>10/2018-12/2019</h4>
                                <h4 className="subheading">Full-Stack Developer in Digitalya</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted"> - Increased company revenue by 30% within 2 months after developing and  implementing business logic for over 20 features.</p>
                                <p className="text-muted"> - Designed and Developed UI design for over 15 clients using CSS, HTML, ASP.NET, Vue, and React, Websites scoring over 85 on Lighthouse.</p>
                                <p className="text-muted"> - Created endpoints to handle results, which improved the accuracy and upload speed of each result by at least 50%.</p>
                                <p className="text-muted"> - Managed 100+ client accounts and received 95% satisfaction.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>12/2019-09/2020</h4>
                                <h4 className="subheading">Software Engineer in Pixels Trade</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted"> - Developed 26 web apps for multiple clients, providing a wide range of functionality and tools enabling mission-critical processes.</p>
                                <p className="text-muted"> - Provided priority one customer support for incidents and bug fixes, maintaining a 99% SLA for response and resolution times.</p>
                                <p className="text-muted"> - Implemented dependency injection for over 200 modules in C# and Angular code.</p>
                                <p className="text-muted"> - Led 17 successful (on schedule and budget) agile development projects for clients.</p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>10/2020-12/2021</h4>
                                <h4 className="subheading">DevOps Engineer in Sogeti</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted"> - Developed and maintained scripts to automate system administration tasks, reducing manual workload by 50% and increasing team efficiency by 20%.</p>
                                <p className="text-muted"> - Implemented security best practices and conducted regular vulnerability assessments, ensuring system integrity and compliance with industry standards.</p>
                                <p className="text-muted"> - Researched and evaluated new technologies to improve system performance, resulting in a 10% reduction in system response time and a 5% increase in overall system efficiency.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/5.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>01/2022-05/2023</h4>
                                <h4 className="subheading">DevOps Engineer in Digitalis</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted"> - Developed and implemented a CI/CD pipeline for a new application, reducing deployment time by 50% and increasing team productivity by 25%.</p>
                                <p className="text-muted"> - Collaborated with development teams to optimize application performance, resulting in a 15% increase in user satisfaction and a 10% increase in revenue.</p>
                                <p className="text-muted"> - Maintained system documentation and provided training to new team members, improving onboarding time by 30%.</p>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
  
export default AboutMe;