import BasicTable from "./Table";
import csl from './Table.module.css'
export default function TablePrice(){
    return(

        <div className={csl.right}>
            <h1>Today’s Price Fluctuations</h1>
            <BasicTable/>
        </div>

    )
}