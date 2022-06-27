import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url } from 'inspector'
import NewProducts from '../../components/NewProducts'
import { RootState } from '../store'
import { IProduct } from "../../../types"

// interface NewProductsHome {
//   _id: string,
//   title: string,
//   description: string,
//   images: string[][],
//   size: [{
//     size: string,
// //     quantity: number
//   }],
//   category: Array<string>,
//   color: Array<string>,
//   price: number,


// }

interface ICartItem {
  productId: string,
  image: string,
  price: number,
  color: string,
  size: string,
  quantity: number

}
interface ICart {
  userId: string
  products: ICartItem[],
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
    baseUrl: 'https://shopr-server.herokuapp.com/api/',
    // baseUrl: 'https://shopr-backend.herokuapp.com/api/',
    // baseUrl: 'https://shopr-server-main.herokuapp.com/api/',
    // baseUrl: 'http://localhost:6000/api/',
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
    NewProductsHome: builder.query<{ data: Array<IProduct> }, void>({
      query: () => ({
        url: "product/all?new=true",
        method: "GET"

      })
    }),

    getProducts: builder.query<{ data: Array<IProduct> }, string>({
      query: (category) => ({
        url: `product/all?category=${category}`,
        method: "GET"
      }),
      // Pick out data and prevent nested properties in a hook or selector

      // transformResponse: (response: { data: Array<NewProductsHome> }, meta, arg) => response.data,

    }

    ),
    getProduct: builder.query<{ data: IProduct }, string>({
      query: (id) => ({
        url: `product/${id}`,
        method: "GET"

      })
    }),
    postCart: builder.mutation<{ data: ICart }, ICart>({
      query: (body) => ({
        url: `cart/`,
        method: "POST",
        body: body
      })
    }),
    getCart: builder.query<{message?: string,error?:string} , string>({
      query: (id) => ({
        url: `cart/${id}`,
        method: "GET",
      })
    }),
    postTotal: builder.mutation<{clientSecret: string} , string>({
      query: (body) => ({
        url: "/create-payment-intent",
        method: "POST",
        body
      })
    })
  }),
})

export const {
  useGetProductQuery,
  useGetProductsQuery,
  useLoginMutation,
  useProtectedMutation,
  useSignupMutation,
  useNewProductsHomeQuery,
  usePostCartMutation ,
  useGetCartQuery,
  usePostTotalMutation
} = api
