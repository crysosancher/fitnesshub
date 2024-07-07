import Image from 'next/image';
import React from 'react';

interface VideoCardProps {
	iframe: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ iframe }) => {
	return (
		<div className="cursor-pointer">
			{' '}
			{/* Add cursor-pointer for pointer cursor on hover */}
			<div className="rounded-xl border-2 border-black w-[1/3] h-72  bg-[#F8F8F8] shadow-lg transform transition duration-300 hover:scale-105 m-5">
				<div className="flex  p-1 flex-col justify-between ">
					<iframe
						className=" transform transition duration-300 h-64  w-[100%]"
						allowFullScreen={true} // Correct property name and boolean value
						mozAllowFullScreen={true} // Correct property name and boolean value
						msAllowFullScreen={true} // Correct property name and boolean value
						oAllowFullScreen={true} // Correct property name and boolean value
						webkitAllowFullScreen={true}
						src={iframe}
					/>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
