import { Container, ContainerImg, TopRight, BottomLeft } from "./styled";

type contentProp = {
  horizontal: string;
  corner: string;
  vertical: string;
};

type TConfig = {
  topright: contentProp;
  bottomLeft: contentProp;
  imgUrl: string;
};

type Props = {
  config: TConfig;
};

const CornerFontImg: React.FC<Props> = ({ config }: Props) => {
  const { topright, bottomLeft, imgUrl } = config;

  return (
    <Container>
      <ContainerImg src={imgUrl} alt="img" />
      <TopRight>
        <span className="horizontal">{topright.horizontal}</span>
        <span className="corner">{topright.corner}</span>
        <span className="vertical">{topright.vertical}</span>
      </TopRight>
      <BottomLeft>
        <span className="vertical">{bottomLeft.vertical}</span>
        <span className="corner">{bottomLeft.corner}</span>
        <span className="horizontal">{bottomLeft.horizontal}</span>
      </BottomLeft>
    </Container>
  );
};

export default CornerFontImg;
