import Navbar from "../../../components/eightofwands8/navbar";
import "./style.scss";

type ItemProps = {
  headerProps: { index: number; bgImg: string; displayText: Array<string> }[];
  navProps?: { index?: number }[];
};

const Header: React.FC<ItemProps> = ({ headerProps, navProps }) => {
  const _tmp = headerProps.map((ele) => {
    return (
      <>
        <div
          className="header-bg fadeDownTrigger fadeDown"
          style={{
            backgroundImage: `url(${ele.bgImg})`,
          }}
        ></div>
        <p className="top-lead blurTrigger blur">
          <span>{ele.displayText[0]}</span>
          <span>{ele.displayText[1]}</span>
        </p>
        <p className="top-lead blurTrigger blur">
          <span>{ele.displayText[0]}</span>
          <span>{ele.displayText[1]}</span>
        </p>
        <Navbar />
      </>
    );
  });
  return <>{_tmp}</>;
};

export default Header;
