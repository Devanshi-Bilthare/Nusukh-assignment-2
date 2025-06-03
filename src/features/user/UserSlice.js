import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { UserService } from "./UserService"

export const getUserData = createAsyncThunk('all/users',async(thunkApi) => {
    try{
        return await UserService.GetUserData()

    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})

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
        .addCase(getUserData.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(getUserData.fulfilled,(state,action)=>{
            state.isLoading = false,
            state.isSuccess = true,
            state.allUsers = action.payload
        })
        .addCase(getUserData.rejected,(state) => {
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.allUsers = null
        })
    }
})


export const {setUser,logoutUser} = UserSlice.actions
export default UserSlice.reducer