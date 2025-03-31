import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (_id) => {
        return {
          url: `/task/${_id}`,
          method: "DELETE",
          params: _id,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
} = baseApi;
