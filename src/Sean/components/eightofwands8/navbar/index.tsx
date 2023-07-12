import { useState } from "react";
import clsx from "clsx";
import "./style.scss";
type navProps = {
  navProps: {
    index: number;
    href: string;
    title: string;
    subtitle: string;
  }[];
};
const Navbar: React.FC<navProps> = ({ navProps }) => {
  const [btnState, setBtnstate] = useState(false);
  let _tmp = navProps.map((ele) => {
    if (ele.index != 0) {
      return (
        <li key={ele.index}>
          <a href={ele.href}>
            <span className="block">{ele.subtitle}</span>
            {ele.title}
          </a>
        </li>
      );
    }
  });
  return (
    <>
      <div
        className={clsx("openbtn fedeIn", { ["active"]: btnState })}
        onClick={() => {
          setBtnstate((btnState) => !btnState);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <div id="g-nav" className={clsx({ ["panelactive"]: btnState })}>
          <div
            id="g-nav-list"
            className="flex flex-wrap align-items-center justify-between"
          >
            <div className="wd40 txt-center">
              <p className="nav-heading">
                <a href="/">{navProps[0].title}</a>
              </p>
              <p className="font-s">{navProps[0].subtitle}</p>
            </div>
            <ul className="wd60 pr-20">{_tmp}</ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
