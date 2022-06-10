import { createSlice } from "@reduxjs/toolkit";
import projects from "../data/projects";

const initialState = projects;

export const projectSlice = createSlice({
  name: "projects",
  initialState,
});

export default projectSlice.reducer;
