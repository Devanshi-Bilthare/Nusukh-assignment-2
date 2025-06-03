import { createAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    allUsers:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const resetState = createAction('Reset_all')

export const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action) => {
            state.user = action.payload
            localStorage.setItem('user',JSON.stringify(action.payload))

        },
        logoutUser : (state)=> {
            state.user = null
            localStorage.removeItem('user')
        }
    },
    extraReducers:(builder) => {
        builder.addCase(resetState, () => initialState)
    }
})


export const {setUser,logoutUser} = UserSlice.actions
export default UserSlice.reducer