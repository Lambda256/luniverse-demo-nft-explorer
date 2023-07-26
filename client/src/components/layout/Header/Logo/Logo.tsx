import { LogoBox, LogoImg, LogoText } from "./Logo.styled";
import { LogoImgSrc, LogoTitle } from "./Logo.data";

const Logo = () => {
	return (
		<>
			<LogoBox to={"/"}>
				<LogoImg src={LogoImgSrc} />
				<LogoText>{LogoTitle}</LogoText>
			</LogoBox>
		</>
	);
};

export default Logo;
