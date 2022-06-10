import React from 'react';
import './LandingPage.css';
import LogoFinal from '../../Resources/Logo/LogoFinal.svg';
import LPNoteLogo from '../../Resources/Icons/LPNoteLogo.svg';
import NoticeSign from '../../Resources/Icons/NoticeSign.svg';
import LandingPageContent from '../../Templates/LandingPageContent/LandingPageContent';

const LandingPage = () => {
	return (
		<div className='landing-page-wrapper'>
			<img className='login-page-logo' src={LogoFinal} alt='app logo' />
			<LandingPageContent />
			<p className='landing-page-disclaimer'>
				<img src={NoticeSign} alt='important' className='notice-sign' />
				This <img src={LPNoteLogo} alt='logo' /> app was created to help
				you organize and keep track of your tasks, however the
				efficiency of this tool depends on your choices. If you are
				severely unmotivated to complete your tasks and this is
				disrupting your lifestyle, please seek proffesional help.
			</p>
		</div>
	);
};

export default LandingPage;
