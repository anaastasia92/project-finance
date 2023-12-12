import csl from '../../pages/pageAnalytics/Analytics.module.css'

export default function BoxGold (){
    return(
        <div className={csl.box}>
            <div className={csl.box2}>
                <div className={csl.gold}>Gold</div>
                <div className={csl.comex}>COMEX - COMEX Delayed Price.</div>
                <div className={csl.currency}>Currency in USD</div>
                <div className={csl.number}>
                    <div className={csl.numb1}>1,943.90</div>
                    <div className={csl.numb2}>-38.90 (-1.96%)</div>
                </div>
                <div className={csl.minMax}>
                    <div>Min.price: 1,726.25</div>
                    <div>Max.price: 2002.10</div>
                </div>   
            </div>
        </div>
    )
}