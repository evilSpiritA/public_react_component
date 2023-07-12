import "./style.scss";
import DisplayArea from "./components/displayArea";
import { seanRoutes,I_children } from '@/Sean/configs/routes'
// import {tabs} from './config';
// import Tabs from "./components/tabs";
const article = (
  <div className="contentElement">
    <article>
      <div className="img"></div>
      <div className="content222">
        <span className="title">
          123
        </span>
      </div>
    </article>
    <article></article>
    <article></article>
    <article></article>
  </div>
);

const MainDisplayPage: React.FC = () => {
  let data: I_children[] = [];
  const _res = seanRoutes.find((ele) => ele.treeHeader == "customersComponent");
  if (_res != null) {
    data = _res.treeChildren;
  }
  console.log(data);
  // const customersComponent = data.map((ele) => {
  //   return (
  //     <DisplayArea key={ele.index} propsData={ele} />
  //   );
  // });
  return (
    <main className="mainWrapper">
      {/* {customersComponent} */}
      <DisplayArea propsData={data} />

      {/* <div className="content">{article}</div> */}
      {/* <Tabs tabProps={tabs} style='1'/> */}
      {/* <div className="card">
        <div className="" style={{ marginLeft: "160px" }}>
          <button>button</button>
        </div>
      </div> */}
    </main>
  );
};

export default MainDisplayPage;
