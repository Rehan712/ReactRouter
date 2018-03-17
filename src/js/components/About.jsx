import React from 'react';
import PropTypes from 'prop-types'

 class About extends React.Component {
	constructor(){
		super();
	}
	render(){
		
		return (
			<div className="about">
				This is about page
			</div>
		)
	}
} 

export default About

About.propTypes={
	//getAction: PropTypes.func.isRequired
}
