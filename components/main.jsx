import './styleProject.css';
import { FaRegLightbulb, FaRegHandshake, FaUsers, FaImage, FaCoffee } from 'react-icons/fa';

function Main() {
	return (
		<main className="Main">
			<div className="Container">
				<p className="youCtrl">YOU CONTROL THE FLOW</p>
				<div className="Main-boxes">
					<div className="box">
						<FaRegLightbulb className="box-icon" />
						<h1 className="box-Header">Simulate</h1>
						<p className="box-par">Simulate, Match, Meet - No Endless Texting Required</p>
					</div>
					<div className="box">
						<FaRegHandshake className="box-icon" />
						<h1 className="box-Header">Match</h1>
						<p className="box-par">Match Smarter. Meet Sooner. No Time Wasted on Texting</p>
					</div>
					<div className="box">
						<FaUsers className="box-icon" />
						<h1 className="box-Header">Meet</h1>
						<p className="box-par">Simulate. Match. Meet. Skip the Small Talk, Start Connecting</p>
					</div>
				</div>
				<div className="main-middle-info">
					<p className="main-middle-txt">HOW IT WORKS</p>
					<div className="main-middle">
						<div className="main-middle-text">
							<div className="main-middle-text-first">
								<h2>Simulations First, Profiles Later</h2>
								<p>
									Get to know your matches through guided SuperIntro simulations that mimic real-life
									interactions. Unlock the ability to RSVP for IRL experiences only when both of you
									are ready to reveal your profiles
								</p>
							</div>
						</div>
						<div className="main-middle-pic">
							<img className="mid-image-first" src="\images\mainpic1.png" alt="Picture" />
							<img className="vector-first" src="\images\Vector.png" alt="" />
							<FaImage className="picture-icon" />
						</div>
					</div>
					<div className="main-middle midd">
						<div className="main-middle-pic">
							<img className="mid-image-second" src="\images\mainpic2.png" alt="Picture" />
							<img className="vector-second" src="\images\Vector.png" alt="" />
							<FaCoffee className="coffe-icon" />
						</div>

						<div className="main-middle-text">
							<h2>RSVP for Local Experiences</h2>
							<p>
								Once profiles are unlocked, we organize laid-back local events like lunch, dinner, or
								fun activities in small groups. Meet your matches in a comfortable, casual setting
								designed to foster meaningful connections
							</p>
						</div>
					</div>
					<div className="main-middle">
						<div className="main-middle-text">
							<h2>Small Groups, Big Connections</h2>
							<p>
								Matched with multiple people? No problem. SuperIntro coordinates group meetups with
								several unlocked matches, so you can connect in a relaxed, social environment.
							</p>
						</div>
						<div className="main-middle-pic">
							<img className="mid-pic-third" src="\images\mainpic3.png" alt="Picture" />
							<img className="vector-third" src="\images\Vector.png" alt="" />
							<FaUsers className="users-icon" />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Main;
