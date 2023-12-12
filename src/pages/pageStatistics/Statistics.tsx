import Box from '../../components/Box/Box';
import csl from '../pageStatistics/Statistics.module.css'
import TablePrice from "./TablePrice";


export function Statistics() {
    return (
      <div className={csl.statistic}>
        <div className={csl.stat}>Statistics</div>;
        <div className={csl.tabbox}>
          {/* <div className={csl.botab}> */}
           <TablePrice styleName={'statistic'}/>
           <Box/>
          {/* </div>
          <div className={csl.tab}> */}
            {/* <TablePrice styleName={'statistic'}/> */}
          {/* </div> */}
        </div>
      </div>
    )

      
  
    
      
  }