'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Title from './Title';
import Card from './Card';

const WorkoutRoutines = () => {
	const router = useRouter();
	return (
		<>
			<div className="secondary-header   justify-start">
				<Title title="Workout Routines" />

				<div className="">
					<Card
						onClick={() => {
							router.push('/workout-routines/abs');
						}}
						title="Abs"
						img="https://e1.pxfuel.com/desktop-wallpaper/140/792/desktop-wallpaper-boys-abs-abs.jpg"
					/>
					<Card
						onClick={() => {
							router.push('/workout-routines/abs');
						}}
						title="Chest"
						img="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-chest.png"
					/>
					<Card
						onClick={() => {
							router.push('/workout-routines/abs');
						}}
						title="Back"
						img="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-back.png"
					/>
					<Card
						onClick={() => {
							router.push('/abs');
						}}
						title="Legs"
						img="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-legs.png"
					/>
					<Card
						onClick={() => {
							router.push('/abs');
						}}
						title="Shoulders"
						img="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-shoulders.png"
					/>
					<Card
						onClick={() => {
							router.push('/abs');
						}}
						title="Arms"
						img="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-arms.png"
					/>
				</div>
			</div>
		</>
	);
};

export default WorkoutRoutines;
