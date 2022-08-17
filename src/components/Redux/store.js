import { configureStore } from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";

const initialState={items:[], filter:''};

const sliceContacts=createSlice({
    name:"contacts",
    initialState,
    reducers:{
        setContacts(state,action){return {...state,items:[...state.items,action.payload]}
        },
        deleteContact(state,action){
            return  {...state,items:state.items.filter(object=>object.name !== action.payload)}
        },
        setFilter(state,action){
            return {...state,filter:action.payload}
        }
    }
})

export const{setContacts,deleteContact,setFilter}=sliceContacts.actions

export const store=configureStore({
    reducer:  {
            contacts:sliceContacts.reducer,
        },
    },
)
