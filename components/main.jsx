import './styleProject.css';

function Main() {
	return (
		<main className="Main">
            
			<div className="Container">
                <p className="youCtrl">YOU CONTROL THE FLOW</p>
				<div className="Main-boxes">
					<div className="box">
						<a href="#">Icon</a>
						<h1 className="box-Header">Simulate</h1>
                        <p className='box-par'>Simulate, Match, Meet - No Endless Texting Required</p>
					</div>
					<div className="box">
						<a href="#">Icon</a>
						<h1 className="box-Header">Match</h1>
                        <p className='box-par'>Match Smarter. Meet Sooner. No Time Wasted on Texting</p>
					</div>
					<div className="box">
						<a href="#">Icon</a>
						<h1 className="box-Header">Meet</h1>
                        <p className='box-par'>Simulate. Match. Meet. Skip the Small Talk, Start Connecting</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Main;
