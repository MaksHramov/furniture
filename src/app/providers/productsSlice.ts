import { createSlice} from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadItems(state, action){
            state.items = action.payload
        }
    }
})

export const {loadItems} = productsSlice.actions;
export default productsSlice.reducer