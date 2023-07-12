import Navbar from "../../../components/eightofwands8/navbar";
import "./style.scss";
import { headerData, titleText, navData } from "../config/header";
const Header: React.FC = () => {
  let title = (
    <>
      <h1 className="identity txt-right">
        <a className="d-block fadeUpTrigger fadeUp" href="/">
          <span className="d-block font-s">{titleText.subtitle}</span>
          {titleText.title}
        </a>
      </h1>
    </>
  );

  const _tmp = headerData.map((ele: any) => {
    return (
      <section key={ele.index}>
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
        {title}
        <Navbar navProps={navData} />
      </section>
    );
  });
  return <>{_tmp}</>;
};

export default Header;
