import { apiSlice } from "./apiSlice.js";
import { COURSES_URL } from "../constants.js";

export const courseApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
       fetchCourseDetails: builder.query({
        query: ({courseId})=>({
            url: `${COURSES_URL}/${courseId}`
        }),
        providesTags: ['Course']
       }),
       summarizeFile : builder.mutation({
         query: ({fileUrl})=>({
            url: `${COURSES_URL}/summarize`,
            method: 'POST',
            body: {fileUrl}
         })
       })
    })

});

export const {
   useFetchCourseDetailsQuery,
   useSummarizeFileMutation
} = courseApiSlice;