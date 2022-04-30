import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.value = action.payload
    },
    updateProject: (state, action) => {
      state.value = state.value.map(project => action.payload._id == project._id ? action.payload : project)
    },
    addProject: (state, action) => {
      state.value = [...state.value, action.payload]
    },
    deleteProject: (state, action) => {
      state.value = state.value.filter(project => project._id !== action.payload)
    }
  },
})

export const { setProjects, updateProject, addProject, deleteProject } = projectSlice.actions

export default projectSlice.reducer