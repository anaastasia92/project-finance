import csl from './InsightsForms.module.css'
import Calculate from '../../Buttom/Calculate'

export default function InightsForms(){
    return(
<form className={csl.formMiddle}>


                <div className={csl.labelMiddle}>
                  <label htmlFor='from'>From</label>
                  <input type='date' placeholder="DD/MM/YYYY" />
                </div>

                <div className={csl.labelMiddle}>
                  <label htmlFor='to'>To</label>
                  <input type='date' placeholder="DD/MM/YYYY" />
                </div>

                <div className={csl.labelMiddle}>
                  <label htmlFor='stock'>Stock</label>
                  <input type='text' placeholder="APPL" />
                </div>

                <div className={csl.labelMiddle}>
                  <label htmlFor='amount'>Amount $</label>
                  <input type='number' placeholder="200" />
                </div>

                <div className={csl.labelMiddle}>
                  <label htmlFor='period'>Period, days</label>
                  <input type='number' placeholder="5" />
                </div>
                
                <Calculate onClick={()=>{}}/>

        </form>
    )
}