import csl from '../../pages/pageAnalytics/Analytics.module.css'

export default function Box (){
    return(
        <div className={csl.box}>
            <div className={csl.box1}>
                <div className={csl.appl}>APPL</div>
                <div className={csl.nas}>NasdaqGS - NasdaqGS Real Time Price.</div>
                <div className={csl.currency}>Currency in USD</div>
                <div className={csl.number}>
                    <div className={csl.numb1}>157.66</div>
                    <div className={csl.numb3}>+0.26 (+0.2%)</div>
                </div>
                <div className={csl.minMax}>
                    <div>Min.price: 132.2</div>
                    <div>Max.price: 161.30</div>
                </div>
            </div>
        </div>
    )
}