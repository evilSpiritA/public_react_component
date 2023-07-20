import "./style.scss";
import { ryanRoutes, portfolioPath, I_children } from "@/Ryan/configs/routes";
import DisplayEle from "./components/display-ele";
import Topbar from "@/Ryan/components/topbar";
import Footer from "@/Ryan/components/footer";
import { c_objSort } from "@/Ryan/utils";

const MainDisplayPage: React.FC = () => {
  let data: I_children[] = [];
  const _res = ryanRoutes.find((ele) => ele.treeHeader == "customersComponent");
  if (_res != null) {
    data = _res.treeChildren;
  }

  data = c_objSort(data, "index");

  const customersComponent = data.map((ele) => {
    return (
      <div className="cardEle" key={ele.index}>
        <DisplayEle propsData={ele} />
      </div>
    );
  });

  const portfolioComponent = portfolioPath.map((ele) => {
    return (
      <div className="cardEle" key={ele.index}>
        <DisplayEle propsData={ele} target={"_blank"} />
      </div>
    );
  });

  const contentData: T_contentData[] = [
    { index: 0, title: "Portfolios", element: portfolioComponent },
    { index: 1, title: "Components", element: customersComponent },
  ];

  const contentElement = contentData.map((ele: T_contentData) => {
    return (
      <div className="content" key={ele.index}>
        <div className="contentTitle">
          <span>{ele.title}</span>
        </div>
        <div className="contentElement">{ele.element}</div>
      </div>
    );
  });

  return (
    <>
      <div className="MainDisplayWrapper">
        <Topbar />
        <div className="contents">{contentElement}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainDisplayPage;

type T_contentData = {
  index: number;
  title: string;
  element: JSX.Element[];
};
