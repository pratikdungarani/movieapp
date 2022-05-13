import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, APIKEY } from "config/config";
import { createSlice } from "@reduxjs/toolkit";

// THE Movie DB API
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery,
  tagTypes: ["moviesapp"],
  endpoints: (builder) => ({
    // get ALL Popular Movie
    nowPlayingMovie: builder.query({
      query: () => {
        return {
          url: `movie/now_playing?api_key=${APIKEY}`,
          method: "GET",
        };
      },
    }),
    // get ALL Popular Movie
    getPopularMovie: builder.query({
      query: () => {
        return {
          url: `discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`,
          method: "GET",
        };
      },
    }),
    // Search Movie
    videoMovie: builder.mutation({
      query: (id) => {
        return {
          url: `movie/${id}/videos?api_key=${APIKEY}`,
          method: "GET",
        };
      },
    }),
    // Search Movie
    searchMovie: builder.mutation({
      query: (search) => {
        return {
          url: `search/movie?api_key=${APIKEY}&query=${search}`,
          method: "GET",
        };
      },
    }),
    // get Movie Detail
    MovieDetail: builder.mutation({
      query: (id) => {
        return {
          url: `movie/${id}?api_key=${APIKEY}`,
          method: "GET",
        };
      },
    }),
    //  Movie Starcast
    MovieStarCast: builder.mutation({
      query: (id) => {
        return {
          url: `movie/${id}/credits?api_key=${APIKEY}`,
          method: "GET",
        };
      },
    }),
    // Similar Movie
    SimilarMovie: builder.mutation({
      query: (id) => {
        return {
          url: `movie/${id}/similar?api_key=${APIKEY}`,
          method: "GET",
        };
      },
    }),
    //  Movie Reviews
    MovieReviews: builder.mutation({
      query: (id) => {
        return {
          url: `movie/${id}/reviews?api_key=${APIKEY}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useNowPlayingMovieQuery,
  useGetPopularMovieQuery,
  useVideoMovieMutation,
  useSearchMovieMutation,
  useMovieDetailMutation,
  useMovieStarCastMutation,
  useSimilarMovieMutation,
  useMovieReviewsMutation,
} = moviesApi;

// Json Place hplder API
export const usersApi = createApi({
  reducerPath: "userapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    // Get Users
    getUsers: builder.query({
      query: () => {
        return {
          url: `users`,
          method: "GET",
        };
      },
    }),
  }),
});
export const { useGetUsersQuery } = usersApi;

// Cretae Slice Practice
let userData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "clementine",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
  },
];
export const userSlice = createSlice({
  name: "userslist",
  initialState: { data: userData },
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
