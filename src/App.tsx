import React, { useEffect } from "react";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EducationDiagramList from "./components/EducationDiagramList/EducationDiagramList";

function App() {
	const bg = "../images/firefox_qmfUGQasR8.png";
	const bg2 = "../images/Unity_RGfhouoolA.png";

	useEffect(() => {
		const startAnim = setTimeout(() => {
			console.log("DELAYED");
		}, 2000);
	}, []);

	return (
		<div className="App">
			<div className="container-fluid section-1">
				{/* <div className="section-1-border-top">

				</div>
				<div className="section-1-border-left">

				</div> */}
				<div className="row section-1-content">
					<div className="col-xl-2 col-lg-3 col-sm-12 col-md-4 col-xs-12 offset-lg-1 offset-xl-2 align-self-center">
						<div className="portfolio-photo fadein">
						</div>
						{/* <img
							className="img-fluid portfolio-photo"
							src="images/me.jpeg"
							alt="Failed"
						/> */}
					</div>
					<div className="col-xxl-5 col-xl-6 col-lg-7 col-md-7 col-sm-12 align-self-center">
						<h2 className="fadein">Guðmundur Axel Guðrúnarson</h2>
						<div className="portfolio-title-underline fadein">

						</div>
						<p className="mt-3 fadein">
							Hi!
							<br />I have a lot of interest in Web Development and Game
							Development. I have a lot of experience in both these fields from
							school projects and my own personal projects.I have experience
							with using technologies such as React, PHP & Laravel, MySQL, SCSS.
							Always willing to learn and adapt to new technologies. Also have
							experience with Machine Learning and Artificial Intelligence from
							university. I am good at collaborating within teams and equally
							proficient in independent work. 
							
							<br/><br/>Check out my projects below!
						</p>
					</div>
				</div>
				<div className="section-1-socials">
					<a href="https://github.com/RegAse" target="_"><BsGithub /></a>
					<a href="https://www.linkedin.com/in/gudmundur-axel-gudrunarson/" target="_"><BsLinkedin /></a>
					<a href="mailto:gudmundur210@gmail.com" target="_"><BsEnvelope /></a>
				</div>
			</div>
			<div className="container section-2">
				<div>
					<h2 className="text-center">Education & Projects</h2>
					<div className="portfolio-title-underline">
						
					</div>
					{/* <p className="text-center mt-3">You can click on the projects to view them in more detail</p> */}
				</div>
				<EducationDiagramList></EducationDiagramList>
				{/* <div className="row section-2-content">
					<div className="col-md-5">
						<div className="education">
							<h4>BSc Computer Science - Háskóli Reykjavík</h4>
							<p>
								Learned Machine Learning and Artificical Intelligence as well as
								C++, Game Engine Design, Web Development, Computer Graphics.
								Technologies such as sklearn, ASP.NET, Typescript, PostgreSQL,
								C++, Python, Java, C#, React, React Native.
							</p>
							<div className="education-connection-right"></div>
							<div className="education-connection-down"></div>
						</div>
					</div>
					<div className="col-md-5 offset-md-2 project-container mt-5">
						<div
							className="project"
							style={{ backgroundImage: "url(" + bg + ")", animationDelay: 1*1.2 + "s"}}
						>
							<div className="project-info">
								<h3>Zen Juggle</h3>
								<p>A game I made for a game development course</p>
							</div>
						</div>
						<div className="project-connection-left" style={{ animationDelay: 1*1 + "s"}}></div>
						<div className="project-connection-left-title"  style={{ animationDelay: 1*1 + "s"}}>GCDD Course</div>
					</div>
					<div className="col-md-5">
					</div>
					<div className="col-md-5 offset-md-2 mt-5 project-container">
						<div
							className="project"
							style={{ backgroundImage: "url(" + bg2 + ")", animationDelay: 2*1.2 + "s"}}
						>
							<div className="project-info">
								<h3>Morns</h3>
								<p>A game I made with a group for a game development course</p>
							</div>
						</div>
						<div className="project-connection-left" style={{ animationDelay: 2*1 + "s"}}></div>
						<div className="project-connection-left-title" style={{ animationDelay: 2*1 + "s"}}>GCDD Course</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default App;
