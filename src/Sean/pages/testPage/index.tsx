import './style.scss'
// import Tabs from '../main-display-page/components/tabs'
// import {tabs} from '../main-display-page/config';
import { CardFiddle } from '@/Sean/components/cardFiddle'
const TestingPage: React.FC = () => {
  return(
    <div className="testWrapper">
      <div className="titleArea">
        <span className="aboutInfo-title b_gray">Testing</span>
      </div>
      <div className="">
        {/* <Tabs tabProps={tabs}/> */}
        <CardFiddle></CardFiddle>
      </div>
    </div>
  ) 
}

export default TestingPage