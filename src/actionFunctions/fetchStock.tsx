import { putStock } from "../reducers/stockReducer";

export const fetchStocks = (stock:{first:string, second:string, from:string, to:string}) => {
    console.log(stock)
    return async (dispatch:any) => {
        dispatch(putStock('Pending...'));
        try {
            const response = await fetch(
            `https://finstats.herokuapp.com/index/correlation`,
            // `https://finstats.herokuapp.com/register`,
            {
            method: 'POST',
            body:JSON.stringify(
                // {
                //     "login": "JavaFan",
                //     "firstName": "John",
                //     "lastName": "Smith",
                //     "roles": [
                //         "USER"
                //     ]
                // }
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