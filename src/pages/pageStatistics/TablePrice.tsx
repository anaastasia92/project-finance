
import csl from './Table.module.css'
import TableStatic from "./TableStatic";

export default function TablePrice({styleName}:{styleName: string}){
    return(

        <div className={styleName ? csl[`${styleName}`] : csl.right}>
            <h1>Today’s Price Fluctuations</h1>
            <TableStatic/>
        </div>

    )
}