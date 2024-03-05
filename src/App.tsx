import React from 'react';
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid section-1">
		<div className="row section-1-content">
			<div className="col-xl-2 col-lg-3 offset-lg-3 align-self-center">
				<img className="img-fluid" src="images/me.jpeg" alt="Failed"/>
			</div>
			<div className="col-lg-5 align-self-center">
				<h1>Guðmundur Axel Guðrúnarson</h1>
				<p>
					Hi!I have a lot of interest in Web Development and Game Development. I have a lot ofexperience in both these fields from school projects and my own personal projects.I have experience with using technologies such as React, PHP & Laravel, MySQL, SCSS.Am always willing to learn and adapt to new technologies. Also have experience with Machine Learning and Artificial Intelligence from university. I am good at collaborating within teams and equally proficient in independent work.
					Check out my projects below!
				</p>
			</div>
		</div>
		<div className="section-1-socials">
			<BsGithub />
			<BsLinkedin />
			<BsEnvelope />
		</div>
      </div>
	  <div className="container-fluid section-2">
	  	<div>
			<h2 className="text-center">Education & Projects</h2>
		</div>
		<div className="row section-2-content">
			<div className="col-lg-2">
				Education & Projects
			</div>
		</div>
      </div>
      <button type="button" className="btn btn-primary">Primary</button>
    </div>
  );
}

export default App;
