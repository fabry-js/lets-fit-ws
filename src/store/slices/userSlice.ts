import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpecialLoginResolveData } from "../../utils/firebase";

type SliceState = { idAzienda: string, restaurantName: string };

const slice = createSlice({
  name: "user",
  initialState: {
    idAzienda: "",
    restaurantName: ""
  } as SliceState,
  reducers: {
    setUserInfos: (state, action: PayloadAction<SpecialLoginResolveData>) => {
      const { idAzienda, restaurantName } = action.payload;
      state.idAzienda = idAzienda;
      state.restaurantName = restaurantName;
    },
    deleteUserInfos: (state) => {
      state.idAzienda = "";
      state.restaurantName = "";
    }
  }
})

// def red
export default slice.reducer;

// actions
export const { setUserInfos, deleteUserInfos } = slice.actions;

// selectors

export const getCurrentUserInfos = createSelector(
  (state: any) => state.user,
  (infos: SpecialLoginResolveData) => infos
)