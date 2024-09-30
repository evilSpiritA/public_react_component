import CornerFontImg from "@/Ryan/components/corner-font-img";
const CornerFontImgPage: React.FC = () => {
  const Config = {
    topright: {
      horizontal: "努力する人は希望を語り",
      corner: "、",
      vertical: "怠ける人は不満を語る",
    },
    bottomLeft: {
      horizontal: "るものしか想像できない",
      corner: "き",
      vertical: "人間の想像力は実現で",
    },
    imgUrl:
      "https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <CornerFontImg config={Config} />
    </div>
  );
};

export default CornerFontImgPage;
