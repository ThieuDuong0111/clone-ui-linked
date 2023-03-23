import styled from "styled-components";

const Login = (props) => {
	return (
		<Container>
			<Nav>
				<a href='/'>
					<img src='/images/login-logo.svg' alt='' />
				</a>
				<div>
					<Join>Join now</Join>
					<SignIn>Sign In</SignIn>
				</div>
			</Nav>
			<Section>
				<Hero>
					<h1>Welcome to your professional community</h1>
				</Hero>
			</Section>
		</Container>
	);
};
const Container = styled.div`
	padding: 0px;
`;

const Nav = styled.nav`
	/* background-color: green; */
	max-width: 1128px;
	margin: auto;
	padding: 12px 0 16px;
	display: flex;
	align-items: center;
	position: relative;
	justify-content: space-between;
	flex-wrap: nowrap;
	/*anythin inside a tag*/
	& > a {
		width: 135px;
		height: 34px;
		/*in phone*/
		@media (max-width: 768px) {
			padding: 0 5px;
		}
	}
`;

const Join = styled.a`
	font-size: 16px;
	padding: 10px 12px;
	border-radius: 4px;
	text-decoration: none;
	color: rgba(0, 0, 0, 0.6);
	margin-right: 12px;
	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
		color: rgba(0, 0, 0, 0.9);
		text-decoration: none;
	}
`;

const SignIn = styled.a`
	box-shadow: inset 0 0 0 1px #0a66c2;
	color: #0a66c2;
	border-radius: 24px;
	transition-duration: 167ms;
	font-weight: 600;
	line-height: 40px;
	padding: 10px 24px;
	text-align: center;
	background-color: rgba(0, 0, 0, 0);
	&:hover {
		background-color: rgba(112, 181, 249, 0.15);
		color: #0a66c2;
		text-decoration: none;
	}
`;

const Section = styled.section`
	/* background-color: red; */
	display: flex;
	align-content: start;
	min-height: 700px;
	padding-bottom: 138px;
	padding-top: 40px;
	padding: 60px 0;
	position: relative;
	flex-wrap: wrap;
	width: 100%;
	max-width: 1128px;
	margin: auto;
	/*in phone*/
	@media (max-width: 768px) {
		margin: auto;
		min-height: 0px;
	}
`;

const Hero = styled.div`
	width: 100%;
	/* background-color: red; */
	h1 {
		text-align: start;
		padding-bottom: 0;
		width: 55%;
		font-size: 56px;
		color: #2977c9;
		font-weight: 200;
		line-height: 70px;
		@media (max-width: 768px) {
			text-align: start;
			font-size: 20px;
			width: 100%;
			line-height: 2;
		}
	}
`;

export default Login;