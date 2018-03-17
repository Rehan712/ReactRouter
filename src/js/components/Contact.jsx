import React from 'react';
import PropTypes from 'prop-types'

 class Contact extends React.Component {
	constructor(){
		super();
	}
	render(){
		console.log('Route props are in Contact',this.props.routeProps)
		return (
			<div className="contact">
				This is a contact page
			</div>
		)
	}
} 

export default Contact

Contact.propTypes={
	//getAction: PropTypes.func.isRequired
}
