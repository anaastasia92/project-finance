import csl from './Data.module.css'
import scene from '../images/scene.png'
import Table from './TablePrice/TablePrice'
import StocksForms from './StocksForms/StocksForms'
import TablePrice from './TablePrice/TablePrice'
import Calculate from '../Buttom/Calculate'
import InightsForms from './InsightsForms/InsightsForms'
import Graph1 from '../Graphics/Graph1'
import Graph2 from '../Graphics/Graph2'


export default function Data() {
    return (
        <div className={csl.main}>
         <div className={csl.up}>
            <div className={csl.graph1}>
                <div className={csl.left}>
                    <h2>ANALYZE THE RELATIONSHIP BETWEEN TWO STOCKS</h2>
                    <h1>Assessing the Dependence of Two Stocks</h1>
                    <p>Discover the correlation coefficient between any two stocks with our easy-to-use calculator. Make informed investment decisions based on the data-driven analysis of stock market trends</p>
                </div>
                   <StocksForms />
            </div>
                <div className={csl.diagr1}>
                   <Graph1/>
                </div>

            </div>

            <div className={csl.middle}>
                <h2>data-driven strategies for investment success</h2>
                <h1>Market Inights</h1>   
            </div>
                <InightsForms />

                <div className={csl.center}>
                    <div className={csl.graph2}>
                        <Graph2/>
                    </div>
                        <TablePrice/>      
                </div>    
            <div className={csl.wrapperBottom}>
            <div className={csl.text}>
                <h2>LATEST STOCK MARKET INFORMATION</h2>
                <h1>Real-Time Stock Price Data API</h1>
            </div>
                <div className={csl.bottom}>
                    <div className={csl.left}>

                      <p>By choosing our API, you can save valuable time and effort on data collection and analysis, and focus on making smart investment decisions based on actual data. Our API is reliable, accurate, and easy to use, making it an essential tool for investors, traders, and analysts who want to stay ahead of the game.
                            Invest in our stock analysis API today and take advantage of the power of real- time data and in-depth analysis to achieve your investment goals.
                            For more information on our stock market analysis API, please don't hesitate to contact us.</p>
                            <div className={csl.number}>+972 53 1112233</div>
                            <div className={csl.read}>Link to file README on github</div>
                    </div>
                    <div className={csl.right}>
                        <img className={csl.scene} src={scene} alt="" />
                    </div>   
                </div>
                
            </div>
        </div>


    )
}