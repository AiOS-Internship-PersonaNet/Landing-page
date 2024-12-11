import React from 'react';
import styled, { keyframes } from 'styled-components';

// Styled components
const Container = styled.div`
	position: relative;
	height: 100vh;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
`;

const Content = styled.div`
	position: relative;
	width: 100%;
`;

const StyledRow = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

const SideContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`;

const MiddleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 0 0 auto;
`;

const SideImage = styled.img`
    margin-top: 40px;
    width: auto;
    height: 150px;
    border-radius: 50%
    flex: 2;
    object-fit: cover;
`;

const MiddleImage = styled.img`
	height: 300px;
	width: 300px;
	border-radius: 50%;
`;

const Header = styled.div`
	font-size: 2rem;
	margin-bottom: 10px;
	font-weight: bold;
    .FreeLife{
    color: #919aff;
    }
`;

const SubHeader = styled.div`
	font-size: 1rem;
	margin-bottom: 10px;
	font-weight: bold;
`;

const TopRightImage = styled.img`
	position: absolute;
	top: 0%;
	right: 0%;
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;

const TopLeftImage = styled.img`
	position: absolute;
	top: 0%;
	left: 0%;
`;

const ButtonSection = styled.div`
	justify-content: center;
	margin-top: 50px;
	display: flex;
	gap: 40px;

	button {
		padding: 10px 20px;
		font-size: 1rem;
		border-radius: 25px;
		border: none;
		cursor: pointer;
		font-weight: bold;
		width: 150px;
	}

	.signup {
		background-color: #8a73ff;
		color: white;
		&:hover {
			background-color: #7856e2;
		}
	}

	.call {
		background-color: transparent;
		border: 2px solid white;
		color: white;
		&:hover {
			background-color: #069c39;
		}
	}
`;


const SignCall = () => {
	return (
		<Container>
			<TopLeftImage src={'/images/Logo.png'} alt="hero pic" />
			<TopRightImage src={'/images/heroPic.png'} alt="hero pic" />
			<Content>
				<SubHeader>Be Among the First 10,000 to Join—Get Lifetime Access, Free Forever</SubHeader>
				<Header>
					Early Access Bonus: Join Now and Enjoy <span className="FreeLife">Free Lifetime Membership</span>
				</Header>

				<StyledRow>
					<SideContainer>
						<SideImage src={'/images/Pictureimg.png'} alt="picture" />
						<SideImage src={'/images/hipic.png'} alt="picture" />
					</SideContainer>

					<MiddleContainer>
						<MiddleImage src={'/images/headPic.png'} alt="Head Avatar" />
					</MiddleContainer>

					<SideContainer>
						<SideImage src={'/images/EyePic.png'} alt="text pic" />
						<SideImage src={'/images/TextPic.png'} alt="text pic" />
					</SideContainer>
				</StyledRow>

				{/* <CenterImage src={'/images/headPic.png'} alt="Head Avatar" /> */}

				<ButtonSection>
					<button className="signup">Sign Up</button>
					<button className="call">Call me</button>
				</ButtonSection>
			</Content>
		</Container>
	);
};

export default SignCall;
