import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  initialEnter:boolean,
  isArabic:boolean,
  islogin: boolean,
  Name: string,
  Email: string,
  Username: string,
  Points: number,
  Level: number

}

const initialState: CounterState = {
  value: 0,
  initialEnter:false,
  isArabic:false,
  islogin: false,
  Name: '',
  Email: '',
  Username: '',
  Points: 0,
  Level: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    isLoginState: (state, action: PayloadAction<boolean>) => {
      state.islogin = action.payload
    },
     SetInitialEnter: (state, action: PayloadAction<boolean>) => {
      state.initialEnter = action.payload;
    },
      SetArabic: (state, action: PayloadAction<boolean>) => {
      state.isArabic = action.payload;
    },

    SetName: (state, action: PayloadAction<string>) => {
      state.Name = action.payload;
    },

    SetEmail: (state, action: PayloadAction<string>) => {
      state.Email = action.payload;
    },

    SetUsername: (state, action: PayloadAction<string>) => {
      state.Username = action.payload;
    },

    SetPoints: (state, action: PayloadAction<number>) => {
      state.Points = action.payload;
    },

    SetLevel: (state, action: PayloadAction<number>) => {
      state.Level = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const {SetInitialEnter,SetArabic, increment, decrement, incrementByAmount, isLoginState, SetName, SetUsername, SetEmail, SetPoints, SetLevel } = counterSlice.actions

export default counterSlice.reducer