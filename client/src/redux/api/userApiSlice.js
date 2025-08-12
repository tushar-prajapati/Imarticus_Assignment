import { apiSlice } from "./apiSlice.js";
import { USERS_URL } from "../constants.js";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        login: builder.mutation({
            query: (data)=>({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.mutation({
            query: ()=>({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            })
        }),
        register: builder.mutation({
            query: (data)=>({
                url:`${USERS_URL}/signup`,
                method: 'POST',
                body: data,
            })
        }),
        updateOnCoursePurchase: builder.mutation({
            query: ({ userId, mobile, experience, location})=>({
                url:`${USERS_URL}/updateOnCoursePurchase`,
                method: 'POST',
                body: {userId, mobile, experience, location},
            })
        })
        
    })
});

export const {
    useLoginMutation, 
    useLogoutMutation, 
    useRegisterMutation,     
    useUpdateOnCoursePurchaseMutation
} = userApiSlice;