import { createSlice } from "@reduxjs/toolkit";

export const increment = createSlice({

    name:'increment',
    initialState: {

        valor: {

            aumentar:0
        },
    },


    reducers: {


        incrementar: (state, action) => {

            state.valor += 1
        }


    }


})