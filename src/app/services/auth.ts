import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

interface responseA{
  message: string
}
interface responseB{
  err: string
}
export interface User {
  first_name: string
  last_name: string
}

export interface UserResponse {
  user: User
  token: string
}

export interface LoginRequest {
  username: string,
  password: string,
}

export interface SignUpRequest {
  username: string,
  email: string,
  password: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shopr-server-main.herokuapp.com/api/',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
   
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
    signup: builder.mutation<{message ?: string, err ?: string}, SignUpRequest>({
      query: (credentials) => ({
        url: '/users/',
        method: 'POST',
        body: credentials
      })
  }),
    // "api/user/all": builder.
  }),
})

export const { useLoginMutation, useProtectedMutation, useSignupMutation } = api
