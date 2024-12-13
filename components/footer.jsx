import React from 'react';
import './styleFooter.css';

function Footer() {
	return (
		<footer className="Footer">
			<div className="Container">
				<div className="FooterParags">
					<div className="parMatchMaking">
						<p className="Matchmaking">24/7 Matchmaking</p>
						<p className="MatchmakingPar">
							Events are always a great place to make new connections, but how do you know who's worth
							meeting? With SuperIntro, people are connected based on mutually common interests by
							creating an AI Persona through registering
						</p>
					</div>
					<div className="parPwEventNetworking">
						<p className="PwEventNetworking">Powerful Event Networking</p>
						<p className="PwEventNetworkingPr">
							Powerful Event Networking SuperIntro's lets you explore events and get connected with other
							attendees before, during, and after the events are over across all events on the platform
						</p>
					</div>
					<div className="parEffortlessConns">
						<p className="EffortlessConns">Effortless Connections</p>
						<p className="EffortlessConnsPr">
							No more awkward introductions or wasted time. Meet compatible people based on AI-matched
							interests and goals
						</p>
					</div>
                    <div className="parExpress">
						<p className="Express">Express Yourself Freely</p>
						<p className="ExpressPr">
							Leave self-consciousness behind. Interact with AI simulations that provide supportive feedback
                            and encourage open dialoue
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
