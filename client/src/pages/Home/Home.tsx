import { Container, Img, ImgBox, TextBox, Title } from "./Home.styled";

const HERO_IMG = "/hero_bg_img.svg";

const Home = () => {
	return (
		<Container>
			<TextBox>
				<Title>
					Connect your Metamask account <br />
					or Search the address to look for
				</Title>
			</TextBox>
			<ImgBox>
				<Img src={HERO_IMG} />
			</ImgBox>
		</Container>
	);
};

export default Home;
