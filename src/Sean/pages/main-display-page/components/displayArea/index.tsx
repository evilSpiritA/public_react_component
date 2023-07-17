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
          <a href={'/Sean'+ele.href}>
            <img
              src={ele.displayImg}
              className="attachment-large size-large wp-post-image ls-is-cached lazyloaded"
            />
          </a>
        </div>
        <div className="thumbnail-textBox">
          <a href={'/Sean'+ele.href}>
            <ul>
              <li>
                <span className="webdesign">web design</span>
              </li>
              <li className="title">{ele.title}</li>
              {/* <li className="tags">Webデザイン</li> */}
            </ul>
          </a>
        </div>
      </div>
    );
  });
  return (
    <div className="thumbnailArea">
      <div className="aboutInfoArea">
        <span className="aboutInfo-title b_gray">Componetns</span>
      </div>
      <div className="thumbnail-inner">{thumbnailList}</div>
    </div>
  );
};

export default DisplayArea;
