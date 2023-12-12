import cls from './Slogan.module.css';
import icon from '../images/icon.png'
import coin from '../images/coin.png'
import raceta from '../images/raceta.png' 

export default function Slogan(){

    return (
        <main className={cls.main} >
        <div className={cls.block}>
        <div className= {cls.left}>

            <h1>
                Build Your Ideal Investment Portfolio
            </h1>
            <p>
            Make informed investment decisions with data analysis
            </p>
            <button>GET STARTED </button>
        </div>
        <div className= {cls.right}>
        <img  className={cls.icon} src={icon} alt=""/> 
        <img className={cls.coin} src={coin} alt=""/>
        </div>
        
</div>
<section className={cls.box}>
    <div className={cls.statistic}>
        <p>EXPLORING SECURITIES TRENDS</p>
        <h3>Statistics</h3>    
    </div>
    <div className={cls.analysis}>
        <p>SMART INVESTMENT INSIGHTS</p>
        <h3>Analysis</h3>
    </div>
    <div className={cls.stock}>
        <p>REAL-TIME DATA & ANALYSIS</p>
        <h3>Stock API</h3>
    </div>
</section>
     </main>   
        
    )
}

