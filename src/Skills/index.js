import React from 'react';

import { Divider, Header, Label } from 'semantic-ui-react';
import { Fade } 		  		  from 'react-reveal';



const Skills = () => {

	const skillList = [
		'React', 'JavaScript', 'APIs', 'Node.js', 'SQL', 'Redux', 'Firebase', 'HTML5', 'CSS3', 'Python', 'Adobe', 'Photography', 'Copyediting', 'Writing', 'Audio Prod'
	]

	const labels = skillList.map((skill, i) => {
		return (<Label as='a' >{skill}</Label>)
	});

	return(
		<div className='skills'>
			<Divider horizontal><Header><div className='skills-head'>skills</div></Header></Divider>
			<div className='skill-labels'>
				<Fade left cascade>
					{labels}
				</Fade>
			</div>
		</div>
	)
}
export default Skills;
