import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./free1.jpg"
								alt="free"
								className="work-image"
							/>
							<div className="work-title">Freelance</div>
							<div className="work-subtitle">
							Personal Web Development and Programming Projects
							</div>
							
							<div className="work-duration">Sep 2023 - Present</div>
						</div>

						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
