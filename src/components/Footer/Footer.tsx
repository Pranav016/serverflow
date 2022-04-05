import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-div1'>
				<h4>ABOUT SERVERFLOW</h4>
				<p>
					Serverflow is a platform where Software Engineers and
					Developers come to solve their doubts and contribute to the
					open-source community. We ensure to promote a healthy
					environment and help our users stay strong and motivated.
					All you have to do is start posting your doubts!
				</p>
			</div>
			<div className='footer-div2'>
				<h4>QUICK LINKS</h4>
				<ul>
					<li>Careers</li>
					<li>Privacy Policy</li>
					<li>Terms and Conditions</li>
					<li>Contact Us</li>
				</ul>
			</div>
			<div className='footer-div2'>
				<h4>SOCIALS</h4>
				<ul>
					<li>Email</li>
					<li>Twitter</li>
					<li>GitHub</li>
					<li>Instagram</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
