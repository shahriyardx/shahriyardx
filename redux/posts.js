import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.value = action.payload
    },
    updatePost: (state, action) => {
      state.value = state.value.map(post => action.payload._id == post._id ? action.payload : post)
    },
    addPost: (state, action) => {
      state.value = [...state.value, action.payload]
    },
    deletePost: (state, action) => {
      state.value = state.value.filter(post => post._id !== action.payload)
    }
  },
})

export const { setPosts, updatePost, addPost, deletePost } = postSlice.actions

export default postSlice.reducer