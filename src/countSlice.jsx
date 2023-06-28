import { createSlice } from "@reduxjs/toolkit";
const countSlice = createSlice({
    name: 'list',
    initialState: [
        {
            id:"1",
            name:"Ai Jordan",
        },
    ],
    reducers: {
        deletes(state, action) {
          const itemId = action.payload;
          return state.filter((item) => item.id !== itemId);
        },
        addlists(state,action){
            return [...state,action.payload]
        }
    }
})
const { actions, reducer } = countSlice
export const {deletes, addlists} = actions;
export default reducer;