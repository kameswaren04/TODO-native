import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'users',
    initialState:{
        id:'',
        title:'',
        body:'',
        data:[]
    },
    reducers:{
        storeData:(state,action)=>{
            state.data = action.payload;
        },
        createData:(state,action) =>{
            state.data.push(action.payload);
        },
        editData:(state,action)=>{
            state.data = [...action.payload]
        },
        deleteData:(state,action)=>{
            state.data = state.data.filter(item => item.id !== action.payload);

        }
    }
});

export const {createData,storeData,editData,deleteData } = userSlice.actions;
export default userSlice.reducer;