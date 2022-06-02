import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url } from 'inspector'
import { RootState } from '../store'

interface NewProductsHome {
  title: string,
  description: string,
  images: string[][],
  size: [{
    size: string,
    quantity: number
  }],
  category: Array<string>,
  color: Array<string>,
  price: number,


}
interface responseA {
  message: string
}
interface responseB {
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
      const token = (getState() as RootState).auth.token || localStorage.getItem("token")
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({

    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/signin',
        method: 'POST',
        body: credentials,
      }),
    }),

    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
    signup: builder.mutation<{ message?: string, err?: string }, SignUpRequest>({
      query: (credentials) => ({
        url: '/users/',
        method: 'POST',
        body: credentials
      })
    }),
    signout: builder.query<{ message?: string }, void>({
      query: () => ({
        url: "auth/signout",
        method: "GET"
      })
    }),

    // "api/user/all": builder.
    NewProductsHome: builder.query<{ data: Array<NewProductsHome> },void>({
      query: () => ({
        url: "product/all?new=true",
        method: "GET"

      })
    })
  }),
})

export const { useLoginMutation, useProtectedMutation, useSignupMutation , useNewProductsHomeQuery } = api
