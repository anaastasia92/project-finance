import csl from './Calculate.module.css'

export default function Calculate({onClick}:{onClick: () => void}){
    
    return(

            <button onClick={onClick}  className={csl.calculate}>Calculate</button>


    )
}