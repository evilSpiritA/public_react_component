import './style.scss'
import Tabs from '../main-display-page/components/tabs'
import {tabs} from '../main-display-page/config';
const TestingPage: React.FC = () => {
  return(
    <div className="testWrapper">
      <div className="titleArea">
        <span className="aboutInfo-title b_gray">Testing</span>
      </div>
      <div className="">
        <Tabs tabProps={tabs}/>
      </div>
    </div>
  ) 
}

export default TestingPage