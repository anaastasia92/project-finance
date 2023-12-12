
import { fetchStocks } from '../../../actionFunctions/fetchStock';
import Calculate from '../../Buttom/Calculate'
import csl from './StocksForms.module.css'
import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux';



export default function StocksForms(){
    
    //const Form = () => {
        const [firstStock, setFirstStock] = useState('');
        const [secondStock, setSecondStock] = useState('');
        const [stock, setStock] = useState({
            'first':'',
            'second':'',
            'from':'',
            'to':''
        });
        const dispatch = useDispatch();

        const handleClick = ()=> {
            console.log('stock',stock)
            // @ts-ignore
           dispatch(fetchStocks(stock));
            //setFirstStock('')
        }

        const handleChange = (e: ChangeEvent <HTMLInputElement>) => {
            console.log(e.target.value)
            e.preventDefault()
            setStock ({...stock,[e.target.name]:e.target.value})
        }

        // // const handleChangeSecond = (e: ChangeEvent <HTMLInputElement>) => {
        // //     console.log(e.target.value)
        // //     setSecondStock (e.target.value);
        // }//


   // }
   
    return(
        <div className={csl.right}>
                <div className={csl.form}>
                    <p>Select stocks and analysis period</p>
                    <div className={csl.field}>
                        <div className={csl.block}>
                            <div className={csl.label}>
                                <label htmlFor='from'>From</label>
                                <input onChange={handleChange}
                                type='date' 
                                name={'from'}
                                value={stock.from}
                                placeholder="DD/MM/YYYY"/>
                        </div>
                        <div className={csl.label}>
                            <label htmlFor='to'>To</label>
                            <input onChange={handleChange}
                            type='date' 
                            name={'to'}
                            value={stock.to}
                            placeholder="DD/MM/YYYY"/>
                        </div>
                        </div>

                        <div className={csl.label}>
                            <label htmlFor='firstSymbol'>First Symbol</label>
                            <input 
                            onChange={handleChange}
                            type='text' 
                            placeholder='Stock'
                            name={'first'}
                            value={stock.first}/>
                        </div>
                        
                        <div className={csl.label}> 
                            <label htmlFor='secondSymbol'>Second Symbol</label>
                           <input onChange={handleChange}
                           type='text' 
                           placeholder='Stock'
                           name={'second'} 
                           value={stock.second}/>
                        </div>
                       
                    </div>

                    <Calculate onClick={handleClick}/>
                    
                </div>
            </div>
    )
}

