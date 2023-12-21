
import { putStock } from "../reducers/stockReducer";
import { baseUrl } from "../units/constants";

export const fetchStocks = (stock:{first:string, second:string, from:string, to:string}) => {
    console.log(stock)
    const login = 'test';
    const password = '1234'
    return async (dispatch:any) => {
        dispatch(putStock('Pending...'));
        try {
            const response = await fetch(`${baseUrl}/account/login`,{
                method: 'POST',
                headers:{
                    'Authorization': `Basic ` + btoa(login  + ':' + password),
                    'Content-Type': 'application/json',
            },
                body:JSON.stringify( 
                    {
                        "login": "test",
                        "firstName": "test",
                        "lastName": "test",
                         "roles": [
                              "USER"
                         ]
                    }      
            )
            });
            if(!response.ok){
                throw new Error ('Login failed');
            }
            const dataLogin = await response.json();
            console.log('Correlation data:', dataLogin);
            const stokcResponse = await fetch (`${baseUrl}/communication/index/correlation`,{
                method: 'POST',
                headers:{
                    'Authorization': `Bearer ` + dataLogin.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   indexs:[stock.first, stock.second],
                   from: stock.from,
                   to: stock.to
                }),
            });
            if(!stokcResponse.ok){
                throw new Error ('Failed to fetch correlation data')
            }
            const dataStock = await stokcResponse.json();
            dispatch(putStock(null))
            dispatch(putStock(dataStock));
        } catch (e) {
            console.log(e);
            dispatch(putStock('Enter correct stock'));
        }
    }

}

            