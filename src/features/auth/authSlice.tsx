import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../../app/services/api'
import type { RootState } from '../../app/store'
// import use

export type AuthState = {
  user: User | null
  token: string | null
}

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = user
      console.log(state.user)
      state.token = token
    },
    removeCredentials: (state) => {
      state.user = null,
      state.token = null
    }
    // removeCredentials: (
    //   state,
    //   { payload: { user, token } }: PayloadAction<{ user: ; token: string }>
    // ) => {
    //   state.user = user
    //   state.token = token
    // },
  },
})

export const { removeCredentials,setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
