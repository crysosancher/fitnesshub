'use client';
import React, { useEffect } from 'react';
import NavBar from '../../_components/NavBar';
import Footer from '../../_components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from '../../_components/Title';
import VideoCard from '@/app/_components/VideoCard';
// import Divider from '@mui/material/Divider';

const page = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<div data-aos="fade-right">
				<NavBar />
				<Title title="Abs Workout" />
				<div className=" grid gap-x-3 grid-cols-1 grid-rows-1  lg:grid-cols-2">
					<VideoCard iframe="https://www.youtube.com/embed/Ubkevtdkkdg?rel=0&amp;&mute=1" />
					<VideoCard iframe="https://www.youtube.com/embed/Ubkevtdkkdg?rel=0&amp;&mute=1" />
					<VideoCard iframe="https://www.youtube.com/embed/Ubkevtdkkdg?rel=0&amp;&mute=1" />
				</div>

				{/* <div className="flex w-full">
					<div className=" justify-center  flex flex-col items-center">
						<ul style={{ listStyleType: 'disc' }}>
							<li>
								Start Position: Begin on your forearms and toes, ensuring your
								elbows are directly under your shoulders and your body forms a
								straight line from head to heels.
							</li>
							<li>
								Engage Core: Tighten your abdominal muscles, glutes, and thighs
								to maintain a stable and straight position.
							</li>
							<li>
								Maintain Alignment: Keep your head neutral, looking down, and
								avoid letting your hips sag or lift too high.
							</li>
							<li>
								Hold and Breathe: Hold the position for as long as possible with
								proper form, breathing steadily throughout.
							</li>
						</ul>
					</div>

					<div className=" justify-center  flex flex-col items-center">
						<ul style={{ listStyleType: 'disc' }}>
							<li>
								Start Position: Begin on your forearms and toes, ensuring your
								elbows are directly under your shoulders and your body forms a
								straight line from head to heels.
							</li>
							<li>
								Engage Core: Tighten your abdominal muscles, glutes, and thighs
								to maintain a stable and straight position.
							</li>
							<li>
								Maintain Alignment: Keep your head neutral, looking down, and
								avoid letting your hips sag or lift too high.
							</li>
							<li>
								Hold and Breathe: Hold the position for as long as possible with
								proper form, breathing steadily throughout.
							</li>
						</ul>
					</div>

					<div className=" justify-center  flex flex-col items-center">
						<ul style={{ listStyleType: 'disc' }}>
							<li>
								Start Position: Begin on your forearms and toes, ensuring your
								elbows are directly under your shoulders and your body forms a
								straight line from head to heels.
							</li>
							<li>
								Engage Core: Tighten your abdominal muscles, glutes, and thighs
								to maintain a stable and straight position.
							</li>
							<li>
								Maintain Alignment: Keep your head neutral, looking down, and
								avoid letting your hips sag or lift too high.
							</li>
							<li>
								Hold and Breathe: Hold the position for as long as possible with
								proper form, breathing steadily throughout.
							</li>
						</ul>
					</div>
				</div> */}
				<br />
				<div className=" sm:flex">
					<div className="">
						<div className="">
							<div className="underline text-xl font-bold mt-2">
								Cable Seated Crunch
							</div>

							<div className="flex gap-2 mt-2">
								<img
									src="data:image/jpeg;base64,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"
									alt="Cable seated crunch"
									height={140}
									width={280}
								/>
								<div className="flex flex-col ">
									<span className="font-bold">Instructions</span>{' '}
									<div>
										With dumbbells in each hand, position feet under foot pad
										and lie supine on steep incline bench. Position dumbbells
										straight over shoulders.
									</div>{' '}
									<span className="font-bold">Execution</span>
									<div>
										Flex waist to raise upper torso from bench, keeping low back
										on bench. Return until back of shoulders contact padded
										incline bench. Repeat.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div className="underline text-xl font-bold mt-2">
							Cable Seated Crunch
						</div>

						<div className="flex gap-2 mt-2">
							<img
								src="data:image/jpeg;base64,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"
								alt="Cable seated crunch"
								height={140}
								width={280}
							/>
							<div className="flex flex-col ">
								<span className="font-bold">Instructions</span>{' '}
								<div>
									With dumbbells in each hand, position feet under foot pad and
									lie supine on steep incline bench. Position dumbbells straight
									over shoulders.
								</div>{' '}
								<span className="font-bold">Execution</span>
								<div>
									Flex waist to raise upper torso from bench, keeping low back
									on bench. Return until back of shoulders contact padded
									incline bench. Repeat.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default page;
