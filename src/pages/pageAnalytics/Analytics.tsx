import InightsForms from "../../components/Data/InsightsForms/InsightsForms";
import csl from '../pageAnalytics/Analytics.module.css'
import Box from "../../components/Box/Box";
import BoxGold from "../../components/Box/BoxGold";

export function Analytics() {
    return (
      <div className={csl.main}>
        <div className={csl.analyt}>Analytics</div>
        <InightsForms/>
        <div className={csl.anup}>
          <div className={csl.boxA}>
            <Box/>
          </div>
          <div className={csl.boxG}>
            <BoxGold/>
          </div>
        </div>
      </div> 
      
    )  
  }