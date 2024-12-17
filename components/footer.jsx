import React from 'react';
import './styleProject.css';

function Footer() {
	return (
		<footer className="Footer">
			<div className="Container">
				<div className="FooterParags">
					<div className="footer-part">
						<div className="footer-parag">
							<p className="footer-headline">24/7 Matchmaking</p>
							<p className="footer-txt">
								Events are always a great place to make new connections, but how do you know who's worth
								meeting? With SuperIntro, people are connected based on mutually common interests by
								creating an AI Persona through registering
							</p>
						</div>
						<div className="footer-parag">
							<p className="footer-headline">Powerful Event Networking</p>
							<p className="footer-txt">
								Powerful Event Networking SuperIntro's lets you explore events and get connected with
								other attendees before, during, and after the events are over across all events on the
								platform
							</p>
						</div>
					</div>
					<div className="footer-part">
						<div className="footer-parag">
							<p className="footer-headline">Effortless Connections</p>
							<p className="footer-txt">
								No more awkward introductions or wasted time. Meet compatible people based on AI-matched
								interests and goals
							</p>
						</div>
						<div className="footer-parag">
							<p className="footer-headline">Express Yourself Freely</p>
							<p className="footer-txt">
								Leave self-consciousness behind. Interact with AI simulations that provide supportive
								feedback and encourage open dialoue
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
