import './styleProject.css';
import { FaRegLightbulb, FaRegHandshake, FaUsers, FaImage, FaCoffee } from 'react-icons/fa';

function Main() {
	return (
		<main className="Main">
			<div className="Container">
				<p className="youCtrl">HOW IT WORKS</p>
				<div className="Main-boxes">
					<div className="box">
						<FaRegLightbulb className="box-icon" />
						<h1 className="box-Header">Define</h1>
						<p className="box-par">Answer quick questions to set goals and shape your SuperIntro</p>
					</div>
					<div className="box">
					<FaRegHandshake className="box-icon" />
						<h1 className="box-Header">Connect</h1>
						<p className="box-par">Your SuperIntro goes on dates for you—view and create dates before you meet</p>
					</div>
					<div className="box">
					<FaCoffee className="box-icon" />
						<h1 className="box-Header">Dine</h1>
						<p className="box-par">Reserve your spot at weekly dinners with 5 compatible people.</p>
					</div>
					<div className="box box-fourth">
						<FaUsers className="box-icon" />
						<h1 className="box-Header">Meet</h1>
						<p className="box-par">Meet like-minded people you’ve already gotten to know through your SuperIntro</p>
					</div>
				</div>
				{/* <div className="main-middle-info">
					<p className="main-middle-txt">HOW IT WORKS</p>
					<div className="main-middle">
						<div className="main-middle-text">
							<div className="main-middle-text-first">
								<h2>Set Goals and Create Your SuperIntro</h2>
								<p>
								Answer a few quick questions to give your SuperIntro a personality based on your goals, interests, and hobbies
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
							<img className="mid-image-second" src="\images\mainpic3.png" alt="Picture" />
							<img className="vector-second" src="\images\Vector.png" alt="" />
							<FaCoffee className="coffe-icon" />
						</div>

						<div className="main-middle-text">
							<h2>Explore Matches and Interactions</h2>
							<p>
							Review the dates your SuperIntro has gone on and the matches it recommends. 
							Chat with your matches and create fun scenarios to get to know them better before meeting.
							</p>
						</div>
					</div>
					<div className="main-middle">
						<div className="main-middle-text">
							<h2>Join Weekly Dinners</h2>
							<p>
							Reserve your spot for dinner, and your SuperIntro will select 
							5 compatible people for an evening of great conversations and connections.
							</p>
						</div>
						<div className="main-middle-pic">	
							<img className="mid-pic-third" src="\images\mainpic2.png" alt="Picture" />
							<img className="vector-third" src="\images\Vector.png" alt="" />
							<FaUsers className="users-icon" />
						</div>
					</div>
					<div className="main-middle midd">
						<div className="main-middle-pic">
							<img className="mid-image-four" src="\images\midpic4.jpeg" alt="Picture" />
							<img className="vector-second" src="\images\Vector.png" alt="" />
							<FaRegHandshake className="box-icon-main" />
						</div>

						<div className="main-middle-text">
							<h2>Show Up and Enjoy</h2>
							<p>
							Meet like-minded people you've already gotten to know through your SuperIntro. Relax and let the conversations flow!
							</p>
						</div>
					</div>
				</div> */}
			</div>
		</main>
	);
}

export default Main;
