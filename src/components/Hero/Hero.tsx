import React from 'react';
import { HeroPropInterface } from '../../database';
import './Hero.css';

const Hero = ({ alternate, imgPath, heading, content }: HeroPropInterface) => {
	return (
		<div className={`hero ${alternate ? 'dark-bg row-reverse' : ''}`}>
			<div className='svg-container'>
				<img src={imgPath} alt='computerImg' />
			</div>
			<div className='text-container'>
				<h2>{heading}</h2>
				<h5>{content}</h5>
			</div>
		</div>
	);
};

export default Hero;
