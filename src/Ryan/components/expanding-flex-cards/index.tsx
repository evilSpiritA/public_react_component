import "./style.scss";
import { useState } from "react";
import { clsx } from "clsx";
import { c_objSort } from "@/Ryan/utils";

type T_ItemProps = {
  propsData: { index: number; bgImg: string; displayText: string }[];
  defaultNum?: number;
};

const ExpandingFlexCards: React.FC<T_ItemProps> = ({
  propsData,
  defaultNum = 0,
}) => {
  propsData = c_objSort(propsData, "index");
  const [numActive, setNumActive] = useState(defaultNum);

  const content = propsData.map((ele: any) => {
    return (
      <div
        className={clsx("option", ele.index == numActive ? "active" : "")}
        style={{
          backgroundImage: `url(${ele.bgImg})`,
        }}
        key={ele.index}
        onClick={() => {
          setNumActive(ele.index);
        }}
      >
        <div className="shadow"></div>
        <div className="label">
          <div className="icon"></div>
          <div className="info">
            <div className="displayText">{ele.displayText}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="expandingFlexCardsWrapper">
      <div className="options">{content}</div>
    </div>
  );
};

export default ExpandingFlexCards;
