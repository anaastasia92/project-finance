import { createSlice } from "@reduxjs/toolkit"

const defaultStock = {
    first:'',
    second:'',
    from:'',
    to:''
}

const stockSlice = createSlice({
    name: 'stock',
    initialState: defaultStock,
    reducers: {
        putStock(stock, action){
            stock.first = action.payload.first;
            stock.second = action.payload.second;
            stock.from = action.payload.from;
            stock.to = action.payload.to;
        }
    }
})

export const {putStock} = stockSlice.actions;
export default stockSlice.reducer;
