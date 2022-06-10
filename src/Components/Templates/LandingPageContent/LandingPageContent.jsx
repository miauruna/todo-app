import React from 'react';
import LP1 from '../../Resources/Icons/LP1.svg';
import LP2 from '../../Resources/Icons/LP2.svg';
import LP3 from '../../Resources/Icons/LP3.svg';
import LP4 from '../../Resources/Icons/LP4.svg';
import LPButton from '../../Resources/Icons/LPButton.svg';
import Button from '../../Atoms/Button/Button';
import { useNavigate } from 'react-router-dom';

const LandingPageContent = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/login');
	};
	return (
		<div className='landing-page-content'>
			<ul className='landing-list'>
				<li className='landing-list-item styled-red'>
					<img src={LP1} alt='LP1' />{' '}
					<p>
						Have you been feeling overwhelmed by your
						responsibilities?
					</p>
				</li>

				<li className='landing-list-item styled-red'>
					<img src={LP2} alt='LP2' />{' '}
					<p>
						Do you feel like there’s so many things to do, you don’t
						even know where to start?
					</p>
				</li>
				<li className='landing-list-item styled-green'>
					<img src={LP3} alt='LP3' />
					<p>
						You’re in the right place! We’re here to help you keep
						track of your tasks, organize, preoritize and categorize
						them (and much more!).
					</p>
				</li>
				<li className='landing-list-item styled-green'>
					<img src={LP4} alt='LP4' />{' '}
					<p>
						By consistently using our app, you’re taking the first
						step to having less stressful and more enjoyable days.
					</p>
					<Button className='lp-button' onClick={handleClick}>
						<img
							src={LPButton}
							alt='Get Started!'
							className='lp-button-content'
						/>
					</Button>
				</li>
			</ul>
		</div>
	);
};

export default LandingPageContent;
