import React from 'react';
import './Footer.css';
import { MdWork, MdPrivacyTip, MdAttachEmail } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import { TiContacts } from 'react-icons/ti';
import { FaTwitter } from 'react-icons/fa';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';

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
					<li>
						<MdWork />
						&nbsp;Careers
					</li>
					<li>
						<MdPrivacyTip />
						&nbsp;Privacy Policy
					</li>
					<li>
						<HiDocumentText />
						&nbsp;Terms and Conditions
					</li>
					<li>
						<TiContacts />
						&nbsp;Contact Us
					</li>
				</ul>
			</div>
			<div className='footer-div2'>
				<h4>SOCIALS</h4>
				<ul>
					<li>
						<MdAttachEmail />
						&nbsp;Email
					</li>
					<li>
						<FaTwitter />
						&nbsp;Twitter
					</li>
					<li>
						<AiFillGithub />
						&nbsp;GitHub
					</li>
					<li>
						<AiFillInstagram />
						&nbsp;Instagram
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
