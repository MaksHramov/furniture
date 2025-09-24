import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CardProps } from "../../widgets/Card/Card.props";

interface CartState{
    items : CardProps[]
}

const initialState : CartState = {
    items: []
}

const likedSlice = createSlice({
    name: 'liked',
    initialState,
    reducers: {
        addToLiked(state, action: PayloadAction<CardProps>){
            state.items.push(action.payload);
        },
        removeFromLiked(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearLiked(state){
            state.items = [];
        }
    }
})

export const {addToLiked, removeFromLiked, clearLiked} = likedSlice.actions;
export default likedSlice.reducer