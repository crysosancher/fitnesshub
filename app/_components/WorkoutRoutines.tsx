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

				<div className="grid grid-rows-3 grid-cols-2 gap-2">
					<Card
						onClick={() => {
							router.push('/workout-routines/abs');
						}}
						title="abs"
						img="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-abs.png"
						desc="Strong abs enhance your core
								stability, supporting better posture and overall strength.
								Strong abs enhance your core
								stability, supporting better posture and overall strength.
								Strong abs enhance your core
								stability, supporting better posture and overall strength."
					/>
					<Card
						onClick={() => {
							router.push('/workout-routines/abs');
						}}
						title="abs"
						img="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-abs.png"
						desc="Strong abs enhance your core
								stability, supporting better posture and overall strength.
								Strong abs enhance your core
								stability, supporting better posture and overall strength.
								Strong abs enhance your core
								stability, supporting better posture and overall strength."
					/>
					<Card
						onClick={() => {
							router.push('/workout-routines/abs');
						}}
						title="abs"
						img="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-abs.png"
						desc="Strong abs enhance your core
								stability, supporting better posture and overall strength.
								Strong abs enhance your core
								stability, supporting better posture and overall strength.
								Strong abs enhance your core
								stability, supporting better posture and overall strength."
					/>
					<Card
						onClick={() => {
							router.push('/abs');
						}}
						title="abs"
						img="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-abs.png"
						desc="Strong abs enhance your core
								stability, supporting better posture and overall strength.
								Strong abs enhance your core
								stability, supporting better posture and overall strength.
								Strong abs enhance your core
								stability, supporting better posture and overall strength."
					/>
					<Card
						onClick={() => {
							router.push('/abs');
						}}
						title="abs"
						img="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-abs.png"
						desc="Strong abs enhance your core
								stability, supporting better posture and overall strength.
								Strong abs enhance your core
								stability, supporting better posture and overall strength.
								Strong abs enhance your core
								stability, supporting better posture and overall strength."
					/>
					<Card
						onClick={() => {
							router.push('/abs');
						}}
						title="abs"
						img="https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-abs.png"
						desc="Strong abs enhance your core
								stability, supporting better posture and overall strength.
								Strong abs enhance your core
								stability, supporting better posture and overall strength.
								Strong abs enhance your core
								stability, supporting better posture and overall strength."
					/>
				</div>
			</div>
		</>
	);
};

export default WorkoutRoutines;
