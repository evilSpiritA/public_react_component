import "./style.scss";
import { ryanRoutes, portfolioPath, I_children } from '@/Ryan/configs/routes';

import DisplayEle from "./components/display-ele";
import Topbar from "./components/topbar";
import Footer from "./components/footer";

const MainDisplayPage: React.FC = () => {
    let data: I_children[] = [];
    const _res = ryanRoutes.find(ele => ele.treeHeader == 'customersComponent');
    if (_res != null) { data = _res.treeChildren }
    data = data.sort((a, b) => {
        return a.index < b.index ? -1 : a.index > b.index ? 1 : 0;
    })

    const customersComponent = data.map((ele) => {
        return (
            <div className="cardEle" key={ele.index}>
                <DisplayEle propsData={ele} />
            </div>
        )
    })

    const portfolioComponent = portfolioPath.map((ele) => {
        return (
            <div className="cardEle" key={ele.index}>
                <DisplayEle propsData={ele} target={"_blank"} />
            </div>
        )
    })


    return (
        <>
            <div className="MainDisplayWrapper">
                <Topbar />
                <div className="contents">

                    <div className="content">
                        <div className="contentTitle">
                            <span>Portfolios</span>
                        </div>
                        <div className="contentElement">
                            {portfolioComponent}
                        </div>
                    </div>

                    <div className="content">
                        <div className="contentTitle">
                            <span>Components</span>
                        </div>
                        <div className="contentElement">
                            {customersComponent}
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainDisplayPage
