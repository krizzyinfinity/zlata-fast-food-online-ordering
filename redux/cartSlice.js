import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,

    },
    reducers: {
        addProduct:(state, action)=>{
            state.products.push(action.payload);
            state.quantity +=1;
            state.total += action.payload.price * action.payload.quantity;
        
        },
        reset:(state)=> {
            state.products = [];
            state.quantity = 0;
            state.total = 0;

        },
        
        removeFromCart:(state, action)=> {
            
           
            const nextItem = state.products.filter(product => 
                product.id !== action.payload.id);
              state.quantity -= 1;
              state.total -= action.payload.price * action.payload.quantity;
               
            
             state.products = [nextItem -1];
            },
    },
});


export const { addProduct, reset, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;