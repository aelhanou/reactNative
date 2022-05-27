import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// export const getAllChambres = createAsyncThunk(
//   "chambre/getAllChambres",
//   async () => {
//     return await get("chambres");
//   }
// );

// export const addChambre = createAsyncThunk(
//   "chambre/addChambre",
//   async (body) => {
//     let res = await post("addChambre", body);
//     // dispatch(getAllChambres())
//     return await res.json();
//   }
// );

const initialState = {
    auth: false,
};

export const SignInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.auth = payload.auth
        }
    },
    extraReducers: {
        // [getAllChambres.fulfilled]: (state, { payload }) => {
        //   console.log(state.allChambares);
        //   state.allChambares = payload;
        // },
        // [addChambre.fulfilled]: (state, { payload }) => {
        //   state.allChambares.push(payload);
        // },
    },
});

export const { login } = SignInSlice.actions;
export default SignInSlice.reducer;