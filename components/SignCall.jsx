import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from "next/link";
import "./styleProject.css";

// Styled components
const Container = styled.div`
	position: relative;
	min-height: 100vh;
	color: white;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	text-align: center;
	width: 100%;
	padding: 2rem 0;
`;

const Content = styled.div`
	position: relative;
	width: 100%;
	margin-top: 2rem;

	.bottomTxT {
		margin: 30px 0;
		// margin-bottom: -15px;
		font-size: 20px;
	}
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

const VectorImage = styled.img`
	position: absolute;
	margin-bottom: 20px;
	height: 140px;
	margin-right: 130px;
	margin-top: 10px;

	@media only screen and (max-width: 768px) {
		height: 110px;
		margin-right: 100px;
		margin-top: 20px;
	}

	@media only screen and (max-width: 512px) {
		height: 70px;
		margin-right: 70px;
		margin-top: 33px;
	}
`;

const SideImage = styled.img`
    margin-top: 50px;
    width: 200px;
    height: 210px;
    border-radius: 50%
    flex: 2;
    object-fit: cover;

	@media only screen and (max-width: 768px){
	width: 150px;
    height: 150px;
	}

	@media only screen and (max-width: 512px){
	width: 120px;
    height: 120px;
	}

	@media only screen and (max-width: 390px) {
	width: 100px;
    height: 100px;
	}

	@media only screen and (max-width: 360px) {
	width: 100px;
    height: 100px;
	}
`;

const MiddleImage = styled.img`
	height: 400px;
	width: 400px;
	border-radius: 50%;
	margin-top: 50px;

	@media only screen and (max-width: 768px) {
		width: 300px;
		height: 300px;
	}

	@media only screen and (max-width: 576px) {
		width: 270px;
		height: 270px;
	}

	@media only screen and (max-width: 512px) {
		width: 200px;
		height: 200px;
	}

	@media only screen and (max-width: 390px) {
		width: 180px;
		height: 180px;
	}
`;

const Header = styled.div`
	font-size: 35px;
	margin-top: 50px;
	font-weight: bold;

	.FreeLife {
		color: #919aff;
	}

	@media only screen and (max-width: 768px) {
		font-size: 30px;
	}

	@media only screen and (max-width: 576px) {
		font-size: 25px;
	}
`;

const SubHeader = styled.div`
	font-size: 25px;
	font-weight: bold;
	margin: 2rem 0;

	@media only screen and (max-width: 1400px) {
		margin: 1.5rem 0;
		margin-top: 80px;
	}

	@media only screen and (max-width: 1200px) {
		margin: 1.5rem 0;
		margin-top: 80px;
	}

	@media only screen and (max-width: 992px) {
		margin: 1.5rem 0;
		margin-top: 80px;
	}

	@media only screen and (max-width: 768px) {
		font-size: 20px;
		margin: 1.5rem 0;
		margin-top: 80px;
	}

	@media only screen and (max-width: 576px) {
		font-size: 18px;
		margin: 1rem 0;
		margin-top: 50px;
	}
`;

// const TopRightImage = styled.img`
// 	position: absolute;
// 	top: 0%;
// 	right: 0%;
// 	width: 100px;
// 	height: 100px;
// 	border-radius: 50%;

// 	@media only screen and (max-width: 1440px) {
// 		margin-top: 40px;
// 	}

// 	@media only screen and (max-width: 576px) {
// 		width: 80px;
// 		height: 80px;
// 		margin-top: 50px;
// 	}
// `;

const TopLeftImage = styled.img`
	position: absolute;
	top: 0%;
	left: 0%;
	margin-top: 30px;
	
	@media only screen and (max-width: 1440px) {
		margin-top: 50px;
	}

	@media only screen and (max-width: 991px) {
		width: 200px;
		margin-top: 30px
	}

	@media only screen and (max-width: 576px) {
		width: 150px;
		margin-top: 30px;
	}

	@media only screen and (max-width: 390px) {
		margin-top: 30px;
	}
`;

const ButtonSection = styled.div`
	justify-content: center;
	margin-top: 25px;
	display: flex;
	gap: 100px;

	@media only screen and (max-width: 576px) {
		display: flex;
		flex-wrap: wrap;
		margin-top: 0px;
		row-gap: 30px;
	}
		

	a {
		padding: 10px 10px;
		font-size: 20px;
		border-radius: 25px;
		border: none;
		cursor: pointer;
		font-weight: bold;
		width: 170px;

		@media only screen and (max-width: 576px) {
			width: 150px;
			padding: 10px 10px;
			font-size: 16px;
		}
		@media only screen and (max-width: 360px) {
			padding: 7px 7px;
			
		}
	}

	.signup {
		background-color: #8a73ff;
		color: white;
		&:hover {
			background-color: #7856e2;
		}
	}

	// .call {
	// 	background-color: #900d09;
	// 	color: white;
	// 	display: flex; 
	// 	align-items: center;
	// 	justify-content: center; 
	// 	gap: 10px;
	// 	&:hover {
	// 	background-color:rgb(124, 11, 7);
	// 		.callImg{
	// 			transform: scale(1.2);
	// 			transition: 0.5s;
	// 			z-index:102;
	// 		}
	// }

	// .callImg {
	// 	height: 40px;
	// 	width: 40px;

	// 	@media only screen and (max-width: 576px){
	// 	height: 30px;
	// 	width: 30px;
	// 	}
	// }
`;

const SignCall = () => {
	return (
    <Container>
      <TopLeftImage src={"/images/Logo.png"} alt="hero pic" />
      {/* <TopRightImage src={'/images/heroPic.png'} alt="hero pic" /> */}
      <Content>
        <SubHeader>
          Be Among the First 10,000 to Join—Get Lifetime Access, Free Forever
        </SubHeader>
        <Header>
          Bringing simulations to life, locally: {" "}
          <span className="FreeLife">We make virtual feel personal</span>
        </Header>

        <StyledRow>
          <SideContainer>
            <SideImage src={"/images/Pictureimg.png"} alt="picture" />
            <SideImage src={"/images/hipic.png"} alt="picture" />
          </SideContainer>

          <MiddleContainer>
            <MiddleImage src={"/images/headPic.png"} alt="Head Avatar" />
          </MiddleContainer>

          <SideContainer>
            <VectorImage src={"/images/Vector.png"} alt="text pic" />
            <SideImage src={"/images/EyePic.png"} alt="text pic" />
            <SideImage src={"/images/TextPic.png"} alt="text pic" />
          </SideContainer>
        </StyledRow>

        {/* <CenterImage src={'/images/headPic.png'} alt="Head Avatar" /> */}

        <ButtonSection>
          <a className="signup" href="https://app.superintro.me/login" target="_blank" rel="noopener noreferrer">
            Join now
          </a>
          {/* <button className="call">
						Call me<img className="callImg" src="/images/call.png" alt="png" />
					</button> */}
        </ButtonSection>
        <p className="bottomTxT">Every match is an experience</p>
        <footer className="Footer">
          <div className="Container">
            <h2>@2025. SuperIntro. All rights reserved</h2>
            <Link className="termsAndconditions" href="/terms-and-conditions">
              Terms & Conditions
            </Link>
            <Link className="privacyPolicy" href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </Content>
    </Container>
  );
};

export default SignCall;
