import { useState } from "react";
import clsx from "clsx";
import "./style.scss";

const Navbar: React.FC = () => {
  const [btnState, setBtnstate] = useState(false);

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
        <div
          id="g-nav"
          className={clsx({ ["panelactive"]: btnState })}
        >
          <div
            id="g-nav-list"
            className="flex flex-wrap align-items-center justify-between"
          >
            <div className="wd40 txt-center">
              <p className="nav-heading">
                <a href="/">eight of wands</a>
              </p>
              <p className="font-s">素顔のあなたを見つけるサロン</p>
            </div>
            <ul className="wd60 pr-20">
              <li>
                <a href="/">
                  <span className="block">top</span>トップ
                </a>
              </li>
              <li>
                <a href="/menu/">
                  <span className="block">menu</span>施術メニュー
                </a>
              </li>
              <li>
                <a href="/faq/">
                  <span className="block">faq</span>よくあるご質問
                </a>
              </li>
              <li>
                <a href="/blog/">
                  <span className="block">blog</span>ブログ
                </a>
              </li>
              <li>
                <a href="/contact/">
                  <span className="block">contact</span>ご予約・お問い合わせ
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/eri_asaioo"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="block">instagram</span>インスタグラム
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
