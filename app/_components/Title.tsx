import React from 'react';

const Title = ({ title }: any) => {
	return (
		<div>
			<div className="p-12 border-b-2 flex justify-center  border-blue-500 text-3xl uppercase  font-medium ">
				<strong className="">{title}</strong>
			</div>
		</div>
	);
};

export default Title;
