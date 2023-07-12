import "./style.scss";
import { I_children } from "@/Sean/configs/routes";

interface I_propsData {
  propsData: I_children[];
}

const DisplayArea: React.FC<I_propsData> = ({ propsData }) => {
  const thumbnailList = propsData.map((ele) => {
    return (
      <div key={ele.index} className="thumbnail-list">
        <div className="thumbnail-imgBox">
          <a href={ele.href}>
            <img
              src={ele.displayImg}
              className="attachment-large size-large wp-post-image ls-is-cached lazyloaded"
            />
          </a>
        </div>
        <a href="https://125naroom.com/webdesign/3704">
          <div className="thumbnail-textBox">
            <ul>
              <li>
                <span className="webdesign">
                  <a href="/">web design</a>
                </span>
              </li>
              <li className="title">
                『デザインのこと – Web design gallery』、Webサイトを作りました。
              </li>
              <li className="tags">Webデザイン</li>
            </ul>
          </div>
        </a>
      </div>
    );
  });
  return (
    <div className="thumbnailArea">
      <div className="aboutInfoArea">
        <h2 className="aboutInfo-title b_gray">Componetns</h2>
      </div>
      <div className="thumbnail-inner">{thumbnailList}</div>
    </div>
  );
};

export default DisplayArea;
