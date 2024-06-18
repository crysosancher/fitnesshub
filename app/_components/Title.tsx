import React from 'react';

const Title = ({ title }) => {
	return (
		<div>
			<div className="p-12 border-b-2  border-blue-500 text-3xl uppercase mt-2 font-medium">
				<strong className="ml-[38rem]">{title}</strong>
			</div>
		</div>
	);
};

export default Title;
