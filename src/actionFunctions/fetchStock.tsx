import { putStock } from "../reducers/stockReducer";
import { base_url } from "../units/constants";

export const fetchStocks = (stock:{first:string, second:string, from:string, to:string}) => {
    console.log(stock)
    return async (dispatch:any) => {
        dispatch(putStock('Pending...'));
        try {
            const response = await fetch(
            `${base_url}/communication/index/correlation`,
            {
            method: 'POST',
            body:JSON.stringify(
                {
                indexs:[stock.first, stock.second],
                from: stock.from,
                to: stock.to
        }
        )});
            const data = await response.json();
            dispatch(putStock(null))
            dispatch(putStock(data));
        } catch (e) {
            console.log(e);
            dispatch(putStock('Enter correct stock'));
        }
    }

}