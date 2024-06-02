import React, { useEffect, useRef } from "react";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EducationDiagramList from "./components/EducationDiagramList/EducationDiagramList";
import ProjectList from "./components/Project/ProjectList/ProjectList";
import EducationList from "./components/EducationList/EducationList";

function App() {
	const bg = "../images/firefox_qmfUGQasR8.png";
	const bg2 = "../images/Unity_RGfhouoolA.png";
	const projectsRef = useRef<HTMLDivElement | null>(null);
	const educationRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const startAnim = setTimeout(() => {
			console.log("DELAYED");
		}, 2000);
	}, []);

	return (
		<div className="App">
			<div className="main-background">

			</div>
			{/* First Fullscreen Page */}
			<div className="container-fluid landing-page-1 min-vh-100">
				<div className="landing-page-main d-flex flex-column-reverse flex-md-row align-items-center justify-content-center min-vh-100">
					<div className="col-sm-12 col-md-4 col-lg-5 mt-3">
						<h1 className="fadein">Hi, I´m Guðmundur</h1>
						<p className="subtitle fs-4 fadein">Passionate programmer with a strong drive and deep interest in Web, App and Game Development</p>

						<div className="landing-page-actions fadein">
							<button className="btn btn-main mt-sm-5 ms-3" onClick={() => {
								projectsRef.current?.scrollIntoView({behavior: 'smooth'});
							}}>
								Projects
							</button>
							<button className="btn btn-main mt-sm-5 ms-3" onClick={() => {
								educationRef.current?.scrollIntoView({behavior: 'smooth'});
							}}>
								Education
							</button>
							{/* <button className="btn btn-main mt-5 ms-4">My Education</button> */}
						</div>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-5 avatar-container">
						<img className="img-fluid landing-page-avatar fadein" src="images/profile-picture-4.png" alt="Failed" />
					</div>
				</div>
				
				{/* Socials */}
				<div className="section-1-socials">
					<a href="https://github.com/RegAse" target="_"><BsGithub /></a>
					<a href="https://www.linkedin.com/in/gudmundur-axel-gudrunarson/" target="_"><BsLinkedin /></a>
					<a href="mailto:gudmundur210@gmail.com" target="_"><BsEnvelope /></a>
				</div>
			</div>

			{/* Education Section */}
			<div ref={educationRef} className="container education-container">
				<h2 className="text-center">Education</h2>
				<p className="projects-desc text-center">
					Discover the diverse educational background I have 
					<br/>
					acquired from academic institutions and personal study.
				</p>
				<EducationList></EducationList>
			</div>

			{/* Projects Section */}
			<div ref={projectsRef} className="container projects-container">
				<h2 className="text-center">Projects</h2>
				<p className="projects-desc text-center">Explore the array of projects I have worked on, both
				<br/>as part of my academic curriculum and personal endeavors.</p>
				<ProjectList></ProjectList>
			</div>

			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
		</div>
	);
}

export default App;
