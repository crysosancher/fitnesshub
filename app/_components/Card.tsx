import Image from 'next/image';
import React from 'react';

interface CardProps {
	img: string;
	title: string;
	desc: string;
	onClick: () => void; // Add onClick to the props interface
}

const Card: React.FC<CardProps> = ({ img, title, desc, onClick }) => {
	return (
		<div
			onClick={onClick}
			className="cursor-pointer"
		>
			{' '}
			{/* Add cursor-pointer for pointer cursor on hover */}
			<div className="border-4 border-blue-900 rounded-3xl p-6 w-[700px] h-[250px] bg-[#F8F8F8] shadow-lg transform transition duration-300 hover:scale-105 m-5">
				<div className="flex">
					<Image
						className="transform transition duration-300 hover:scale-105"
						src={img}
						alt="Your Muscle Image"
						width={200}
						height={200}
					/>
					<div className="flex flex-col justify-center ml-4">
						<strong className="text-2xl uppercase">{title}</strong>
						<div>{desc}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
