import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = (props) => {
	const { label = 'not set', path = '/', className } = props;
	return (
		<Link className={`link-component ${className}`} to={path}>
			{label}
		</Link>
	);
};

export default LinkComponent;
