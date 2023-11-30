import Calculate from '../../Buttom/Calculate'
import csl from './StocksForms.module.css'

export default function StocksForms(){
    return(
        <div className={csl.right}>
                <form className={csl.form}>
                    <p>Select stocks and analysis period</p>
                    <div className={csl.field}>
                        <div className={csl.block}>
                            <div className={csl.label}>
                                <label htmlFor='from'>From</label>
                                <input type='date' placeholder="DD/MM/YYYY"/>
                        </div>
                        <div className={csl.label}>
                            <label htmlFor='to'>To</label>
                            <input type='date' placeholder="DD/MM/YYYY"/>
                        </div>
                        </div>

                        <div className={csl.label}>
                            <label htmlFor='firstSymbol'>First Symbol</label>
                            <input type='text' placeholder='APPL' />
                        </div>
                        
                        <div className={csl.label}> 
                            <label htmlFor='secondSymbol'>Second Symbol</label>
                           <input type='text' placeholder='S&P500' />
                        </div>
                       
                    </div>

                    <Calculate/>
                    
                </form>
            </div>
    )
}