import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, history , match , linkUrl }) => {
	return (
		<div>
			<h2>{title}</h2>
			<span onClick={()=>history.push(`${match.url}${linkUrl}`)}>Shop Now</span>
		</div>
	);
};
export default withRouter(MenuItem);
