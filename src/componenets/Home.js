import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import Header from "./Header";

const Home = (props) => {
	return (
		<Container>
			<Header></Header>
			<Layout>
				<Leftside />
				<Main />
				<Rightside />
			</Layout>
		</Container>
	);
};

const Container = styled.div`
	padding-top: 52px;
	max-width: 100%;
`;

const Layout = styled.div`
	display: grid;
	grid-template-areas: "leftside main rightside";
	grid-template-columns: minmax(0, 7fr) minmax(0, 10fr) minmax(300px, 8fr);
	column-gap: 25px;
	row-gap: 25px;
	/* grid-template-row: auto; */
	margin: 15px 0;
	/* background-color: red; */
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 0 5px;
	}
`;

export default Home;
