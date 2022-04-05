import React from 'react';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';

interface HeroDataInterface {
	imgPath: string[];
	headings: string[];
	content: string[];
}

const Home: React.FC = () => {
	const data: HeroDataInterface = {
		imgPath: [
			'https://i.ibb.co/HzLLxxY/code-think.png',
			'https://i.ibb.co/xLk85yB/pair-prog.png',
		],
		headings: [
			'Need help as a Software Engineer?',
			"Learning Software Engineering but get stuck and can't get help?",
		],
		content: [
			'Welcome to serverflow! You can post doubts, community contributes solutions, upvote relevant queries so that others can benefit too.',
			'Come on the forum, post doubts, get help and contribute back to the community. Upvote/ Downvote relevant queries and also become a good open-source citizen!',
		],
	};
	return (
		<>
			<Hero
				imgPath={data.imgPath[0]}
				heading={data.headings[0]}
				content={data.content[0]}
			/>
			<Hero
				imgPath={data.imgPath[1]}
				heading={data.headings[1]}
				content={data.content[1]}
				alternate={true}
			/>
			<Footer />
		</>
	);
};

export default Home;
